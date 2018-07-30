import React, { Component } from 'react';
import './portfolio/protfolio.css';
import Protfolio_each from './protfolo_each';
import Calculator_Pic from './../img/reactCalculator.png';
import GameParadisePic from './../img/GamesParadise.png';
import FlickrPic from './../img/Flickr_Search.png';
import TaigerPic from './../img/Taiger.png';
import TodoList from './../img/todoList.png';
import GifsearchPic from './../img/gifSearch.png';
class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }







    ////////////////////
    //// render
    ////////////////////
    render() { 
        let protfoData =
        [
            {
                title:"Calculator using React.js",
                skill:["Sass","React.js"],
                pic :Calculator_Pic,
                url:"https://brian1993.github.io/React-Calculator/"
            } 
            ,
            {
                title:"Games Paradise",
                skill:["Sass","React.js" , "TweenMax.js" ,"Webpack" ],
                pic :GameParadisePic,
                url :"https://github.com/Brian1993/GamersParadise"
            } 
            ,
            {
                title:"Flickr Photo Search",
                skill:["JQuery", "Ajax"],
                pic :FlickrPic,
                url :"https://codepen.io/Brian1993/pen/OwJydb?editors=1100"
            } 
            ,
            {
                title:"Taiger",
                skill:["JQuery", "JavaScirpt"],
                pic :TaigerPic,
                url :"https://brian1993.github.io/Taiger/"
            } 
            ,
            {
                title:"React-to-do-list",
                skill:["Sass","React.js"],
                pic :TodoList,
                url :"https://brian1993.github.io/React_to-do-list/"
            } 
            ,
            {
                title:"Gif-Search",
                skill:["React.js" , "Fetch API" ],
                pic :GifsearchPic,
                url :"https://brian1993.github.io/Gif-Search/"
            } 
        ]
        let a=  protfoData.map(item =>
             
            <Protfolio_each   title={item.title}  skill={item.skill} pic={item.pic} url={item.url}/>
        )
        return (
            <div id="portfolio" className="portfolio" >
                <div className="portfolio-title">
                   <h2>
                        PORTFOLIO
                   </h2>
                </div>
                <div className="portfolio-content-container">
                    {a}
                       
                        
                     
        
                </div>  
            
            
            </div>
          );
    }
}
 
export default Portfolio;