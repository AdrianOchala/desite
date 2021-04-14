<template>
  <TheNavigation></TheNavigation>
  <Header id="home"></Header>
  <About id="about"></About>
  <h1 style="height: 100vh" id="portfolio">eee</h1>
  <contact id="contact"></contact>
  <TheFooter></TheFooter>

</template>

<script>
import TheNavigation from "@/components/layout/TheNavigation";
import Header from "./components/Header";
import TheFooter from "@/components/layout/TheFooter";
import Contact from "@/components/Contact";
import About from "./components/About";

export default {
  name: 'App',
  beforeCreate() {
    scrollTo(0, 0);
  },
  components: {
    Contact,
    About,
    Header,
    TheFooter,
    TheNavigation
  }
}
</script>

<style lang="scss">
@import "styles/base/_base.scss";
@import "styles/base/typography";

</style>
