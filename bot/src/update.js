const readline = require('readline')
const RxNode = require('rx-node')

module.exports = function update (input) {
  const stream = RxNode.fromReadLineStream(readline.createInterface({ input }))

  const updateStream = stream
    .takeWhile(line => !line.match(/^Success! App '\d+' fully installed.$/))
    .filter(line => line.match(/^ Update state /))
    .map(line => line.match(/^ Update state \([^\)]+\) ([^,]+), progress: ([\d\.]+) \((\d+) \/ (\d+)\)/))
    .map(([match, action, percent, progress, total]) => ({ action, percent, progress, total }))

  const upToDateStream = stream
    .find(line => line.match(/^Success! App '\d+' already up to date.$/))

  return { updateStream, upToDateStream }
}
