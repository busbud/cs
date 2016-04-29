const { spawn } = require('child_process')
const os = require('os')
const Stdbot = require('stdbot')

const onError = err => console.error(err.stack || err)

module.exports = function cli (config) {
  const bot = Stdbot(config.adapter)

  const ip = os.networkInterfaces()[config.interface]
    .find(interface => interface.family === 'IPv4')
    .address

  bot.on('error', onError)

  bot.on('load', () => {
    bot.messageRoom(config.room, `@team, Starting server on **${ip}**`)
      .then(() => {}, onError)

    spawn(config.runCommand[0], config.runCommand.slice(1), { stdio: 'inherit' })
  })
}
