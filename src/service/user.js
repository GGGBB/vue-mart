import axios from 'axios'

export default {
  login (user) {
    return axios.get('/api/login', { params: user })
      .then(({ data }) => data)
  },
  userInfo () {
    return axios.get('/api/userinfo').then(({ data }) => data).catch(error => { return { code: 4001, data: { message: '验证失败', err: error } } })
  }
}
