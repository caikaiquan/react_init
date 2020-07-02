import NoFind from '../../views/404/404'
import App from '../../views/App/App.js'
import Demo from '../../views/Demo/demo'
import Home from '../../views/home/home'
import Login from '../../views/user/login/login'

/** 
 * auth 设置为 true，表示该路由需要权限校验
 * **/
const routerConfig = [
  {
    path: '/',
    component: Home,
    auth: true, 
  },
  {
    path: '/app',
    component: App,
    auth: true, 
  },
  {
    path: '/demo',
    component: Demo,
    auth: true, 
  },
  {
    path: '/login',
    component: Login,
    auth: false, 
  },
  {
    path: '/404',
    component: NoFind,
  }
]

export default routerConfig