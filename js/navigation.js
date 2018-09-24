(function () {
  document.addEventListener('DOMContentLoaded', function () {
    window.globals = window.globals || {};
    var sfxVolume = 0.15;
    globals.boopPlayer = document.getElementById('boopPlayer');
    globals.boopPlayer.volume = sfxVolume;
    globals.dinkPlayer = document.getElementById('dinkPlayer');
    globals.dinkPlayer.volume = sfxVolume;
    var navigation = document.querySelector('div.navigation');
    var navigationItems = navigation.querySelectorAll('a');
    for(var i = 0; i < navigationItems.length; i++) {
      var item = navigationItems[i];
      item.onmouseover = function () {
        globals.dinkPlayer.play();
      };
    }
  });
})();