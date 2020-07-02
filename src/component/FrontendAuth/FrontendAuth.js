import React from 'react'
import { Route, Redirect } from 'react-router-dom';

class FrontendAuth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      islogin: false
    }
  }

  render () {
    const { location, config } = this.props;
    const { pathname } = location;
    const targetRouterConfig = config.find((v) => v.path === pathname);
    console.log(targetRouterConfig) 
    if (this.state.islogin || !targetRouterConfig.auth) {
      return <Route path={pathname} component={targetRouterConfig.component} />
    } else {
      return <Redirect to='/404' />
    }
  }
}

export default FrontendAuth