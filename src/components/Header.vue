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

        <div class="buttons">
          <Button style="margin-right: 2rem;" :text="$t('header.about')" href="#about" v-scroll-to="'#about'"></Button>
          <Button :text="$t('header.projects')" href="#portfolio" v-scroll-to="'#portfolio'"></Button>
        </div>

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
.buttons {
  @include respond(largeMobile) {
    margin-top: 2rem;
  }
}

.content {
  margin: 0 auto;
  margin-top: 5rem;
  width: 90vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  transition: all 2s;

  @include respond(largeMobile) {
    margin-top: 0rem;
  }

  &__left {
    height: 100%;
    width: 55%;
    display: flex;
    align-items: center;
    animation-name: moveToLeft;
    animation-duration: 3s;

    @include respond(largeMobile) {
      width: 90%;
      margin: 0 auto;
    }

    h1 {
      font-weight: 600;
      font-size: clamp(2.8rem, 5vh, 12rem);

      @include respond(largeMobile){
        margin-top: 5rem;
      }
    }

    p {
      font-size: clamp(1.5rem, 2.5vh, 7rem);
      align-self: flex-start;
      opacity: .7;

      @include respond(largeMobile){
        margin-top: 2rem;
      }
    }

  }

  &__text {
    &-title,
    &-description {
      position: relative;
      width: clamp(30rem, 80%, 100rem);
      margin-bottom: 2rem;
    }

  }

  &__right {
    margin-left: 1rem;
    padding: 1rem;
    height: 100%;
    flex-grow: 1;
    display: flex;
    position: relative;
    animation-name: moveUp;
    animation-duration: 3s;

    @include respond(largeMobile){
      display: none;
    }
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
      animation-name: opacityLate;
      animation-duration: 3s;
      border: .3rem solid white;
      transform: skewX(14deg);

      @media only screen and (max-width: 800px) { transform: skewX(13deg); };
    }
  }
  &__image {
    display: flex;
    align-self: center;
    //height: #{"min(500px, 100%)"};
    height: 100%;
    //height: #{"clamp(50px, 100%, 500px)"};
    width: 100%;
    background-image: linear-gradient(rgba(0, 115, 251, .4), rgba(255, 43, 196, .4)), url("../images/header-image3.jpg");
    background-size: cover;
    background-position: bottom;
    clip-path: polygon(0 0, 80% 0, 100% 100%, 20% 100%);

    @include respond(big-desktop){
      transform: skewX(5deg);
    }

    @include respond(largeMobile){
      height: 60%;
    }
  }
}
</style>
