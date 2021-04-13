<template>

    <TheNavigation></TheNavigation>
    <h1>Test</h1>
    <p style="height: 100vh">Elo ziomy</p>
    <p id="test" style="height: 100vh">Test scroll</p>
    <p style="height: 100vh">Elo ziomy</p>
    <Header></Header>
    <TheFooter></TheFooter>

</template>

<script>
import TheNavigation from "@/components/layout/TheNavigation";
import Header from "./components/Header";
import TheFooter from "@/components/layout/TheFooter";

export default {
  name: 'App',
  components: {

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
