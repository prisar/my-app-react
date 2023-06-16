window.onload = function () {
  // do stuff
  (function () {

    'use strict';

    document.querySelector('.material-design-hamburger__icon').addEventListener(
      'click',
      function () {
        var child;

        document.body.classList.toggle('background--blur');

        this.parentNode.nextElementSibling.classList.toggle('menu--on');

        child = this.childNodes[1].classList;

        if (child.contains('material-design-hamburger__icon--to-arrow')) {
          child.remove('material-design-hamburger__icon--to-arrow');
          child.add('material-design-hamburger__icon--from-arrow');
        } else {
          child.remove('material-design-hamburger__icon--from-arrow');
          child.add('material-design-hamburger__icon--to-arrow');
        }

      });

    document.querySelector(".location-calendar-tab").addEventListener('click', function () {
      var x = document.querySelector(".location-calendar-container");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });

    document.querySelector('.location-list-items').addEventListener('click', function(e) {
      document.querySelector('.location-calendar-tab').innerText = e.target.innerText.trim();
    });

    document.querySelectorAll(".location-calendar-tab")[1].addEventListener('click', function () {
      var prev = document.querySelector(".location-calendar-container");
      prev.style.display = "none";
      var x = document.querySelector(".calendar-v2-container");
      console.log(document.querySelectorAll(".location-calendar-tab")[1]);
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });

    document.querySelector(".location-calendar").addEventListener('mouseleave', function () {
      var x = document.querySelector(".location-calendar-container");
      console.log(this);
      x.style.display = "none";

    });

  })();
};