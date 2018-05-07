import React, { Component } from 'react';
import YouTube from 'react-youtube';
import style from './style';
import './index.css';
import Scrollbutton from './scrollButton';

class introVideo extends Component {
  render() {
  	const opts = {
      height: '1070',
      width: '1903',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        loop: 1,
        showinfo: 0,
        rel: 0
      }
    };

    return (
    	<div>
      		<YouTube videoId="UlmrxFEPM3g" opts={opts} onEnd={this._onEnd} style={style.test}/>
          <div className="mainTitle-container">
        		<h1 className="mainTitle">
        			Get A Car <br/>
        			<span className="mainTitle-subtitle">Even if you have to sell yours first.</span>
        		</h1>
            <Scrollbutton scroll='.availableCars-container' msg="Available cars"></Scrollbutton>
            <Scrollbutton scroll='.sellingBox' msg="Sell your car"></Scrollbutton>
          </div>
      	</div>
    );
  }

  _onEnd(event){
  	event.target.playVideo();
  }
}

export default introVideo;