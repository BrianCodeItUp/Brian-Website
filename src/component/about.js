import React, { Component } from 'react';
import './about/about.css';
import SelfPic from './../img/selfpic.JPG';
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div  id="about" className="about">
                <div className="about-tilte-container">
                        <h2>ABOUT ME</h2>
                        <p>A dream is a goal with a deadline - Napoleon Hill </p>
                </div>
                <div className="about-content">
                    <div className="about-content-pic">
                        <div className="pic_container">
                            <img alt="個人照片"  src={SelfPic}/>
                        </div>
                      
                    </div>
                    <div className="about-content-self-intro">
                        <div className="self-intro-container">
                            <p>我是陳弘毅 ( Brian ) ，今年25歲 ，來自台北，現居台北，2016年畢業於真理大學財務金融系，大四時期開始對程式產生興趣，但當時的我因為自己社會組的身分，怕自己可能學不會或者半途而廢，一直拖到退伍後到了服務業上班才真正明白自己不適合服務業，並經過朋友介紹及查詢，抱者絕對要學會的心情進到資策會上課，開始我的前端之旅 。</p> 
                            <p>在經過幾過月後的不停撞牆，再寫一次，終於可以作出有點像樣的東西，還記得自己寫出來的第一個 Slider ，當時心中的喜悅我到現在都還記得，之後開始接觸SVG的動畫，PHP的基本後端概念、Node.js模組、React框架的火的試煉，才意識到自己成長了那麼多。</p>
                            <p>現在的我已經愛上寫程式的感覺，愛上看到新技術後那種發現新大陸的興奮感，所以以我每天都在寫，每天都在看文件，並享受學到新東西的喜悅，並樂於將新東西與大家分享。</p>      
                        </div>
                       
                    </div>
                
                </div>
            </div>
         );
    }
}
 
export default About;