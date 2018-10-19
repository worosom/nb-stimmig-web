<style>
.dropdown-item.disabled {
	color: #c5c5c5;
	font-weight: 300;
}
</style>
<template>
  <b-navbar
    toggleable="md"
    type="light">

    <b-navbar-toggle target="nav_collapse"/>

    <b-navbar-brand exact to="/">STIMMIG</b-navbar-brand>

    <b-collapse
      id="nav_collapse"
      is-nav>

      <b-navbar-nav>
				<b-nav-item-dropdown :text="$t('produkte.title')" right>
					<b-dropdown-item nuxt link to="/produkte/heim-l/">Heim L</b-dropdown-item>
					<b-dropdown-item disabled>Studio l</b-dropdown-item>
					<b-dropdown-item disabled>Cinema L</b-dropdown-item>
					<b-dropdown-item disabled>Club L</b-dropdown-item>
					<b-dropdown-item disabled>Sub Zero</b-dropdown-item>
				</b-nav-item-dropdown>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item
          href="#footer"
					v-scroll-to="'#footer'"
        >{{$t('impressum.title')}}</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
export default {}
</script>
