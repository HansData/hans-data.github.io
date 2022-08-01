$('.page-scroll').on('click', function (e) {
  //ambil isi href
  var tujuan = $(this).attr('href');
  //tangkap elemen ybs
  var elemenTujuan = $(tujuan);

  //pindah scroll
  $('body').animate(
    {
      scrolltop: elemenTujuan.offset().top - 50,
    },
    1250,
    'easeInOutExpo'
  );

  e.preventDefault();
});

//parallax
$(window).scroll(function () {
  var wscroll = $(this).scrolltop();

  $('.jumbotron img').css({
    transfrom: 'translate(0px, ' + wScroll / 4 + '%)',
  });
});
yfj;
