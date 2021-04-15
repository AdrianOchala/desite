<template>
  <div class="content">
    <div class="content__left">
      <div class="content__image">
        <img src="../images/about.png" alt="Header Photo">
    </div>
    </div>
      <div class="content__right">
        <div class="content__text">
          <h1 class="content__text-title">
            About us
          </h1>
          <p class="content__text-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
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
@import "src/styles/abstract/mixins";
@import "src/styles/components/button";
.content{
  margin: 0 auto;
  margin-top: 5rem;
  width: 90vw;
  height: 100vh;
  display: flex;
  flex-direction: row;

  &__right{
    float: left;
    margin-right: 1rem;
    padding: 1rem 1rem 1rem 5rem;
    height: 100%;
    width: 55%;
    display: flex;
    align-items: center;

    h1{
      font-weight: 600;
      font-size: 5rem;

      @include respond(big-desktop) {
        font-size: 4rem;
      }
    }

    p{
      font-weight: 200;
      font-size: 2.5rem;

      @include respond(big-desktop) {
        font-size: 2rem;
      }
    }

  }
  &__text{
    &-title,
    &-description{
      position: relative;
    }
  }

  &__left{
    margin-left: 1rem;
    padding: 1rem;
    height: 100%;
    flex: 1;
    display: flex;
    position: relative;

  }

  &__image{
    display: flex;

    img{
      height: 60vh;
      width: 35vw;
      align-self: center;

      @include respond(big-desktop) {
        height: 40vh;
        width: 30vw;
      }
    }
  }
  &__image::after{
    content: "";
    position: absolute;
    align-self: center;
    height: 60vh;
    width: 28vw;
    border: .3rem solid white;
    transform: skewX(-14.5deg) translateY(-3rem);
    left: 12rem;

    @include respond(big-desktop) {
      height: 40vh;
      width: 23vw;
    }
  }

}
</style>
