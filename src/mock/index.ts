import Mock from 'mockjs'
import system from './system'
import user from './user'

// system
Mock.mock('/api/system/login', 'post', system.login)

// user
Mock.mock('/api/user/profile', 'get', user.getProfile)

export default Mock
