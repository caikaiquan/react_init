import React from 'react'
import imgUrl from '../../assets/images/system-error.png'
import './404.scss'
class NoFind extends React.Component{
  render(){
    return (
      <div className='no-find'>
        <img src={imgUrl} alt=""/>
        <p>系统出了个小差，程序员小哥哥正在快马加鞭的修复中，请您体谅！</p>
      </div>
    )
  }
}


export default NoFind