<style lang="scss" scoped>
.jumbotron {
	position: relative;
	overflow: hidden;
	margin-bottom: 0;
	z-index: 1;
}

.jumbotron:not(:last-child) {
	margin-bottom: 0;
}

.jumbotron_bg {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-size: 100%;
	background-position: 0 50%;
	z-index: -1;
}

.jumbotron_header {
	z-index: 1;
	transition: background-color 200ms ease;
	text-align: center;
}

.jumbotron:hover .jumbotron_header {
	background-color: rgba(0, 0, 0, .5);
}
</style>

<template>
	<b-jumbotron
		text-variant="light"
		class="main_jumbotron"
		container-fluid>
		<section slot="header" class="jumbotron_header">
			{{product.name}} <i class="fas fa-caret-right"/>
		</section>
		<div class="jumbotron_bg"
			style="background-image: url('/stimmig_l.jpg');"/>
	</b-jumbotron>
</template>

<script>
export default {
	props: ['product']
}
</script>
