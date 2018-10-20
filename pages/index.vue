<style lang="scss">
</style>
<template>
  <b-row class="pt-4">
    <b-col>
      <b-card-group deck class="info_group">
        <info-nugget title="Motivation"
                     :text="info.motivation.text"
                     :link="info.motivation.link"/>
        <info-nugget title="Technik"
                     :text="info.technik.text"
                     :link="info.technik.link"/>
        <info-nugget title="Herstellung"
                     :text="info.herstellung.text"
                     :link="info.herstellung.link"/>
      </b-card-group>
    </b-col>
  </b-row>
</template>

<script>
import Products from '~/components/Products'
import InfoNugget from '~/components/info-nugget'

export default {
  components: { Products, InfoNugget },
	transition: 'page',
  layout: 'landing',
  data() {
    return {
      info: {
        motivation: {
          text: `Constant Directivity als Problemlöser`,
          link: '/produkte/heim-l#motivation'
        },
        technik: {
          text: `Ziel der Entwicklung ist stets, alle Aspekte gleichermaßen auf das höchstmögliche Niveau zu heben.`,
          link: '/produkte/heim-l#technik'
        },
        herstellung: {
          text: `STIMMIG Lautsprecher werden komplett in Deutschland in Handarbeit gefertigt.`,
          link: '/produkte/heim-l#herstellung'
        }

      }
    }
  }
}
</script>
