const moment = require('moment')
const FeedParser = require('feedparser')
const request = require('request')
const RxNode = require('rx-node')

const feed = 'http://blog.counter-strike.net/index.php/category/updates/feed/'

const feedStream = url =>
  RxNode.fromReadableStream(request(url).pipe(new FeedParser()))

const isAfter = date => entry =>
  moment(entry.date).isAfter(date)

module.exports = function changelog () {
  const lastFridayAfternoon = moment().day(-2).startOf('day').hours(17)

  return feedStream(feed)
    .takeWhile(isAfter(lastFridayAfternoon))
}
