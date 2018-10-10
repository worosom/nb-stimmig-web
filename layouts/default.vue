<template>
  <div>
    <nav-bar
      sticky="bottom"/>
    <nuxt/>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'

export default {
  components: { NavBar },
  head: {
    title: "Stimmig"
  }
}
</script>
