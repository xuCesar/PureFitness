import axios from 'axios'
import qs from 'qs'
import Promise from 'es6-promise'
import store from 'store/storages/sessionStorage'
import * as GLOBAL from '@/scripts/_variables'

const apiList = {
  postUserInfo: 'http://pure.51xzxz.com/InterFace/Service.ashx?action=add',
}

axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.baseURL = GLOBAL.API_BASE_URL

// POST序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  console.log('params error')
  return Promise.reject(error)
})

// 返回状态判断
axios.interceptors.response.use((res) => {
  if (res.status !== 200) {
    console.log(res)
    return Promise.reject(res)
  }
  // console.log(res.data)
  res.data.code = ~~res.data.code
  if (res.data.code === GLOBAL.RES_NOT_EMPLOYEE) {
    store.clearAll()
    // const redirectUrl = location.origin + location.pathname
    // window.location.href = GLOBAL.AUTH_URL + redirectUrl
    return
  }
  return res.data
}, (error) => {
  console.log('network error')
  return Promise.reject(error)
})

function fetchGet (url, params) {
  return axios.get(url, {params})
    .then((res) => {
      return Promise.resolve(res)
    }, (error) => {
      return Promise.reject(error)
    })
    .catch((error) => {
      return Promise.reject(error)
    })
}

function fetchPost (url, data) {
  return axios({
    method: 'post',
    url,
    data
  })
    .then((res) => {
      return Promise.resolve(res)
    }, (error) => {
      return Promise.reject(error)
    })
    .catch((error) => {
      return Promise.reject(error)
    })
}

export default {
  fetchGet,
  fetchPost,
  postUserInfo (params) {
    return fetchPost(apiList.postUserInfo, params)
  },
}
