<style scoped lang="scss">
.card-body {
  padding-bottom: 0.5rem;
}
.card-footer {
  padding-top: 0;
  background-color: transparent;
  border-bottom: solid 1px #000;
  border-radius: 0;
  span {
  }
  i {
    float: right;
    font-size: 1rem;
  }
}
</style>
<template>
  <b-card :title="title">
    <section class="card-text">{{text}}</section>
    <nuxt-link slot="footer" :to="link">
      <div>Mehr<i class="fas fa-arrow-right"></i></div>
    </nuxt-link>
  </b-card>
</template>
<script>
export default {
  props: ['title', 'text', 'link']
}
</script>
