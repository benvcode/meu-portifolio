console.log('Executando swiper.js');

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

const swiperContainer = document.querySelector('.swiper');
swiperContainer.autoplay = {
  delay: 5000, // 5 segundos de delay
};