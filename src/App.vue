<template>
  <TheNavigation></TheNavigation>
  <Header></Header>

</template>

<script>
import TheNavigation from "@/components/layout/TheNavigation";
import Header from "./components/Header";

export default {
  name: 'App',
  components: {
    Header,
    TheNavigation,
  }
}
</script>

<style lang="scss">
@import "styles/base/_base.scss";
@import "styles/base/typography";
</style>
