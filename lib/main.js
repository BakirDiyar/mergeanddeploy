'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var width = document.body.clientWidth;
  if (width > 901) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'css/full-page-scroll.css';
    document.head.appendChild(link);
    new fullScroll({
      mainElement: 'main',
      displayDots: true,
      dotsPosition: 'left',
      animateTime: 0.7,
      animateFunction: 'ease'
    });
  }

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function (el) {
      el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var $target = document.getElementById('navMenu');

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

  window.addEventListener('popstate', function (event) {
    // Log the state data to the console
    var path = JSON.parse(JSON.stringify(window.location));
    if (path.href.slice(-1) === '1') {
      var elements = document.querySelectorAll(".service-card");
      elements.forEach(function (e) {
        e.classList.remove('animate__fadeInUp');
        setTimeout(function () {
          e.classList.toggle('animate__fadeInUp');
        }, 100);
      });
    } else if (path.href.slice(-1) === '2') {
      var elements = document.querySelectorAll(".about-img");
      elements.forEach(function (e) {
        e.classList.remove('animate__fadeInLeft');
        setTimeout(function () {
          e.classList.toggle('animate__fadeInLeft');
        }, 100);
      });
    } else if (path.href.slice(-1) === '3') {
      var elements = document.querySelectorAll(".tech-img");
      elements.forEach(function (e) {
        e.classList.remove('animate__fadeInUp');
        setTimeout(function () {
          e.classList.toggle('animate__fadeInUp');
        }, 100);
      });
    } else if (path.href.slice(-1) === '7') {

      var elements = document.getElementById("contact");
      if (elements.classList.contains('animate__fadeInUp')) {
        return;
      } else {
        elements.classList.toggle('animate__fadeInUp');
      }
      console.log();
    } else if (path.href.slice(-1) === '0') {
      var elements = document.querySelectorAll(".cta");
      elements.forEach(function (e) {
        setTimeout(function () {
          e.classList.toggle('animate__fadeInUp');
        }, 100);
      });
    }
  });
});