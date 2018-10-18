<style lang="scss">
.nav-tabs {
  border-width: 1px;
  .nav-link.active {
    border-width: 1px;
    margin-bottom: -1px;
  }

  .container .col {
    hyphens: auto;
  }
}
.tab-pane {
  padding-top: 1.5rem;
}

.spinner {
  overflow: hidden;
  min-height: 70vh;
  @media ( min-width: 768px ) {
    min-height: unset;
  }
}
</style>
<template>
  <b-row class="pt-4">
    <b-col cols="12"
           md="6"
           order="1"
           order-md="2"
           class="spinner">
      <no-ssr>
        <product-viewer/>
      </no-ssr>
    </b-col>
    <b-col cols="12"
           md="6"
           order="3"
           order-md="1"
           >
      <b-card>
        <h1 slot="header">STIMMIG Heim L</h1>
        2 Wege Aktivlautsprecher<br>mit 12 Zoll Constant Directivity Waveguide
        <dl>
          <div v-for="(item, key) in product.specifications" :key="key">
            <dt>
              {{item.key}}:
            </dt>
            <dd>
              {{item.value}}
            </dd>
          </div>
        </dl>
      </b-card>
    </b-col>
    <b-col order="2"
           order-md="3"
           class="mt-4">
      <b-tabs v-model="tabs_model">
        <b-tab title="Motivation" href="#motivation" id="motivation">
          <b-container>
            <b-form-row>
              <b-col cols="12"
                     md="6"
                     lg="4">
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
                     order-lg="2">
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
                     order-lg="3">
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
              <b-col class="mt-4"
                     order="4">
                <img v-lazy="images.motivation.src"
                     :data-srcset="images.motivation.srcSet"
                     :data-loading="images.motivation.placeholder"
                     width="100%">
              </b-col>
            </b-form-row>
          </b-container>
        </b-tab>
        <b-tab title="Technik" href="#technik" id="technik">
          <b-container>
            <b-form-row>
              <b-col>
                <p>
          Ziel bei der Entwicklung der STIMMIG Lautsprecher ist stets, alle Aspekte gleichermaßen auf das höchstmögliche Niveau zu heben. Dieses ist gewissenhaft auszuloten, um sicherzustellen, dass nicht das “Überzüchten” einer bestimmten Eigenschaft dazu führt, dass andere Eigenschaften ins Hintertreffen geraten.
                </p>
                <p>
          Eine STIMMIG macht alles gleichermaßen gut:
                </p>
              </b-col>
              <b-col cols="12" md="6">
                <img v-lazy="images.technik.src"
                     :data-srcset="images.technik.srcSet"
                     :data-loading="images.technik.placeholder"
                     width="100%">
              </b-col>
              <b-col cols="12">
                <b-card-group deck>
                  <b-card title="Dynamik/Auflösung">
                    <p class="card-text">
                    Sie kann ebenso die feinsten Strukturen eines klassischen Pianissimo flüsterleise auflösen, als auch ein Rockkonzert in Originallautstärke von über 120 dB mit sensationell geringen Verzerrungen wiedergeben.
                    </p>
                    <p class="card-text">
                    Diese aufregende Dynamik funktioniert selbstverständlich auch im Heimkino hervorragend!
                    </p>
                  </b-card>
                  <b-card title="Räumliches">
                    <p class="card-text">
                    Durch das Constant-Directivity-Prinzip wird der Schall genau definiert nur dorthin gestrahlt, wo er benötigt wird:
                    </p>
                    <p class="card-text">
                    Zum Hörer. Seitenwände, Decke und Boden liegen weit außerhalb des Abstrahl-Bereiches.
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
                <p>
          Als Antriebselektronik kommen bei STIMMIG Verstärkermodule der Firma ABACUS zum EInsatz, die mit ihrer Dolifet-Technologie idealer Spielpartner für die verwendeten Treiber sind.
                </p>
              </b-col>
            </b-form-row>
          </b-container>
        </b-tab>
        <b-tab title="Herstellung" href="#herstellung" id="herstellung">
          <b-container>
            <b-form-row>
              <b-col sm="12"
                     md="6">
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
              <b-col>
                <img v-lazy="images.herstellung.src"
                     :data-srcset="images.herstellung.srcSet"
                     :data-loading="images.herstellung.placeholder"
                     width="100%">
              </b-col>
            </b-form-row>
          </b-container>
          </p>
        </b-tab>
      </b-tabs>
    </b-col>
  </b-row>
</template>
<script>
import ProductViewer from '~/components/product-viewer'

export default {
  layout: 'product',
  components: { ProductViewer },
  mounted() {
    const hash = location.hash;
    $(`.nav-tabs a[href="${hash}"]`).addClass('active');
  },
  computed: {
    tabs_model: {
      get() { return this.tabs.indexOf(this.$route.hash) },
      set(val) {
        this.active_tab = val;
        this.$router.replace(this.tabs[val]);
      }
    }
  },
  data() {
    return {
      tabs: [ '#motivation', '#technik', '#herstellung' ],
      images: {
        motivation: require('~/assets/images/products/heim_l/STIMMIG_Home_L_4er.jpg'),
        technik: require('~/assets/images/Trifon_Backplate_01.jpg'),
        herstellung: require('~/assets/images/Trifon_Produktion.jpg')
      },
      product: {
        name: 'Stimmig Heim L',
        specifications: [
          { key: 'Tieftöner',
            value: '12 Zoll'
          },
          { key: 'Hochtöner',
            value: '1 Zoll Kompressionstreiber'
          },
          { key: 'Übernahmefrequenz',
            value: '1 kHz'
          },
          { key: 'Abstrahlcharakteristik',
            value: '90° x 60°'
          },
          { key: 'Frequenzumfang',
            value: '22 Hz - 20 kHz'
          },
          { key: 'Verstärkerleistung',
            value: '300W / 100W RMS'
          },
          { key: 'Max SPL > 80 Hz',
            value: '125 dB'
          },
          { key: 'Höhe',
            value: '110 cm'
          },
          { key: 'Breite',
            value: '38 cm'
          },
          { key: 'Tiefe',
            value: '35 cm'
          },
          { key: 'Gewicht',
            value: '46 kg'
          }
        ]
      }
    }
  }
}
</script>
