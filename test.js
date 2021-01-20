const run = require('./index')

const username = "cagataycali";

run(username).then(async (promises) => {
  const result = await Promise.all(promises);
  console.log(result);
});