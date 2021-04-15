<template>
  <div class="portfolio">
    <h2 class="portfolio-title">{{ $t('portfolio.title') }}</h2>
    <Carousel class="portfolio_carousel" :items-to-show="2.5" :wrap-around="true">
      <Slide v-for="slide in slide" :key="slide">
        <div class="portfolio_box">
          <img class="portfolio_box" :class="slide.class" :src="require(`../images/portfolio/${slide.img}`)">
          <button @click="goToUrl(slide.url)" class="portfolio-visit">{{ $t('portfolio.visit') }}</button>
        </div>
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
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      currentSlide: null,
    slide: [
      { img: "lapiemy-szczyty.png"},
      { img: "termobudowa.png", class: "portfolio_box-Z", url: "http://termobudowa.com.pl"},
      { img: "lapiemy-szczyty.png"},
      { img: "termobudowa.png", class: "portfolio_box-Z", url: "http://termobudowa.com.pl"},
      { img: "lapiemy-szczyty.png"},
      { img: "termobudowa.png", class: "portfolio_box-Z", url: "http://termobudowa.com.pl"},
    ]
    }
  },
  methods: {
    goToUrl(url) {
      window.location.href = url;
    }
  }
}
</script>

<style lang="scss">
@import "src/styles/abstract/variables";
@import "src/styles/abstract/mixins";

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

    @media only screen and (max-width: 1400px) {
      width: 90%;
    }
  }


  &_box {
    height: 50rem;
    width: auto;
    position: relative;
    transition: all 1s;

    @media only screen and (max-width: 910px) {
      height: auto;
      width: 20rem;
    }

    @media only screen and (max-width: 600px) {
      height: auto;
      width: 13rem;
    }


    &:hover button {
      display: block;
    }

    &:hover img {
      filter: grayscale(100%);
      opacity: .5;
    }
  }

  &_box-Z {
    transform: perspective(400px) translateZ(-100px);
  }

  &-visit {
    display: none;
    position: absolute;
    bottom: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99999;
    color: $color-purple;
    padding: 2rem;
    background-color: rgba(255, 255, 255, .5);
    border: 3px solid $color-purple;
    transition: all 1s;
    border-radius: 5px;
    letter-spacing: .2rem;
    font-size: 1.5rem;
    cursor: pointer;

    @media only screen and (max-width: 910px) {
      font-size: 1.5rem;
      padding: .5rem;

    }

    @media only screen and (max-width: 600px) {
      font-size: .7rem;
      padding: .5rem;
    }

    &:hover {
      background-color: rgba(255, 255, 255, .7);
    }

    &:active {
      background-color: #FFFF;
    }
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
  display: flex;
  background-color: $color-purple;
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
