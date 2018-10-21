<template>
  <div class="main_wrap default">
    <b-container>
      <b-row>
        <b-col>
          <nav-bar/>
        </b-col>
      </b-row>
    </b-container>
    <section class="pt-2">
      <b-container class="content_container">
        <st-header/>
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
