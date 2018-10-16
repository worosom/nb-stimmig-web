<template>
  <div class="main_wrap default">
    <nav-bar/>
    <section class="pt-4">
      <b-container>
        <nuxt/>
      </b-container>
    </section>
    <s-footer/>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'
import StHeader from '~/components/Header'
import SFooter from '~/components/Footer'

export default {
  components: { NavBar, StHeader, SFooter },
  head: {
    title: "Stimmig"
  }
}
</script>
