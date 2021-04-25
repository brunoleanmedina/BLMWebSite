import React from 'react';

import PhoneImg from '../../assets/media/phone.png';
import MailImg from '../../assets/media/outlook (1).png';
import LiImg from '../../assets/media/linkedin (1).png';
import GitImg from '../../assets/media/github.png';

const Footer = (PhoneImg, MailImg, LiImg, GitImg) =>{

    return(
        <section id="sectionFooter">
            <div>
                <a><img src={PhoneImg}/>095323431</a>
            </div>
           
           <div>
               <a href="mailto: leanmedi9@hotmail.com"><img src={MailImg}/>leanmedi9@hotmail.com</a>
           </div>
           
           <div>
               <a href="https://www.linkedin.com/in/bruno-l-medina/"><img src={LiImg}/>bruno-l-medina</a>
               </div>
           
           <div>
               <a href="https://github.com/brunoleanmedina"><img src={GitImg}/>brunoleanmedina</a>
           </div>
           
        </section>
    )

}

export default Footer;