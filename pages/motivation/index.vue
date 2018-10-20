<template>
  <b-container>
    <b-form-row>
      <b-col cols="12"
             md="6"
             lg="4"
             class="px-1 pr-md-3">
        <p class="card-text">
  Die Entwicklung der STIMMIG Lautsprecher begann im Jahr 2002 als privates Projekt. Design-Ziel war es, einen Lautsprecher ohne Kompromisse zu entwickeln, der dennoch ausgesprochen wohnraumfreundlich sein würde.
        </p>
        <p class="card-text">
  Als Vorbild dienten klassische Musikinstrumente, wie beispielsweise ein Stehbass oder ein Flügel. Ein Flügel wird ja nun die wenigste Zeit gespielt und muss daher dementsprechend neben seinen musikalischen Qualitäten stets auch besondere Design-Qualitäten aufweisen und als Möbel gefallen.
        </p>
        <p class="card-text">
  Bei Musikinstrumenten erscheint uns das selbstverständlich, bei Lautsprechern seltsamerweise nicht.
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
  Da die verwendeten Konzepte - Constant Directivity und Hoher Wirkungsgrad - beide möglichst große Treiber voraussetzen, galt es, ein Gehäuse  zu entwerfen, welches die eigentliche Größe des Lautsprechers verstecken würde.
        </p>
        <p class="card-text">
  Dies ist gelungen! Neben einem STIMMIG Lautsprecher sehen übliche Lautsprecher mit 25 cm oder 30 cm Treibern schlicht aus wie Kühlschränke. Eine Heim L lässt sich problemlos - oder eben stimmig - in einen 25 qm Wohnraum integrieren.
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
  Die Gestaltung ist mit dem schwarzen Glanz der aus Kunststein hergestellten Waveguide- und Schallwand-Einheit sowie dem Echtholzfurnier wieder an einen klassischen Flügel angelehnt.
        </p>
        <p class="card-text">
  Einen STIMMIG-Lautsprecher können sie jederzeit neben einen Steinway-Flügel stellen, ohne das einer dem anderen die Schau stiehlt.
        </p>
        <p class="card-text">
  Akustisch sieht es genau so aus!
        </p>
      </b-col>
      <b-col class="mt-4 px-1 pl-md-3 pl-lg-1"
             order="4">
        <img v-lazy="images.motivation.src"
             :data-srcset="images.motivation.srcSet"
             :data-loading="images.motivation.placeholder"
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
        motivation: require('~/assets/images/products/heim_l/STIMMIG_Home_L_4er.jpg')
      }
    }
  }
}
</script>
