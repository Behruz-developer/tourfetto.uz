// function openNav(navId, videoId) {
//     document.getElementById(navId).style.display = "block";
//     document.getElementById(videoId).play();
//   }
  
//   function closeNav(navId, videoId) {
//     document.getElementById(navId).style.display = "none";
//     document.getElementById(videoId).pause();
//   }
//   document.addEventListener("DOMContentLoaded", function() {
//     var videos = document.querySelectorAll('video');
  
//     videos.forEach(function(video) {
//         video.addEventListener('play', function() {
//             var sources = video.querySelectorAll('source[data-src]');
//             sources.forEach(function(source) {
//                 source.setAttribute('src', source.getAttribute('data-src'));
//                 source.removeAttribute('data-src');
//             });
//             if (sources.length > 0) {
//                 video.load();
//             }
//         });
//     });
//   });



function openNav(navId) {
  var modal = document.getElementById(navId);
  modal.style.display = "block";

  // Modal ichidagi video topib, uni ijro etish
  var video = modal.querySelector('video');
  if (video) {
      video.play();
  }
}

function closeNav(navId) {
  var modal = document.getElementById(navId);
  modal.style.display = "none";

  // Modal ichidagi video topib, uni to'xtatish
  var video = modal.querySelector('video');
  if (video) {
      video.pause();
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var videos = document.querySelectorAll('video');

  videos.forEach(function(video) {
      video.addEventListener('play', function() {
          var sources = video.querySelectorAll('source[data-src]');
          sources.forEach(function(source) {
              source.setAttribute('src', source.getAttribute('data-src'));
              source.removeAttribute('data-src');
          });
          if (sources.length > 0) {
              video.load();
          }
      });
  });
});
