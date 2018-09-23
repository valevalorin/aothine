(function () {
  document.addEventListener('DOMContentLoaded', function () {
    // Initialize state
    noise.seed(Math.random());
    var range = 8;
    var frame = 0;
    var totalFrames = 1000;
    var flip = 1;
    var navigation = document.querySelector('div.navigation');

    // Generate animation frames
    setInterval(function () {
      frame = frame + 1;
      if(frame >= totalFrames) {
        frame = 0;
        flip = flip * -1;
      }
      var s = frame/totalFrames * 4;
      var smoothRandom = noise.perlin2(s, s);
      var position = smoothRandom * range;
      navigation.style.transform = 'translate(' + position + 'px, ' + position * flip + 'px)';

    }, 16);
  });
})();