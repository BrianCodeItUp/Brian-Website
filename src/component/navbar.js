import React, { Component } from 'react';
import './navbar/navbar.css';
import NavMenu from './navMenu';
import $ from "jquery";
class  Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {  }
        // console.log(props.onload);
    }
    
    


////////////////////
//// functions
////////////////////
Click(e){
// document.querySelector('.navbar')

let text =  e.target.textContent;
let skillOffSet =  $("#skill").offset().top - 50;
let portfolioOffSet =  $("#portfolio").offset().top - 50;
let aboutOffSet = $("#about").offset().top -50;
let contactOffSet = $("#contact").offset().top - 50;
        if(text==="SkILL"){
                console.log('scroll to skill');
                window.scrollTo(0 ,skillOffSet) ;
        }else if(text==="PORTFOLIO"){
                window.scrollTo(0 ,portfolioOffSet) ;
        }else if(text==="ABOUT ME"){
                window.scrollTo(0 ,aboutOffSet) ;
        }else if(text==="CONTACT"){
                window.scrollTo(0 ,contactOffSet) ;
        }
}
menuOpen = () =>{   
     let navbar = document.querySelector('.navbar')
        navbar.classList.toggle('navbar_open');
        let bot = document.querySelector('.nav-icon-bot');
        let mid = document.querySelector('.nav-icon-mid');
        let top = document.querySelector('.nav-icon-top');
        bot.classList.toggle('nav-icon-top-open');
        mid.classList.toggle('nav-icon-mid-open');
        top.classList.toggle('nav-icon-bot-open');
        let navList = document.querySelector('.navbar-cotent-container');
        navList.classList.toggle('navbar-cotent-container-open');
        
}
logo_to_top = () =>{
        window.scrollTo(0 ,0) ;
}
////////////////////
//// render
////////////////////
    render() { 

        const nav_list = [{name:"SkILL"},{name:"PORTFOLIO"} , {name:"ABOUT ME"}, {name:"CONTACT"}]
   
        const list  =  nav_list.map( list =>
                <li key={list.name}  onClick={this.Click}     className="navbar_list">{list.name}</li> );
        return ( 
                
            <div id="navbar" className="navbar" onScroll={this.navChangeColor} >
                        <NavMenu   menuOpen={this.menuOpen}/>
                        <div className="navbar-cotent-container">
                            <div   className="navbar-content-top">
                                    <div className="navbar-logo" onClick={this.logo_to_top} >
                                            B
                                    </div>
                            </div>
                            <div className="navbar-content-bot">
                                    <ul className="navbar_lists">
                                        {list}
                                    </ul>
                            </div>
                    </div>
            </div>

         );
    }
}
 
export default Navbar ;