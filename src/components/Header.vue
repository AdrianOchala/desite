<template>
  <div class="content">
    <div class="content__left">
      <div class="content__text">
        <h1 class="content__text-title">
          {{ $t("header.title") }}
        </h1>
        <p class="content__text-description">
          Lorem ipsum mada łaka raka fą, Lorem ipsum mada łaka raka fą, Lorem ipsum mada łaka raka fą.
        </p>
          <Button :text=" $t('header.about') " href="#about"></Button>
          <Button :text=" $t('header.projects') " href="#portfolio"></Button>

      </div>
    </div>
    <div class="content__right">
      <div class="content__image">
        <img src="../images/header.png" alt="Header Photo">
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
.content{
  margin: 0 auto;
  margin-top: 5rem;
  width: 90vw;
  height: 100vh;
  display: flex;
  flex-direction: row;

  &__left{
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
    }

    p{
      font-weight: 200;
      font-size: 2.5rem;
    }

  }
  &__text{
    &-title,
    &-description{
      position: relative;
    }
  }

  &__right{
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
    }
  }
  &__image::after{
    content: "";
    position: absolute;
    align-self: center;
    height: 60vh;
    width: 28vw;
    border: .3rem solid white;
    transform: skewX(14.5deg) translateY(3rem);
    left: 12rem;
  }

}
</style>
