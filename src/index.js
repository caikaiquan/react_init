import React from 'react';
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import reducer from './redux/reducer.js'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { HashRouter, Switch } from 'react-router-dom'
import './index.scss';
import './assets/css/base.scss'
import './assets/css/public.css'
import './assets/font/iconfont.css'

/**
 * 引入组件文件
 * **/
// import NoFind from './views/404/404'
// import App from './views/App/App.js'
// import Demo from './views/Demo/demo'
// import Home from './views/home/home'
// import Login from './views/user/login/login'
import FrontendAuth from './component/FrontendAuth/FrontendAuth'
import routerConfig from './component/FrontendAuth/router.config'
import BaseParam from './plugins/config'


console.log(BaseParam)
/**
 * redux使用
 * React通过redux-persist持久化数据存储
 * **/
const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
};
const myPersistReducer = persistReducer(persistConfig, reducer)
const store = createStore(myPersistReducer, composeWithDevTools(
  applyMiddleware(thunk),
));
const persistor = persistStore(store)
console.log(process.env.REACT_APP_PATH)
/**
 * 路由相关
 * **/
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter >
        <Switch>
          {/* <Route path='/demo' component={Demo} />
          <Route path='/App' component={App} />
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/404' component={NoFind} />
          <Redirect to='/404' /> */}
          <FrontendAuth config={routerConfig} />
        </Switch>
      </HashRouter >
    </PersistGate>

  </Provider>,
  document.getElementById('root'));