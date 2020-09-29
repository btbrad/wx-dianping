// eslint-disable-next-line no-unused-vars
const cloud = require('wx-server-sdk')
cloud.init({
  traceUser: true
})

const db = cloud.database({
  env: 'cloud-test-2lm7t'
})
exports.main = async (event, context) => {
  const res = await db.collection('dianping').get()
  return res
}
