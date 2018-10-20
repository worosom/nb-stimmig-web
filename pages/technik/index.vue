<template>
  <b-container>
    <b-form-row>
      <b-col class="pr-md-3">
        <h1>Technik</h1>
        <p>
        Auch hier ist der Name STIMMIG Programm!
        </p>
        <p>
        Ziel bei der Entwicklung der STIMMIG Lautsprecher ist stets, alle Aspekte gleichermaßen auf das höchstmögliche Niveau zu heben. Dieses ist gewissenhaft auszuloten, um sicherzustellen, dass nicht das “Überzüchten” einer bestimmten Eigenschaft dazu führt, dass andere Eigenschaften ins Hintertreffen geraten.
        </p>
        <p>
        Eine STIMMIG macht alles gleichermaßen gut:
        </p>
      </b-col>
      <b-col cols="12" md="6"
             class="pl-md-3">
        <img v-lazy="images.technik.src"
             :data-srcset="images.technik.srcSet"
             :data-loading="images.technik.placeholder"
             width="100%">
        <p>
        <i style="font-size: .8rem; hyphens: auto;">
        Als Antriebselektronik kommen bei STIMMIG Verstärkermodule der Firma ABACUS zum Einsatz, die mit ihrer Dolifet-Technologie idealer Spielpartner für die verwendeten Treiber sind.
        </i>
        </p>
      </b-col>
      <b-col cols="12">
        <b-card-group deck>
          <b-card title="Dynamik/Auflösung">
            <p class="card-text">
            Sie kann ebenso die feinsten Strukturen eines klassischen Pianissimo flüsterleise auflösen, als auch ein Rockkonzert in Originallautstärke von über 120 dB mit sensationell geringen Verzerrungen wiedergeben. Diese aufregende Dynamik funktioniert natürlich auch im Heimkino hervorragend!
            </p>
            <p class="card-text">
            Diese aufregende Dynamik funktioniert natürlich auch im Heimkino hervorragend!
            </p>
          </b-card>
          <b-card title="Räumliches">
            <p class="card-text">
            Durch das Constant-Directivity-Prinzip wird der Schall genau definiert nur dorthin gestrahlt, wo er benötigt wird:
            </p>
            <p class="card-text">
            Zum Hörer. Seitenwände, Decke und Boden liegen weit außerhalb des Abstrahlbereiches.
            </p>
            <p class="card-text">
            Die häufig in Wohnzimmern anzutreffenden Schallabsorber, zu deren Installation traditionelle Lautsprecherkonzepte den Benutzer häufig verleiten, finden bei einem STIMMIG-Lautsprecher praktisch keinen Einsatzzweck mehr.
            </p>
          </b-card>
          <b-card title="Constant Directivity">
            <p class="card-text">
            Constant Directivity beschreibt ein Abstrahlverhalten eines Lautsprechers, bei dem der Schalldruck außerhalb der 0° Achse des Lautsprechers mit zunehmendem Winkel stetig abnimmt, ohne dass sich der Frequenzgang ändert.
            Diese Eigenschaft erweitert die Hörzone drastisch. Der klassische “Sweet Spot” bleibt aus und das Klangbild ändert sich nicht, wenn der Hörer sich vor den Lautsprechern bewegt.
            </p>
          </b-card>
        </b-card-group>
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
        technik: require('~/assets/images/Trifon_Backplate_01.jpg'),
      }
    }
  }
}
</script>
