<template>
  <div class="content">
    <div class="content__left">
      <div class="content__text">
        <h1 class="content__title">
          We create <br> amazing websites
        </h1>
        <p class="content__description">
          Lorem ipsum mada łaka raka fą, Lorem ipsum mada łaka raka fą, Lorem ipsum mada łaka raka fą.
        </p>
      </div>

    </div>
    <div class="content__right">
      <div class="content__image">
        <img class="content__right-image" src="../images/header.png" alt="Header Photo">
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
}
</script>

<style lang="scss">
.content{
  margin: 0 auto;
  margin-top: 5rem;
  width: 90vw;
  height: 80vh;
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
  &__right{
    margin-left: 1rem;
    padding: 1rem;
    height: 100%;
    flex: 1;
    display: flex;
    //background-color: chocolate;

    &-image{
      //border: .3rem solid white;
      //transform: skewX(20deg);
    }

    img{
      height: 60vh;
      align-self: center;

    }

  }

  &__image{
    display: flex;
  }
  &__image::after{
    content: "";
    position: absolute;
    width: 30vw;
    height: 60vh;
    //background-color: white;
    border: .3rem solid white;
    transform: skewX(15deg);
    bottom: 15%;
    right: 5%;
  }

}
</style>