// ------- PRELOADER -------//
$(window).load(function(){
    $('.preloader').fadeOut("slow"); // set duration in brackets
});
// ----- GOOGLE MAP ----- //
// var map = '';
// var center;
//
// function initialize() {
//     var mapOptions = {
//       zoom: 16,
//       center: new google.maps.LatLng(13.758468, 100.567481),
//       scrollwheel: false
//     };
//
//     map = new google.maps.Map(document.getElementById('map-canvas'),  mapOptions);
//
//     google.maps.event.addDomListener(map, 'idle', function() {
//         calculateCenter();
//     });
//
//     google.maps.event.addDomListener(window, 'resize', function() {
//         map.setCenter(center);
//     });
// }
//
// function calculateCenter() {
//   center = map.getCenter();
// }
//
// function loadGoogleMap(){
//     var script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
//     document.body.appendChild(script);
// }

/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
$(function(){

   // --------- HIDE MOBILE MENU AFTER CLIKING ON A LINK ------- //
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

  // --------- PORTFOLIO IMAGE ----- //
  $('#portfolio a').nivoLightbox({
        effect: 'fadeScale',
    });

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();

  // ------- GOOGLE MAP ----- //
  // loadGoogleMap();

  // ------- JQUERY PARALLAX ---- //
  function initParallax() {
    $('#home').parallax("100%", 0.3);
    $('#team').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);

  }
  initParallax();

});

fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hustlekapsa')
   .then((res) => res.json())
   .then((data) => {
      // Filter for acctual posts. Comments don't have categories, therefore can filter for items with categories bigger than 0
      const res = data.items //This is an array with the content. No feed, no info about author etc..
      const posts = res.filter(item => item.categories.length > 0) // That's the main trick* !

      // Functions to create a short text out of whole blog's content
      function toText(node) {
         let tag = document.createElement('div')
         tag.innerHTML = node
         node = tag.innerText
         return node
      }
      function shortenText(text,startingPoint ,maxLength) {
         return text.length > maxLength?
         text.slice(startingPoint, maxLength):
         text
      }

      // Put things in right spots of markup
      let output = '';
      posts.forEach((item) => {
         output += `
         <li class="blog__post">
            <a target="_blank" href="${item.link}">
               <img src="${item.thumbnail}" class="blog__topImg"></img>
               <div class="blog__content">
                  <div class="blog_preview">
                     <h2 class="blog__title">${shortenText(item.title, 0, 30)+ '...'}</h2>
                     <p class="blog__intro">${'...' + shortenText(toText(item.content),60, 300)+ '...'}</p>
                  </div>
                  <hr>
                  <div class="blog__info">
                     <span class="blog__author">${item.author}</span>
                     <span class="blog__date">${shortenText(item.pubDate,0 ,10)}</span>
                  </div>
               </div>
            <a/>
         </li>`

      })
      document.querySelector('.blog__slider').innerHTML = output
})


jQuery(document).ready(function($) {

	'use strict';

    var top_header = $('.parallax-content');
    top_header.css({'background-position':'center center'}); // better use CSS

    $(window).scroll(function () {
    var st = $(this).scrollTop();
    top_header.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
    });


    $('body').scrollspy({
        target: '.fixed-side-navbar',
        offset: 200
    });

      // smoothscroll on sidenav click

    $('.tabgroup > div').hide();
        $('.tabgroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
          e.preventDefault();
            var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();

    })

    var owl = $("#owl-testimonials");

      owl.owlCarousel({

        pagination : true,
        paginationNumbers: false,
        autoPlay: 6000, //Set AutoPlay to 3 seconds
        items : 3, //10 items above 1000px browser width
        itemsDesktop : [1000,3], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option

    });


});

jQuery(document).ready(function($) {

	'use strict';

    var top_header = $('.parallax-content');
    top_header.css({'background-position':'center center'}); // better use CSS

    $(window).scroll(function () {
    var st = $(this).scrollTop();
    top_header.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
    });


    $('body').scrollspy({
        target: '.fixed-side-navbar',
        offset: 200
    });

      // smoothscroll on sidenav click

    $('.tabgroup > div').hide();
        $('.tabgroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
          e.preventDefault();
            var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();

    })

    var owl = $("#creatives-testimonials");

      owl.owlCarousel({

        pagination : true,
        paginationNumbers: false,
        autoPlay: 6000, //Set AutoPlay to 3 seconds
        items : 3, //10 items above 1000px browser width
        itemsDesktop : [1000,3], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option

    });


});
