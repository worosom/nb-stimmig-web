<template>
  <b-container>
    <b-form-row>
      <b-col cols="12"
             class="px-1 pr-md-3">
        <b-card-group deck>
          <b-card title="Die Entwicklung">
            <p class="card-text">
            der STIMMIG Lautsprecher begann im Jahr 2002 als privates Projekt. Ziel war es, einen Lautsprecher ohne Kompromisse zu entwickeln, der dennoch ausgesprochen wohnraumfreundlich sein würde.
            </p>
          </b-card>
          <b-card title="Die Vorbilder">
            <p class="card-text">
            sollten klassische Musikinstrumente werden, wie beispielsweise ein Stehbass oder ein Flügel. Ein Flügel wird die wenigste Zeit gespielt und muss daher dementsprechend neben seinen musikalischen Qualitäten stets auch hohe Ansprüche an die Ästhetik erfüllen und als Möbel gefallen. Bei Musikinstrumenten erscheint uns das selbstverständlich, bei Lautsprechern seltsamerweise nicht.
            </p>
          </b-card>
        </b-card-group>
        <b-card-group deck>
          <b-card title="Die verwendeten Konzepte">
            <p class="card-text">
            Constant Directivity und Hoher Wirkungsgrad - setzen beide möglichst große Treiber voraus, und so galt es, ein Gehäuse  zu entwerfen, welches die eigentliche Größe des Lautsprechers verstecken würde. Dies ist gelungen! Neben einem STIMMIG sehen übliche Lautsprecher mit 25 oder 30 cm Treibern schlicht aus wie Kühlschränke. Eine Heim L lässt sich problemlos in einen 25 qm Wohnraum integrieren. Stimmig eben!
            </p>
          </b-card>
          <b-card title="Die Gestaltung">
            <p class="card-text">
            ist mit dem schwarzen Glanz der aus Kunststein hergestellten Waveguide-/Schallwand-Einheit sowie dem Echtholzfurnier wieder an einen klassischen Flügel angelehnt. Einen STIMMIG-Lautsprecher können sie jederzeit neben einen Steinway-Flügel stellen, ohne das einer dem anderen die Schau stiehlt.
            <br>Akustisch sieht es genau so aus!
            </p>
          </b-card>
        </b-card-group>
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
        motivation: require('~/assets/images/products/heim_l/STIMMIG_Heim_L_4er.jpg')
      }
    }
  }
}
</script>
