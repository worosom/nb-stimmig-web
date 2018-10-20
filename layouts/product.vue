<style lang="scss">
@media (min-width: 768px ) {
  .tabs>.col-auto {
      margin-left: 94px;
  }
}
.nav-tabs {
  border-width: 1px;
  border-right: 1px solid #dee2e6;
  .nav-link.active {
    border-color: #dee2e6 #fff #dee2e6 #dee2e6;
    border-width: 1px;
    margin-right: -1px;
  }
  .nav-link.disabled {
    color: #dfdfdf;
    font-weight: 300;
    cursor: default;
  }

  .container .col {
    hyphens: auto;
  }
}
</style>
<template>
  <div class="main_wrap default">
    <nav-bar/>
    <section class="pt-2">
      <b-tabs vertical>
        <b-container>
          <b-tab title="Heim L" href="/produkte/heim-l">
            <nuxt/>
          </b-tab>
          <b-tab title="Heim M" disabled>
          </b-tab>
          <b-tab title="Studio M" disabled>
          </b-tab>
          <b-tab title="Club L" disabled>
          </b-tab>
          <b-tab title="Heim Bass L" disabled>
          </b-tab>
        </b-container>
      </b-tabs>
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
