<template>
  <b-navbar
    toggleable="md"
    type="dark"
    variant="primary">

    <b-navbar-toggle target="nav_collapse"/>

    <b-navbar-brand exact to="/">STIMMIG</b-navbar-brand>

    <b-collapse
      id="nav_collapse"
      is-nav>

      <b-navbar-nav>
      <b-nav-item href="#produkte">{{$t('produkte.title')}}</b-nav-item>
        <b-nav-item
          href="#philosophie"
          >{{$t('philosophie.title')}}</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item
          href="#kontakt"
        >{{$t('kontakt.title')}}</b-nav-item>
        <b-nav-item
          href="#impressum"
        >{{$t('impressum.title')}}</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
export default {}
</script>
