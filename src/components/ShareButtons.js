import React, { useEffect } from 'react';

export const ShareButtons = ({ isDarkMode, toggleMode }) => {
  const shareUrl = 'https://stuweb.cecs.anu.edu.au/~u7748799/index.html';

  useEffect(() => {
    // Load Facebook SDK
    window.fbAsyncInit = function() {
      window.FB.init({
        xfbml: true,
        version: 'v19.0'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js'; // English version SDK
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    // Load LinkedIn SDK
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://platform.linkedin.com/in.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'linkedin-jssdk'));
  }, []);

  return (
    <div className={`share-buttons ${isDarkMode ? 'dark-mode' : ''}`}>
      <div id="fb-root"></div>
      <div 
        className="fb-share-button" 
        data-href={shareUrl}
        data-layout=""
        data-size="large">
        <a 
          target="_blank" 
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&amp;src=sdkpreparse`}
          className="fb-xfbml-parse-ignore">
          Share
        </a>
      </div>

      {/* LinkedIn share button */}
      <script type="IN/Share" data-url={shareUrl}></script>

      {/* Other social share buttons */}
    </div>
  );
};