// eslint-disable-next-line no-unused-vars
const cloud = require('wx-server-sdk')
cloud.init({
  traceUser: true
})

const db = cloud.database({
  env: 'cloud-test-2lm7t'
})
exports.main = async (event, context) => {
  let result = null
  const { page, size } = event
  if (!page || !size) {
    result = {
      code: 1,
      msg: '缺少参数'
    }
    return result
  }
  const res = await db.collection('dianping').get()
  let { data } = res
  let total = data.length
  if (page > Math.ceil(total / size)) {
    result = {
      code: 1,
      msg: '没有更多了❗️'
    }
    return result
  }
  let start = size * (page - 1)
  let list = data.filter((item, index) => (index >= start && index < (start + size)))
  result = {
    code: 0,
    list,
    total,
    msg: 'OK'
  }
  return result
}
