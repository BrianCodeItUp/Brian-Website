import React from 'react';
import './portfolio/portfolio_each.css';
import Pic from './../img/工作區域 1.png';
const Protfolio_each  = (props) => {
    return (
        <div className="portfolio_content_each">
                <div className="portfolio_image">
                    <a href={props.url} target="_blank">
                        <img  src={props.pic} />
                    </a>
                </div>
                <div className="portfolio_intro">
                    <div className="portfolio_intro_title">
                        <h3>{props.title}
                         </h3>
                    </div>
                    <div className="portfolio_intro_content">
                        <h4>
                           使用技術 :
                        </h4>
                       <ul>
                           <li>{props.skill[0]}</li>
                           <li>{props.skill[1]}</li>
                           <li>{props.skill[2]}</li>
                           <li>{props.skill[3]}</li>
                           <li>{props.skill[4]}</li>
                           <li>{props.skill[5]}</li>
                           
                       </ul>
                    </div>
                </div>    
        </div>  

    )
}

export default Protfolio_each;