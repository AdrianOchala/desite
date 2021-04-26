<template>
<TheNavigation></TheNavigation>
  <Header id="home"></Header>
  <About id="about"></About>
  <Portfolio id="portfolio"></Portfolio>
  <contact id="contact"></contact>
  <TheFooter></TheFooter>

</template>

<script>
import TheFooter from "@/components/layout/TheFooter";
import Portfolio from "@/components/Portfolio";
import TheNavigation from "@/components/layout/TheNavigation";
import Header from "@/components/Header";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default {
  name: 'App',
  beforeCreate() {
    scrollTo(0, 0);
  },
  components: {
    Contact,
    About,
    Header,
    TheNavigation,
    Portfolio,
    TheFooter,
  }
}
</script>

<style lang="scss">
@import "styles/base/_base.scss";


</style>
