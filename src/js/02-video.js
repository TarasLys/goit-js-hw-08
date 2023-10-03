
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

//const iframe = document.querySelector('#vimeo-player');

const player = new Player('vimeo-player');
const key = "videoplayer-time";
player.on('timeupdate', throttle(data => {
  localStorage.setItem(key, data.seconds);
}, 1000));

window.addEventListener('DOMContentLoaded', () => {
  const saveTime = localStorage.getItem(key);
  if (saveTime) {
    player.setCurrentTime(saveTime);
  }
});



