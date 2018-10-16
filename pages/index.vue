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
  <section class="pt-4">
    <b-container>
      <b-row class="justify-conent-md-center">
        <b-col cols="12"
               md="6"
               class="catchphrase_container">
          <h1>Stimmig Heim L</h1>
          <h2>Keule macht laut.</h2>
        </b-col>
        <b-col cols="12"
               md="6">
          <img src="stimmig_l.jpg">
        </b-col>
      </b-row>
      <b-row class="pt-4">
        <b-col sm="12"
               md="4">
          <h3>Präzision.</h3>
          <p>
          Swipp bidabipp min glibki noxu. Labtzn neblung sheka shiku nebluszka. Swipp bidabipp min glibki noxu. Labtzn neblung sheka shiku nebluszka.
          </p>
          <nuxt-link to="#accurate">Mehr</nuxt-link>
        </b-col>
        <b-col sm="12"
               md="4">
          <h3>Flexibilität.</h3>
          <p>
          Swipp bidabipp min glibki noxu. Labtzn neblung sheka shiku nebluszka. Swipp bidabipp min glibki noxu. Labtzn neblung sheka shiku nebluszka.
          </p>
          <nuxt-link to="#flexible">Mehr</nuxt-link>
        </b-col>
        <b-col sm="12"
               md="4">
          <h3>Kraft.</h3>
          <p>
          Swipp bidabipp min glibki noxu. Labtzn neblung sheka shiku nebluszka. Swipp bidabipp min glibki noxu. Labtzn neblung sheka shiku nebluszka.
          </p>
          <nuxt-link to="#powerful">Mehr</nuxt-link>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import Products from '~/components/Products'

export default {
  components: { Products }
}
</script>
