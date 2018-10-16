<template>
  <div>
    <nav-bar/>
    <nuxt/>
    <s-footer/>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'
import SFooter from '~/components/Footer'

export default {
  components: { NavBar, SFooter },
  head: {
    title: "Stimmig"
  }
}
</script>
