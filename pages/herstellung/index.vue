<template>
  <b-container>
    <b-form-row>
      <b-col sm="12"
             md="6"
             class="pr-md-3">
        <p>
        STIMMIG Lautsprecher werden komplett in Deutschland in Handarbeit gefertigt.
        </p>
        <p>
        Die Gehäusefront mit dem Waveguide wird aus dem Kunststeinmaterial Corian gefertigt und besteht aus einem einzigen Teil. Dies bedingt einen sehr aufwändigen Herstellungsprozess, bei dem gefräst, tiefgezogen, wieder gefräst, und poliert wird.
        </p>
        <p>
        Die Verstärkermodule der Firma ABACUS werden ebenfalls in Handarbeit hergestellt.
        </p>
      </b-col>
      <b-col class="pl-md-3">
        <img v-lazy="images.herstellung.src"
             :data-srcset="images.herstellung.srcSet"
             :data-loading="images.herstellung.placeholder"
             width="100%">
      </b-col>
    </b-form-row>
  </b-container>
</template>
<script>
export default {
	transition: 'page',
  data() {
    return {
      images: {
        herstellung: require('~/assets/images/Trifon_Produktion.jpg')
      }
    }
  }
}
</script>
