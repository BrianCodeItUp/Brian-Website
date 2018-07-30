import React, { Component } from 'react';
import './contact/contact.css';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    send =(e)=>{
        alert("成功送出");
    }
    render() { 
        return ( 
            <div  id="contact" className="contact">
                <div className="contact-title">
                    CONTACT
                </div>
                <div className="contact-content">
                    <div className="contact-content-info">
                          <div className="contact-content-info-inside">
                            <div>
                                <p >Feel free to contact me any time!</p> 
                                <p><i class="fas fa-map-marker-alt"></i> Xinzhuang Dist, New Taipei City </p>
                                <p><i class="fas fa-mobile-alt"></i> 0989109327</p>
                                <p><i class="fas fa-envelope"></i>wl00387719@gmail.com</p>     
                            </div> 
                            
                        </div>     
                    </div>
                    <div className="contact-content-form-wrap">
                        <form  onSubmit={this.sendEmail}  className="contact-content-form"  action="" method="" >
                            <input type="text" name="name"  placeholder="Name" />
                            <input type="e-mail" placeholder="E-mail"/>
                            <textarea rows="4" cols="50"></textarea>
                            <button  type="button">Send</button>
                        </form>
                    </div>
                </div>
                <div className="space"></div>
            </div>
         );
    }
}
 
export default Contact;