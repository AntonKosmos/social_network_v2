import React from 'react';
import {connect} from "react-redux";
import {setDislikeMusicAC, setLikeMusicAC} from "../../redux/music-reducer";
import Music from "./Music";

let mapStateToProps = (state) => {
    return {
      music: state.music.musicArray
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
      like: (id) => {
          dispatch(setLikeMusicAC(id));
      },
      dislike: (id) => {
          dispatch(setDislikeMusicAC(id));
      }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Music);