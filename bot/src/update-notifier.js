const { spawn } = require('child_process')
const filesize = require('filesize')
const Stdbot = require('stdbot')
const changelog = require('./changelog')
const update = require('./update')

const progressMessage = ({ action, percent, progress, total }) =>
  `Updating the server: ${action}: **${percent}%** _(${filesize(progress)} / ${filesize(total)})_`

const doneMessage = ({ total }) =>
  `Updating the server: done, downloaded _${filesize(total)}_.`

const onError = err => console.error(err.stack || err)

const sendChangelog = () =>
  changelog()
    .map(({ title, link }) => `* [${title}](${link})`)
    .toArray()
    .map(links => links.join('\n'))
    .map(links => `It's Counter-Strike day!\n${links}`)

const runUpdate = updateCommand =>
  spawn(updateCommand[0], updateCommand.slice(1))

const sendUpdate = (input, edit) => {
  const { updateStream, upToDateStream } = update(input)

  updateStream
    .map(progressMessage)
    .flatMap(text => edit(text))
    .subscribe(() => {}, onError)

  updateStream
    .last({ defaultValue: null })
    .filter(state => state)
    .map(doneMessage)
    .flatMap(text => edit(text))
    .subscribe(() => {}, onError)

  upToDateStream
    .flatMap(() => edit('Server is already up-to-date!'))
    .subscribe(() => {}, onError)
}

module.exports = function cli (config) {
  const bot = Stdbot(config.adapter)

  bot.on('error', onError)

  bot.on('load', () => {
    sendChangelog()
      .flatMap(text => bot.messageRoom(config.room, text))
      .flatMap(message => message.send('Checking server updates...'))
      .map(message => {
        const update = runUpdate(config.updateCommand)
        sendUpdate(update.stdout, message.edit)
        update.stdout.pipe(process.stdout)
        update.on('exit', bot.end)
      })
      .subscribe(() => {}, onError)
  })
}
