import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let timeStoped = localStorage.getItem('videoplayer-current-time');

const onPlay = e => {
  localStorage.setItem('videoplayer-current-time', `${e.seconds}`);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(Number(timeStoped));
