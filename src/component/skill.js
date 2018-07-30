import React, { Component } from 'react';
import './skill/skill.css';
import ReactDom from "react-dom";
class Skill extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    



    ////////////////////
    //// componentDidMount
    ////////////////////

        componentDidMount(){
            
        }

    ////////////////////
    //// render
    ////////////////////
    render() { 
    const  skill_content = 
    [ { 
        logo : "fas fa-pencil-alt" ,
        skill_name : "設計" ,
        mythoght : "喜歡簡單的架構，乾淨的風格，和細心的設計",
        language_title: "我喜歡設計 ： " ,  
        landpage : "UI , UX , Logo" ,
        tool_title : "設計工具"  , 
        tools :  [ "Balsamiq Mockups" ,"Illustrator" ,"Phtotshop" ,"Sketch"]
    } 
    , {     
        logo : "far fa-window-restore" ,
        skill_name : "前端開發" ,
        mythoght : "常常會思考如和將 Code 做優化，並且熱愛將想法變為現實",
        language_title: "我用的語言與框架 ： " ,  
        landpage : "HTML , CSS3 , SCSS , JS , JQuery ,React , Tweenmax ",
        tool_title : "開發工具"  , 
        tools :  [ "Webpack" ,"Boostrap" ,"Git" ,"GitHub"]
    },
    {   
        logo : "fas fa-database" ,
        skill_name : "後端開發" ,
        mythoght : "看見資料進來了，覺得人生很美好",
        language_title: "我用的語言和資料庫： " ,  
        landpage : "Node.js , Express.js , MySql , MongoDB "  ,
        tool_title : "開發工具"  , 
        tools :  [ "Phpmyadmin"] 
    }  
    ] 
    const skill = skill_content.map(content => {
       return  <div  key={content.skill_name} className="skill-content">

                        <div className="skill-logo">
                            <div className="skill-logo-wrap">                     
                                <i className={content.logo}></i>
                                <h2>{content.skill_name}</h2>
                                      
                            </div>
                            <div className="skill-content-mythought">{content.mythoght}</div>  

                           
                        </div>
                      
                        <div className="skill-content-language-wrap">
                            <div>
                                <div className="skill-content-language-title">{content.language_title}</div>
                                <p>{content.landpage}</p>
                            </div>
                              
                        </div>
                        <div className="skill-content-tool">
                                <div className="skill-content-tool-title">{content.tool_title}</div>
                                <ul className="skill-content-tool-lists">
                                        <li >{content.tools[0]}</li>
                                        <li >{content.tools[1]}</li>
                                        <li >{content.tools[2]}</li>
                                        <li>{content.tools[3]}</li>
                                </ul>
                        </div>
                </div>   
    })
    
    // let a =   ReactDom.findDOMNode(this.refs['skill']).getBoundingClientRect();
    // console.log(a);
        return ( 
            <div  id="skill" ref={(div)=>{this.Skill = div}} className="skill" >
                    <div  onClick={this.Click} className="skill-title">SKILLS</div>
                    <div className="skill-container">
                            {skill}
                    </div>
            
            </div>
         );
    }
}
 
export default Skill;