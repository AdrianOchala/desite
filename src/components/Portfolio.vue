<template>
  <div class="portfolio">
    <h2 class="portfolio-title">{{ $t('portfolio.title') }}</h2>
    <Carousel class="portfolio_carousel" :items-to-show="5" :wrap-around="true">
      <Slide v-for="slide in slide" :key="slide">
        <img :class="slide.class" :src="require(slide.img)">
      </Slide>

      <template #addons>
        <Navigation/>
      </template>
    </Carousel>
  </div>

</template>

<script>
import {Carousel, Navigation, Slide} from 'vue3-carousel';


export default {
  name: "Portfolio",
  data() {
    return {
      currentSlide: null,
    slide: [
      { img: "../images/portfolio/lapiemy-szczyty.png", class: "portfolio_box"},
      { img: "../images/portfolio/termobudowa.png", class: "portfolio_box2"},
      { img: "../images/portfolio/lapiemy-szczyty.png", class: "portfolio_box"},
      { img: "../images/portfolio/termobudowa.png", class: "portfolio_box2"},
      { img: "../images/portfolio/lapiemy-szczyty.png", class: "portfolio_box"},
      { img: "../images/portfolio/termobudowa.png", class: "portfolio_box2"}
    ]
    }
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
}
</script>

<style lang="scss">
.portfolio {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &-title {
    margin-bottom: 10rem;
    font-weight: 600;
    font-size: 3rem;
  }

  &_carousel {
    margin: 0 auto;
    width: 60%;
  }

  &_box {
    height: 30rem;
    width: 15rem;
    background-color: green;
    transform: translateZ(-10rem);
  }

  &_box2 {
    height: 30rem;
    width: 15rem;
    background-color: green;
    transform: perspective(400px) translateZ(-100px);
  }
}


:root {
  /* Colors */
  --carousel-color-primary: #642afb;
  --carousel-color-secondary: #8e98f3;
  --carousel-color-white: #ffffff;

  /* Navigation */
  --carousel-nav-width: 30px;
}.carousel {
   position: relative;
   text-align: center;
   box-sizing: border-box;
 }

.carousel * {
  box-sizing: border-box;
}

.carousel__track {
  display: flex;
  margin: 0;
  padding: 0;
  position: relative;
}

.carousel__viewport {
  overflow: hidden;
}
.carousel__pagination {
  display: flex;
  justify-content: center;
  list-style: none;
}
.carousel__pagination-button {
  margin: 5px;
  width: 10px;
  height: 5px;
  border: 0;
  cursor: pointer;
  background-color: var(--carousel-color-secondary);
}

.carousel__pagination-button--active {
  background-color: var(--carousel-color-primary);
}
.carousel__icon {
  width: 1.2em;
  height: 1.2em;
  fill: currentColor;
}
.carousel__slide {
  scroll-snap-stop: auto;
  flex-shrink: 0;
  margin: 0;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__prev,
.carousel__next {
  display: none;
  background-color: var(--carousel-color-primary);
  border-radius: var(--carousel-nav-width);
  width: var(--carousel-nav-width);
  height: var(--carousel-nav-width);
  text-align: center;
  font-size: calc(var(--carousel-nav-width) * 2 / 3);
  padding: 0;
  color: var(--carousel-color-white);
  justify-content: center;
  align-items: center;
  position: absolute;
  border: 0;
  cursor: pointer;
}

.carousel__prev {
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
}

.carousel__next {
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
}

</style>
