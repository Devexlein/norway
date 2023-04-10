//* HEADER-SLIDER

const headerSlider = tns({
   container: '.header-slider',
   items: 1,
   slideBy: 'page',
   autoplay: true,
   speed: 1000,
   autoplayButtonOutput: false,
   controls: false
});

// Клик по кнопкам (стрелкам)
const headerSliderPrev = document.querySelector('#headerSliderPrev');
const headerSliderNext = document.querySelector('#headerSliderNext');

headerSliderPrev.onclick = () => headerSlider.goTo('prev');
headerSliderNext.onclick = () => headerSlider.goTo('next');

// Блоки фракций
const currentSlideIndex = document.querySelector('#currentSlide');
const sliderTotal = document.querySelector('#sliderTotal');

function updateSlideFraction() {
   const sliderInfo = headerSlider.getInfo();
   // показываем номер текущего слайда
   currentSlideIndex.innerText = '0' + (sliderInfo.navCurrentIndex + 1);
   sliderTotal.innerText = '0' + sliderInfo.pages;
}

// На старте
updateSlideFraction();

// При перемещении
headerSlider.events.on('indexChanged', () => {
   updateSlideFraction();
});