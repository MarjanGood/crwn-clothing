import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "../directory/directory.style.scss"

import hats from "../../images/1.png";
import jackets from"../../images/2.jpeg";
import sneakers from"../../images/3.jpg";
import women from"../../images/4.jpg";
import men from"../../images/5.jpg";
class Directory extends React.Component{

    constructor(){
        super();
   
    this.state ={
        sections:[
            {
                title:'hats',
                imageUrl: hats,
                id:1
            },
            {
                title:'jackets',
                imageUrl: jackets,
                id:2
            },
            {
                title:'sneakers',
                imageUrl: sneakers,
                id:3
            },
            {
                title:'women',
                imageUrl: women,
                size:'large',
                id:4
            },
            {
                title:'men',
                imageUrl: men,
                size:'large',
                id:5
            }]
    }

  }

render() {
    return (
       
        <div className="directory-menu">
            {          
                this.state.sections.map( post =>(  
                  <MenuItem key={post.id} title={post.title}  imageUrl={post.imageUrl} size={post.size}/>
                ))
            }
        </div>
    );
}
}
export default Directory;