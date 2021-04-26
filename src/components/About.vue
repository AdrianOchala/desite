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
        <Button :text=" $t('about.contact') " href="#contact"></Button>
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

  @include respond(largeMobile) {
    flex-direction: column;
    height: 90vh;
    margin-top: 0rem;
  }

  &__right {
    margin-right: 1rem;
    padding: 1rem 1rem 1rem 5rem;
    height: 100%;
    width: 55%;
    display: flex;
    align-items: center;

    @include respond(largeMobile) {
      width: 100%;
      align-items: flex-start;
    }

    h1 {
      font-weight: 600;
      font-size: clamp(2.8rem, 5vh, 12rem);
    }

    p {
      font-weight: 200;
      font-size: clamp(1rem, 2.5vh, 7rem);

      @include respond(largeMobile) {
        width: 90%;
        font-size: clamp(1rem, 2vh, 7rem);
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
      flex: 0 1 auto;
      justify-content: flex-end;
      height: 100%;
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
        transform: skewX(-8deg);
      }

      @include respond(medium) {
        height: 70%;
        top: 20%;
      }

      @include respond(largeMobile) {
        width: 90%;
        height: 70%;
        top: 20%;
        transform: skewX(-12deg);
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
      background-image: linear-gradient(rgba(0, 115, 251, .4), rgba(255, 43, 196, .4)), url("../images/about-mobile-image.jpg");
      clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
    }

    @include respond(medium) {
      height: 65%;
    }
  }
}
</style>
