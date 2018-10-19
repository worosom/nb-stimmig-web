<style scoped lang="scss">
.header_wrap {
	@media (min-width: 768px) {
		max-height: 100vh;
	}
}
.catchphrase_container {
  display: grid;
  align-content: center;
	@media (min-width: 768px) {
		padding-bottom: 33%;
		margin-bottom: 4rem;
	}
}
img {
  width: 100%;
  z-index: -1;
}
</style>
<template>
  <b-row class="header_wrap">
    <b-col cols="12"
           md="6"
           class="catchphrase_container">
      <h1>Stimmig Heim L</h1>
      <h2>Keule macht laut.</h2>
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
