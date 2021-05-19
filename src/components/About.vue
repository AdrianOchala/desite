<template>
  <div class="content">
    <div class="content__left">
      <div class="content__border">
        <div class="content__image">

        </div>
      </div>

    </div>
    <div class="content__right">
      <div class="content__text">
        <h1 class="content__text-title">
          {{ $t('about.title') }}
        </h1>
        <p class="content__text-description">
          {{ $t('about.description') }}
        </p>
        <Button :text=" $t('about.contact') " href="#contact" v-scroll-to="'#contact'"></Button>
      </div>
    </div>
  </div>
</template>

<script>

import Button from "./Button";

export default {
  name: "About",
  components: {Button},
}
</script>

<style lang="scss" scoped>
.content {
  margin: 0 auto;
  margin-top: 5rem;
  width: 90vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  transform: translateX(-100vw);
  transition: all 2s;
  opacity: 0;

  @include respond(largeMobile) {
    height: 90vh;
    width: 100%;
    margin-top: 0rem;
  }

  &__right {
    padding: 1rem 1rem 1rem 5rem;
    height: 100%;
    width: 55%;
    display: flex;
    align-items: center;
    margin: 0 auto;

    @include respond(largeMobile) {
      width: 100%;
    }

    h1 {
      font-weight: 600;
      margin-bottom: clamp(2rem, 3vw, 5.7rem);

      font-size: clamp(2.8rem, 5vh, 12rem);
    }

    p {
      font-size: clamp(1.5rem, 2.5vh, 7rem);
      opacity: .7;
      margin-bottom: 2rem;

      @include respond(largeMobile) {
        width: 90%;
      }
    }

  }

  &__text {
    &-title,
    &-description {
      position: relative;
    }
  }

  &__left {
    margin-left: 1rem;
    padding: 1rem;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;

    @include respond(largeMobile) {
      display: none;
    }
  }

  &__border {
    display: flex;
    position: relative;
    height: 60%;
    width: 90%;
    align-self: center;

    &::after {
      content: "";
      position: absolute;
      top: 8%;
      left: 0;
      width: 80%;
      height: 100%;
      border: .3rem solid white;
      transform: skewX(-14deg);

      @include respond(big-desktop) {
        transform: skewX(-13deg);
      }

      @include respond(medium) {
        transform: skewX(-14deg);
        height: 68%;
        top: 20%;
      }

      @media only screen and (max-width: 800px) { transform: skewX(-12deg); };

      @include respond(largeMobile) {
        display: none;
      }
    }
  }

  &__image {
    display: flex;
    align-self: center;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(rgba(0, 115, 251, .4), rgba(255, 43, 196, .4)), url("../images/about-image.jpg");
    background-size: cover;
    background-position: 50% 40%;
    clip-path: polygon(20% 0, 100% 0, 80% 100%, 0 100%);

    @include respond(largeMobile) {
      display: none;
    }

    @include respond(medium) {
      height: 65%;
    }
  }
}
</style>
