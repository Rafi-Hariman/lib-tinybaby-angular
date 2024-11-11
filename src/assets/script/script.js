// function tes() {

//     var swiper = new Swiper('.blog-slider', {
//         spaceBetween: 30,
//         effect: 'fade',
//         loop: true,
//         mousewheel: {
//             invert: false,
//         },
//         // autoHeight: true,
//         pagination: {
//             el: '.blog-slider__pagination',
//             clickable: true,
//         }
//     });
// }

function tes() {
    var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      slidesPerView: 1, // Ensure you display fewer slides at a time
      slidesPerGroup: 1, // Group fewer slides
      mousewheel: {
        invert: false,
      },
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });
  }
  