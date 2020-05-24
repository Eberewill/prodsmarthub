import React from "react";
import Plyr from "react-plyr";

/*<Plyr
        type="youtube"
        videoId="tN5_Jlhx4OQ"
        displayDuration
        autoplay
        tooltips
      />**/
const Embed = () => {
  return (
    <div class="plyr__video-embed" id="player">
      <iframe
        src="https://www.youtube.com/embed/tN5_Jlhx4OQ?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
        allowfullscreen
        allowtransparency
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default Embed;
