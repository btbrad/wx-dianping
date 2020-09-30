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
  const { id } = event
  if (!id) {
    result = {
      code: 1,
      msg: '缺少参数'
    }
    return result
  }
  const res = await db.collection('dianping').where({
    id
  }).get()
  let { data } = res
  // let total = data.length
  // if (!total) {
  //   result = {
  //     code: 1,
  //     msg: '未查到数据❗️'
  //   }
  //   return result
  // }
  result = {
    code: 0,
    data,
    msg: 'OK'
  }
  return result
}
