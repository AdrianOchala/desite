<template>
  <div class="content">
    <div class="content__left">
      <div class="content__text">
        <h1 class="content__text-title">
          {{ $t("header.title") }}
        </h1>
        <p class="content__text-description">
          {{ $t('header.description') }}
        </p>
        <Button :text=" $t('header.about') " href="#about"></Button>
        <Button :text=" $t('header.projects') " href="#portfolio"></Button>

      </div>
    </div>
    <div class="content__right">
      <div class="content__border">
        <div class="content__image">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Button from "./Button";

export default {
  name: "Header",
  components: {Button}
}
</script>

<style lang="scss" scoped>
@import "src/styles/components/button";
@import "src/styles/abstract/mixins";

.content {
  margin: 0 auto;
  margin-top: 5rem;
  width: 90vw;
  height: 100vh;
  display: flex;
  flex-direction: row;

  @include respond(largeMobile){
    margin-top: 0rem;
  }

  &__left {
    height: 100%;
    width: 55%;
    display: flex;
    align-items: center;

    h1 {
      font-weight: 600;
      font-size: 5rem;

      @include respond(big-desktop) {
        font-size: 4rem;
      }

      @include respond(medium){
        font-size: 2.8rem;
      }

      @include respond(largeMobile){
        font-size: 2rem;
      }
    }

    p {
      font-weight: 200;
      font-size: 2.8rem;

      @include respond(big-desktop) {
        font-size: 2rem;
      }

      @include respond(medium){
        font-size: 1.8rem;
      }

      @include respond(largeMobile){
        font-size: 1.5rem;
      }
    }

  }

  &__text {
    &-title,
    &-description {
      position: relative;
    }
  }

  &__right {
    margin-left: 1rem;
    padding: 1rem;
    height: 100%;
    flex-grow: 1;
    display: flex;
    position: relative;
  }
  &__border{
    display: flex;
    position: relative;
    height: 60%;
    width: 90%;
    align-self: center;
    &::after{
      content: "";
      position: absolute;
      top: 8%;
      left: 20%;
      width: 80%;
      height: 100%;
      border: .3rem solid white;
      transform: skewX(14deg);

      @include respond(big-desktop){
        transform: skewX(11deg);
      }

      @include respond(medium){
        height: 70%;
        top: 20%;
      }

      @include respond(largeMobile){
        height: 40%;
        top: 35%;
      }
    }
  }
  &__image {
    display: flex;
    align-self: center;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(rgba(0, 115, 251, .4), rgba(255, 43, 196, .4)), url("../images/header-image3.jpg");
    background-size: cover;
    background-position: bottom;
    clip-path: polygon(0 0, 80% 0, 100% 100%, 20% 100%);

    @include respond(medium){
      height: 65%;
    }

    @include respond(largeMobile){
      height: 40%;
    }

  }
}
</style>
