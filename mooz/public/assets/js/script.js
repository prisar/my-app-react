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

    document.querySelector(".location-calendar-tab").addEventListener('click', function (e) {
      var x = document.querySelector(".location-calendar-container");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.querySelector(".location-selection").style.display = "block";
      } else {
        x.style.display = "none";
      }
    });

    document.querySelector('.location-list-items').addEventListener('click', function (e) {
      document.querySelector('.location-calendar-tab').innerText = e.target.innerText.trim();
      document.querySelector(".location-selection").style.display = "none";
      document.querySelector(".calendar-v2-container").style.display = "block";
    });
  })();
};

function calendarSubmit() {
  document.querySelector(".calendar-v2-container").style.display = "none";
  document.querySelector('.location-calendar-container').style.display = 'none';
}