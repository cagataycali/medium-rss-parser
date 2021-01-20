# Medium RSS && Metadata Parser

# Install

```bash
npm i medium-rss-parser
```

```javascript
const run = require('medium-rss-parser')
const username = 'cagataycali'

run(username).then(async promises => {
  const result = await Promise.all(promises)
  console.log(result)
})
```