
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

//const iframe = document.querySelector('#vimeo-player');

const player = new Player('vimeo-player');

player.on('timeupdate', throttle(data => {
  localStorage.setItem('videoplayer-time', data.seconds);
}, 1000));

window.addEventListener('DOMContentLoaded', () => {
  const saveTime = localStorage.getItem('videoplayer-time');
  if (saveTime) {
    player.setCurrentTime(saveTime);
  }
});