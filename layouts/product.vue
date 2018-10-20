<style lang="scss">
.nav-tabs {
  border-width: 1px;
  border-right: 1px solid #dee2e6;
  .nav-link.active {
    border-color: #dee2e6 #fff #dee2e6 #dee2e6;
    border-width: 1px;
    margin-right: -1px;
  }
  .nav-link.disabled {
    color: #c5c5c5;
    font-weight: 300;
  }

  .container .col {
    hyphens: auto;
  }
}
.tab-pane {
  padding-top: 1.5rem;
  min-height: 100vh;
}
</style>
<template>
  <div class="main_wrap default">
    <nav-bar/>
    <section class="pt-2">
      <b-container>
        <b-tabs vertical>
          <b-tab title="Heim L">
            <nuxt/>
          </b-tab>
          <b-tab title="Cinema L" disabled>
          </b-tab>
          <b-tab title="Studio L" disabled>
          </b-tab>
          <b-tab title="Club L" disabled>
          </b-tab>
          <b-tab title="Sub Zero L" disabled>
          </b-tab>
        </b-tabs>
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
