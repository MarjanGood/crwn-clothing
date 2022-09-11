import React from "react";
import '../menu-item/menu-item.styles.scss'

import { withRouter } from "react-router-dom"

const MenuItem = (item) => (

  //console.log(item.props)
  <div className = {`${item.props.size} menu-item`} onClick={()=>item.history.push(`${item.match.url}${item.props.linkUrl}`)}>

    <div className="background-image" style = {{ backgroundImage:`url(${item.props.imageUrl})` }}>
    </div>

        <div className='content'>  
          <h1 className='title'>{item.props.title.toUpperCase()}</h1>
          <span  className='subtitle'>SHOP NOW</span>
        </div>
    
  </div>

)
export default withRouter(MenuItem);