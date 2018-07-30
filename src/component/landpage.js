import React, { Component } from 'react';
import './landpage/landpage.css';
class Landpage extends Component {
    



    go_to_top = () =>{
        window.scrollTo(0 ,0) ;
    }

    render() { 
     const landpage_icons =[
        { id:"instagram",  class:"fab fa-instagram" , link:"https://www.instagram.com/brian_chen_igotmyswag/"} , 
        { id:"facebook" ,class:"fab fa-facebook" ,link:"https://www.facebook.com/profile.php?id=100000217750633" } ,
        { id:"github" ,class:"fab fa-github-square", link:"https://github.com/Brian1993/About-me"} ,
        {id:"linkedin" , class:"fab fa-linkedin" ,link:"https://www.linkedin.com/in/%E5%BC%98%E6%AF%85-%E9%99%B3-86374a11b/"}
     ]
     
        return ( 
            <div className="landpage" >
                <div className="landpage-content-container"> 
                        <h1>BRIAN CHEN</h1>
                        <h2>我是陳弘毅</h2>
                        <p>歡迎來到我的個人網站</p>
                        <ul className="landpage-content-icon-container">
                            {landpage_icons.map(icon => <li  key={icon.id} className="landpage-content-icon">
                              <a className="landpage-icon" href={icon.link} target="_blank"><i className={icon.class}> </i></a>
                            </li>)}
                        </ul>
                </div>
                <div className="landpage_scroll_line"></div>
                <div  onClick={this.go_to_top} className="go-to-top">TOP</div>
            </div>
         );
    }
}
 
export default Landpage;