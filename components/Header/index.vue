<style scoped lang="scss">
.header_wrap {
  @media (min-width: 768px) {
    max-height: calc( 100vh - 100px );
  }
}
.catchphrase_container {
  display: grid;
  align-content: center;
  @media (min-width: 768px) {
    transform: translateY(-30%);
  }
}
img {
  height: 100%;
  max-height: calc( 100vh - 14rem );
  z-index: -1;
}
</style>
<template>
  <b-row class="header_wrap">
    <b-col cols="12"
           md="6"
           class="catchphrase_container">
      <h1>Stimmig Heim L</h1>
      <h2>Constant Directivity als Problemlöser.</h2>
    </b-col>
    <b-col cols="12"
           md="6">
      <img v-lazy="headerSrc" :data-srcset="headerSrcSet" :data-loading="loadingHeaderSrc">
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
