<template>
  <footer id="footer" class="footer">
    <a href="https://www.desite.pl">www.desite.pl</a>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style lang="scss" scoped>
  .footer {
    display: flex;
    width: 100%;
    padding: 4rem;
    justify-content: center;
    align-items: center;

    a {
      font-weight: 200;
      text-decoration: none;
      font-size: 1.5rem;
    }
  }
</style>
