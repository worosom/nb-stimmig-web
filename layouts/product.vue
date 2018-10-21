<style lang="scss">
@media (min-width: 768px ) {
  .main_wrap.product {
    margin-left: -310px;
    nav {
      margin-left: 155px;
    }
  }
  .tabs>.col-auto {
    width: 155px;
  }
  .nav-tabs {
    border-width: 1px;
    border-right: 1px solid #dee2e6;
    .nav-link.active {
      border-color: #dee2e6 #fff #dee2e6 #dee2e6;
      border-width: 1px;
      margin-right: -1px;
    }
  }
}
.nav-tabs {
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
  <div class="main_wrap product">
    <b-container>
      <b-row>
        <b-col>
          <nav-bar/>
        </b-col>
      </b-row>
    </b-container>
    <section class="pt-2">
      <b-container>
        <b-tabs v-model="tabs_model" class="d-lg-none">
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
        </b-tabs>
        <b-tabs v-model="tabs_model" class="d-none d-lg-flex" vertical>
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
  },
  data() {
    return {
      tabs: ['heim-l', 'heim-m', 'studio-m', 'club-l', 'heim-bass-l']
    }
  },
  computed: {
    tabs_model: {
      get() { return this.tabs.indexOf(this.$route.path) },
      set(val) {
        this.active_tab = val;
        this.$router.push('/produkte/'+this.tabs[val]);
      }
    }
  },
}
</script>
