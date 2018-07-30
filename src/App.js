import React, { Component } from 'react';
import './css/App.css';
import Navbar from './component/navbar';
import Landpage from './component/landpage';
import Skill from './component/skill';
import Protfolio from './component/portfolio';
import About from './component/about';
import Contact from './component/contact';
import $ from "jquery";
// import ReactDOM from 'ReactDOM';
// 
import Really_smooth_scrool from 'really-smooth-scroll';
Really_smooth_scrool.shim();
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      scrollY:0 ,
    }
  }
  
  

  componentDidMount(){
    let Y ;
    let navbar = document.querySelector(".navbar");
    let navMenu = document.querySelectorAll('.nav-menu-icon');
        window.addEventListener('scroll', (e) =>{
          Y = e.path[1].scrollY;
          if(Y > 300){
            navbar.classList.add('navbar_scroll');
            for(let i=0 ;i<3; i++){
                 navMenu[i].classList.add('menu_change_color');
            }
           
          }else if(Y  < 300){
            navbar.classList.remove('navbar_scroll');
            for(let i=0 ;i<3; i++){
              navMenu[i].classList.remove('menu_change_color');
         }
          }
      })
   
  }
  render() {
    return (
      <div className="App" >
            <Navbar />
            <Landpage />
            <Skill  />
            <Protfolio />
            <About />
            <Contact />
      </div>
    );
  }
}

export default App;
