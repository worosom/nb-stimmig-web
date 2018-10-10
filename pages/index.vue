<template>
  <section>
    <products
			v-for="(product, key) in $t('produkte.content')"
			:key="key"
			:product="product"/>
  </section>
</template>

<script>
import Products from '~/components/Products'

export default {
  components: { Products }
}
</script>
