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
      Lorem ipsum mada faka, Lorem ipsum mada faka Lorem ipsum mada faka, Lorem ipsum mada faka Lorem ipsum mada faka Lorem ipsum mada faka
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
  background-color: chocolate;
  display: flex;
  flex-direction: row;

  &__left{
    float: left;
    background-color: cornflowerblue;
    margin-right: 1rem;
    padding: 1rem;
    height: 100%;
    width: 55%;
    display: flex;
    align-items: center;

    h1{
      font-weight: 600;
      font-size: 4rem;
    }

    p{
      font-weight: 200;
      font-size: 2.5rem;
    }

  }
  &__right{
    background-color: cornflowerblue;
    margin-left: 1rem;
    padding: 1rem;
    height: 100%;
    flex: 1;

  }
}
</style>