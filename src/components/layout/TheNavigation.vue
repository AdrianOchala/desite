<template>
  <div class="nav">
    <h2>DESITE</h2>

    <nav>
      <a href="#">{{ $t("navigation.home") }}</a>
      <a href="#">{{ $t("navigation.about") }}</a>
      <a href="#">{{ $t("navigation.portfolio") }}</a>
      <a href="#">{{ $t("navigation.contact") }}</a>
      <button @click="scroll">Test</button>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TheNavigation",
  data() {
    return {
      scrolled: false
    }
  },
  methods: {
    scroll() {
      const el = document.getElementById('test');
      el.scrollIntoView({behavior: "smooth"});
    },
    handleScroll ($event) {
      console.log(window.scrollY);
      console.log($event);

    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  }
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
