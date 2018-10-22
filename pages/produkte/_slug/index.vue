<style scoped lang="scss">
.card-header {
  background-color: var(--white);
  padding-top: 0;
}

.product_specifications {
  width: 100%;
  margin-top: 1rem;
  tr {
    transition: color 200ms ease;
    &:hover {
      color: var(--info);
    }
  }
  td {
    hyphens: auto;
    strong {
      hyphens: none;
    }
  }
}

.spinner {
  padding: 0;
}
</style>
<template>
  <b-row>
    <b-col class="pb-2 d-md-none">
      <h1>{{product.name}}</h1>
      <h5>
        2 Wege Aktivlautsprecher
      </h5>
    </b-col>
    <b-col cols="12"
           md="6"
           order="1"
           order-md="2"
           class="spinner">
      <product-viewer/>
    </b-col>
    <b-col cols="12"
           md="6"
           order="3"
           order-md="1"
           >
      <b-card>
        <div slot="header" class="">
          <h1>{{product.name}}</h1>
          <h5>2 Wege Aktivlautsprecher</h5>
        </div>
        <table class="product_specifications">
          <tbody>
            <tr v-for="(item, key) in product.specifications"
                :key="key">
              <td class="d-md-block d-xl-table-cell pr-1 py-1 pb-md-0 py-lg-1">
                <strong class="mr-2">
                {{item.key}}:
                </strong>
              </td>
              <td class="d-md-block d-xl-table-cell pl-1 py-1 pt-md-0 py-lg-1">
                {{item.value}}
              </td>
            </tr>
          </tbody>
        </table>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
import ProductViewer from '~/components/product-viewer'

export default {
  layout: 'product',
  transition: 'page',
  head: {
    title: 'Heim L - Stimmig Lautsprechersysteme'
  },
  components: { ProductViewer },
  mounted() {
    const hash = location.hash;
    $(`.nav-tabs a[href="${hash}"]`).addClass('active');
  },
  data() {
    return {
      tabs: [ '#motivation', '#technik', '#herstellung' ],
      product: {
        name: 'Heim L',
        specifications: [
          { key: 'Tieftöner',
            value: '12 Zoll'
          },
          { key: 'Hochtöner',
            value: '12 Zoll Constant Directivity Waveguide mit 1 Zoll Kompressionstreiber'
          },
          { key: 'Übernahmefrequenz',
            value: '1 kHz'
          },
          { key: 'Abstrahlcharakteristik',
            value: 'Constant Directivity 90° x 60°'
          },
          { key: 'Frequenzumfang',
            value: '22 Hz - 20 kHz'
          },
          { key: 'Verstärkerleistung Tieftöner',
            value: '300 W RMS'
          },
          { key: 'Verstärkerleistung Hochtöner',
            value: '100 W RMS'
          },
          { key: 'Max SPL > 30 Hz',
            value: '110 dB'
          },
          { key: 'Max SPL > 50 Hz',
            value: '115 dB'
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
