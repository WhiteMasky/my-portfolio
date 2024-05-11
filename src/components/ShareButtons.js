import React from 'react';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, InstapaperShareButton, WhatsappShareButton } from 'react-share';
import navIconFacebook from '../assets/img/nav-icon-facebook.svg';
import navIconTwitter from '../assets/img/nav-icon-twitter.svg';
import navIconLinkedin from '../assets/img/nav-icon-linkedin.svg';
import navIconWhatsapp from '../assets/img/nav-icon-whatsapp.svg';
import navIconFacebookDark from '../assets/img/nav-icon-facebook-dark.svg';
import navIconTwitterDark from '../assets/img/nav-icon-twitter-dark.svg';
import navIconLinkedinDark from '../assets/img/nav-icon-linkedin-dark.svg';
import navIconWhatsappDark from '../assets/img/nav-icon-whatsapp-dark.svg';


export const ShareButtons = ({ isDarkMode, toggleMode }) => {
    const shareUrl = 'https://stuweb.cecs.anu.edu.au/~u7748799/index.html';
    return (
        //     <div>
        //     <FacebookShareButton url={shareUrl}>
        //       <img src={navIconFacebook} alt="Share on Facebook" />
        //     </FacebookShareButton>
        //     <LinkedinShareButton url={shareUrl}>
        //       <img src={navIconLinkedin} alt="Share on LinkedIn" />
        //     </LinkedinShareButton>
        //     <WhatsappShareButton url={shareUrl}>
        //         <img src={navIconWhatsapp} alt="Share on WhatsApp" />
        //     </WhatsappShareButton>
        //     <TwitterShareButton url={shareUrl}>
        //         <img src={navIconTwitter} alt="Share on Twitter" />
        //     </TwitterShareButton>

        //   </div>
        <div className={`share-buttons ${isDarkMode ? 'dark-mode' : ''}`}>
            <FacebookShareButton url={shareUrl}>
                <img src={isDarkMode ? navIconFacebookDark : navIconFacebook} alt="Share on Facebook" />
            </FacebookShareButton>
            <LinkedinShareButton url={shareUrl}>
                <img src={isDarkMode ? navIconLinkedinDark : navIconLinkedin} alt="Share on LinkedIn" />
            </LinkedinShareButton>
            <WhatsappShareButton url={shareUrl}>
                <img src={isDarkMode ? navIconWhatsappDark : navIconWhatsapp} alt="Share on WhatsApp" />
            </WhatsappShareButton>
            <TwitterShareButton url={shareUrl}>
                <img src={isDarkMode ? navIconTwitterDark : navIconTwitter} alt="Share on Twitter" />
            </TwitterShareButton>
        </div>
    )
};