<style>
.navbar {
  z-index: 10;
  background-color: var( --white );
}

.navbar-brand {
  font-family: Oswald;
}
</style>
<template>
  <b-container class="px-0 px-md-2">
    <b-row>
      <b-col class="px-0 px-md-3">
        <b-navbar
          toggleable="md"
          type="light">

          <b-navbar-toggle target="nav_collapse"/>

          <b-navbar-brand exact to="/"
            class="float-left">STIMMIG</b-navbar-brand>
          <b-collapse
            id="nav_collapse"
            is-nav>
            <b-navbar-nav>
              <b-nav-item
                to="/produkte/heim-l"
              >Produkte</b-nav-item>
              <b-nav-item
                to="/motivation"
              >Motivation</b-nav-item>
              <b-nav-item
                to="/technik"
              >Technik</b-nav-item>
              <b-nav-item
                to="/herstellung"
              >Herstellung</b-nav-item>
              <b-nav-item
                to="#footer"
                v-scroll-to="'#footer'"
              >{{$t('impressum.title')}}</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items
            <b-navbar-nav class="ml-auto">
            </b-navbar-nav> -->

          </b-collapse>
        </b-navbar>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {}
</script>
