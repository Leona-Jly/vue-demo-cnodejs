import axios from 'axios'

// 配置API接口地址
const root = 'https://cnodejs.org/api/v1' // 浏览器中network中的topics请求地址为'https://cnodejs.org/api/v1/topics'

// const root = '/api/v1' // 浏览器中network中的topics请求地址为'http://localhost:8080/api/v1/topics'，前提是根目录下config/index.js中dev开启proxyTable中的'/api/v1/**'配置

// 自定义判断元素类型js
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (obj) {
  for (let key in obj) {
    if (obj[key] === null) {
      delete obj[key]
    }
    if (toType(obj[key] === 'string')) {
      obj[key] = obj[key].trim()
    } else if (toType(obj[key]) === 'object') {
      obj[key] = filterNull(obj[key])
    } else if (toType(obj[key]) === 'array') {
      obj[key] = filterNull(obj[key])
    }
  }
  return obj
}

/*
  接口处理函数
  这个函数每个项目都是不一样的，我现在调整的是适用于
  https://cnodejs.org/api/v1 的接口，如果是其他接口
  需要根据接口的参数进行调整。参考说明文档地址：
  https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
  主要是，不同的接口的成功标识和失败提示是不一致的。
  另外，不同的项目的处理方法也是不一致的，这里出错就是简单的alert
*/

function apiAxios (method, url, params = {}, success, failure) {
  // if (!requestMethod || toType(requestMethod) !== 'string') {
  //   console.error('apiAxios: 请传入正确的method格式')
  //   return
  // }
  // let method = requestMethod.toUpperCase()
  if (params) {
    params = filterNull(params)
  }

  axios({
    method,
    url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DETELE' ? params : null,
    baseURL: root,
    withCredentials: false, // indicates whether or not cross-site Access-Control requests should be made using credentials
    // transformRequest: data => transformRequest(data),
    // transformResponse: data => transformResponse(data),
    timeout: 30000
  })
    .then(res => {
      if (res.data.success) {
        if (toType(success) === 'function') success(res.data)
      } else {
        if (toType(failure) === 'function') {
          failure(res.data)
        } else {
          window.alert('error: ' + JSON.stringify(res.data))
        }
      }
    })
    .catch(err => {
      // if (err) window.alert('api error, HTTP CODE: ' + err.response.status)
      if (err) window.alert('catch err: ' + JSON.stringify(err))
    })
}

// `transformRequest` allows changes to the request data before it is sent to the server
// This is only applicable for request methods 'PUT', 'POST', and 'PATCH'
// The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
// FormData or Stream
// You may modify the headers object.
function transformRequest (data) {
  console.log('transformRequest data: ', data)
}

// `transformResponse` allows changes to the response data to be made before
// it is passed to then/catch
function transformResponse (data) {
  // console.log('transformResponse data: ', data)
}

export default {
  get: (url, params, success, failure) => {
    return apiAxios('GET', url, params, success, failure)
  },
  post: (url, params, success, failure) => {
    return apiAxios('POST', url, params, success, failure)
  },
  put: (url, params, success, failure) => {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete: (url, params, success, failure) => {
    return apiAxios('DELETE', url, params, success, failure)
  }
}
