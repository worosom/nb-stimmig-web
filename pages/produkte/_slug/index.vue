<style lang="scss">
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
</style>
<template>
  <b-row>
		<b-col class="pb-2 d-md-none">
			<h1 class="display-4">{{product.name}}</h1>
			<h5>
        2 Wege Aktivlautsprecher<br>mit 12 Zoll Constant Directivity Waveguide
			</h5>
		</b-col>
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
				<div slot="header" class="">
          <h1>{{product.name}}</h1>
					<h5>2 Wege Aktivlautsprecher<br>mit 12 Zoll Constant Directivity Waveguide</h5>
				</div>
        <table class="product_specifications">
          <tr v-for="(item, key) in product.specifications"
              :key="key">
            <td class="d-md-block d-lg-table-cell pr-1 py-1 pb-md-0 py-lg-1">
              <strong class="mr-2">
              {{item.key}}:
              </strong>
            </td>
            <td class="d-md-block d-lg-table-cell pl-1 py-1 pt-md-0 py-lg-1">
              {{item.value}}
            </td>
          </tr>
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
      product: {
        name: 'Heim L',
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
            value: '300 W / 100 W RMS'
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
