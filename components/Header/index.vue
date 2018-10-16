<style scoped lang="scss">
.catchphrase_container {
  display: grid;
  align-content: center;
}
img {
  width: 100%;
}
</style>
<template>
  <b-row class="justify-conent-md-center">
    <b-col cols="12"
           md="6"
           class="catchphrase_container">
      <h1>Stimmig Heim L</h1>
      <h2>Keule macht laut.</h2>
    </b-col>
    <b-col cols="12"
           md="6"
           v-lazy-container="{ selector: 'img' }">
      <img :data-src="headerSrc" :data-srcset="headerSrcSet" :data-loading="loadingHeaderSrc">
    </b-col>
  </b-row>
</template>
<script>
export default {
  data() {
    return {
      headerImage: require(`~/assets/images/stimmig_l_header.jpg`)
    }
  },
  computed: {
    loadingHeaderSrc() { return this.headerImage.placeholder },
    headerSrc() { return this.headerImage.src },
    headerSrcSet() { return this.headerImage.srcSet }
  }
}
</script>
