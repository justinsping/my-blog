import axios from '../axios'

var api = {
  editBlog (params) {
    return axios.post('/editBlog', params)
  },
  userLogin (params) {
    return axios.post('/login', params)
  }
}

export default api
