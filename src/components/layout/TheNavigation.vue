<template>
  <div class="nav">
    <h2>DESITE</h2>

    <nav>
      <a href="#"></a>
      <p>{{ $t("navigation.home") }}</p>
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
    width: 90vw;
    margin: 0 auto;

    h2 {
      font-family: Montserrat, sans-serif;
      font-weight: 800;
      font-size: 1.4rem;
    }

    nav {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      background-color: green;

      h3 {
        font-family: Mulish, sans-serif;
        font-weight: 300;
      }
    }


  }
</style>
