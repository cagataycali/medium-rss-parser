const Parser = require("rss-parser")
const parser = new Parser()
const { getMetadata } = require("page-metadata-parser")
const got = require('got')
const domino = require("domino")

const run = async (username) => {
  const feed = await parser.parseURL(`https://medium.com/feed/${username}`)
  let data = feed.items.map((item) => {
    delete item["content:encoded"]
    delete item["content:encodedSnippet"]
    return item
  })

  return Promise.all(data.map(async row => {
    const response = await got(row.link)
    const html = response.body
    const doc = domino.createWindow(html).document
    const metadata = { ...getMetadata(doc, row.link), ...row }
    return metadata
  }))
  
}

module.exports = run