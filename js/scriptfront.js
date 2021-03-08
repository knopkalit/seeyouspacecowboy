window.addEventListener('DOMContentLoaded', () => {
window.onscroll = function() {scrollingHeader()};
  let style_header = document.getElementById('style_header'),
      div_header = document.getElementById('div_header'),
      a_mh = document.getElementById('a_mh'),
      a_ch = document.getElementById('a_ch'),
      a_auh = document.getElementById('a_auh'),
      a_ah = document.getElementById('a_ah'),
      a_rh = document.getElementById('a_rh'),
      scroll = document.body.offsetTop + 82;
      function scrollingHeader() {
        if (window.pageYOffset > scroll) {
            div_header.classList.remove('header');
            div_header.classList.add('scroll_header_header');
            style_header.classList.add('scroll_header_run');
            a_mh.classList.add('scroll_header_a');
            a_ch.classList.add('scroll_header_a');
            a_auh.classList.add('scroll_header_a');
            a_ah.classList.add('scroll_header_a');
            a_rh.classList.add('scroll_header_a');
            a_mh.classList.remove('a');
            a_ch.classList.remove('a');
            a_auh.classList.remove('a');
            a_ah.classList.remove('a');
            a_rh.classList.remove('a');
        } else {
            style_header.classList.remove('scroll_header_run');
            div_header.classList.add('header');
            div_header.classList.remove('scroll_header_header');
            a_mh.classList.remove('scroll_header_a');
            a_ch.classList.remove('scroll_header_a');
            a_auh.classList.remove('scroll_header_a');
            a_ah.classList.remove('scroll_header_a');
            a_rh.classList.remove('scroll_header_a');
            a_mh.classList.add('a');
            a_ch.classList.add('a');
            a_auh.classList.add('a');
            a_ah.classList.add('a');
            a_rh.classList.add('a');
        }
      }
  const scrollingImage = document.querySelectorAll('._animImage');
  if (scrollingImage.length > 0) {
    window.addEventListener('scroll', animationScrollingImage);
    function animationScrollingImage(params) {
      for (i = 0; i < scrollingImage.length; i++) {
        const animImage = scrollingImage[i];
        const animImageHeight = animImage.offsetHeight;
        const animImageOffset = offset(animImage).top;
        const animImageStart = 4;

        let animImageWhere = window.innerHeight - animImageHeight / animImageStart;
        if (animImageHeight > window.innerHeight) {
          animImageWhere = window.innerHeight - window.innerHeight / animImageStart;
        }

        if (pageYOffset > animImageOffset - animImageWhere) {
          animImage.classList.add('_animImage');
        } else {
          animImage.classList.remove('_animImage');
        }
      }
      function offset(element) {
        const rect = element.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
      }
    }
    animationScrollingImage();
  }
});
