<template>
  <b-container>
    <b-form-row>
      <b-col cols="12">
        <h1>Motivation</h1>
      </b-col>
      <b-col cols="12"
             md="6"
             lg="4"
             class="px-1 pr-md-3">
        <p class="card-text">
        <strong>Die Entwicklung</strong> der STIMMIG Lautsprecher begann im Jahr 2002 als privates Projekt. Ziel war es, einen Lautsprecher ohne Kompromisse zu entwickeln, der dennoch ausgesprochen wohnraumfreundlich sein würde.
        </p>
        <p class="card-text">
        <strong>Die Vorbilder</strong> sollten klassische Musikinstrumente werden, wie beispielsweise ein Stehbass oder ein Flügel. Ein Flügel wird die wenigste Zeit gespielt und muss daher dementsprechend neben seinen musikalischen Qualitäten stets auch hohe Ansprüche an die Ästhetik erfüllen und als Möbel gefallen. Bei Musikinstrumenten erscheint uns das selbstverständlich, bei Lautsprechern seltsamerweise nicht.
        </p>
        <p class="card-text">
        </p>
      </b-col>
      <b-col cols="12"
             md="6"
             lg="4"
             order-sm="2"
             order-md="3"
             order-lg="2"
             class="px-1 pr-md-3 pl-lg-3">
        <p class="card-text">
        <strong>Die Konzepte</strong> Constant Directivity und Hochwirkungsgrad setzen beide möglichst große Treiber voraus, und so galt es, ein Gehäuse  zu entwerfen, welches die eigentliche Größe des Lautsprechers verstecken würde.
        </p>
        <p class="card-text">
        Dies ist gelungen! Neben einem STIMMIG sehen übliche Lautsprecher mit 25 oder 30 cm Treibern schlicht aus wie Kühlschränke. Eine Heim L lässt sich problemlos in einen 25 qm Wohnraum integrieren. Stimmig eben!
        </p>
      </b-col>
      <b-col cols="12"
             md="6"
             lg="4"
             order-sm="2"
             order-md="2"
             order-lg="3"
             class="px-1 pl-md-3">
        <p class="card-text">
        <strong>Die Gestaltung</strong> ist mit dem schwarzen Glanz der aus Kunststein hergestellten Waveguide-/Schallwand-Einheit sowie dem Echtholzfurnier wieder an einen klassischen Flügel angelehnt. Einen STIMMIG-Lautsprecher können sie jederzeit neben einen Steinway-Flügel stellen, ohne das einer dem anderen die Schau stiehlt.
        </p>
        <p class="card-text">
  Akustisch sieht es genau so aus!
        </p>
      </b-col>
      <b-col class="mt-4 px-1 pl-md-3 pl-lg-1"
             order="4" v-lazy-container="{ selector: 'img' }">
        <img :data-src="images_fallback.motivation.src"
             :srcset="images.motivation.srcSet"
             :data-loading="images.motivation.placeholder"
             sizes="100vw"
             width="100%">
      </b-col>
    </b-form-row>
  </b-container>
</template>
<script>
export default {
  transition: 'page',
  head: {
    title: 'Motivation - Stimmig Lautsprechersysteme'
  },
  data() {
    return {
      images_fallback: {
        motivation: require('~/assets/images/products/heim_l/STIMMIG_Heim_L_4er.jpg?size=2048')
      },
      images: {
        motivation: require('~/assets/images/products/heim_l/STIMMIG_Heim_L_4er.jpg')
      }
    }
  }
}
</script>
