<template>
  <div class="nav">
    <h2>DESITE</h2>

    <nav>
      <h3>test</h3>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TheNavigation"
}
</script>

<style lang="scss" scoped>
  .nav {
    display: flex;
    background-color: orangered;
    width: 90%;
    margin: 0 auto;

    h2 {
      font-family: Montserrat, sans-serif;
      font-weight: 800;
      font-size: 1.4rem;
    }

    nav {
      display: flex;
      flex: 1;
      justify-content: end;
      background-color: green;

      h3 {
        font-family: Mulish, sans-serif;
        font-weight: 300;
      }
    }


  }
</style>
