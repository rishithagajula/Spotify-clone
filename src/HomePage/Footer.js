import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer__albumLogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRcB91dM9VyKi58HVwyqN8wmRT26bDZiT8sg&usqp=CAU" alt="Albumlogo" />
        <div className="footer__songInfo">
        <p>yeah! <br/> Dream</p>
        
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid conatiner spacing={2} className="footer__right">
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" 
            sx={{ '& .MuiSlider-thumb': { width: 12, height: 12 } }} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
