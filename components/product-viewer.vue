<style lang="stylus">
.slider_wrap
  width: 100%
  height: 100%

.slider
  padding: 0
  margin: 0
  touch-action: none
  width: 100%
  height: 100%
  display: grid
  &_image
    display: block
    grid-column: 1/2
    grid-row: 1/2
    background-size: contain
    background-position: center center
    background-repeat: no-repeat
  &_image--hidden
    visibility: hidden
</style>

<template>
	<div @mouseup="endSlide()"
       class="slider_wrap">
    <ul
        class="slider"
        @mousedown="(e) => e.which === 1 ? slide() : null"
        >
      <!-- Animation Frames -->
      <li
          v-for="(image, key) in images"
          :key="key"
          :class="slider_image_class(key)"
          v-lazy:background-image.container="image.src"
          :data-src-set="image.srcSet"
          :data-loading="image.placeholder"
          >
      </li>
			</ul>
		</vue-gesture>
	</div>
</template>

<script>

const passive = {passive: true};
const numImages = 36;
const baseClass = "slider_image";

const initialVelocity = 0.0104;
const draggingResistance = .9;
const freeResistance = .99;

export default {
  data() {
    const _images = [];
    for (let i = 0; i < 36; i++)
      _images.push(require('~/assets/images/products/heim_l/360/'+i+'.jpg'));
    return {
      images: _images,
      sliding: false,
      animating: false,
      progress: 0,
      velocity: 0.,
      movementX: 0.,
      lastTouch: false,
      touch: false
    }
  },
  computed: {
    selected_image() {
      return Math.round(this.progress*(numImages-1))
    }
  },
  methods: {
    slider_image_class(key) {
      this.distance = this.selected_image - key;
      this.visible = Math.abs(this.distance) === 0;
      return `${baseClass}
      ${baseClass}_${key}
      ${baseClass}--${this.visible ? "visible" : "hidden"}
    `;
    },
    slide(e) {
      if (!Modernizr.touch)
        this.$el.requestPointerLock();
      this.sliding = true
    },
    endSlide(e) {
      if (!Modernizr.touch)
        document.exitPointerLock();
      this.sliding = false
      this.touch = false
      this.lastTouch = false
    },
    updateProgress() {
      this.animating = Math.abs(this.velocity) > 0.0004;
      this.progress += this.velocity;
      this.progress = this.progress % 1;
      if (this.progress < 0)
        this.progress = 1;
      this.velocity *= this.sliding ? draggingResistance : freeResistance;
      if (this.animating)
        window.requestAnimationFrame(this.updateProgress);
    },
    updateVelocity(e) {
      if (this.sliding) {
        if(!Modernizr.touch)
          this.movementX = e.movementX;
        else if (e.touches) {
          this.lastTouch = this.touch;
          this.touch = e.touches[0];
          if (this.lastTouch)
            this.movementX = this.touch.screenX - this.lastTouch.screenX;
        }
        this.velocity += this.movementX / window.innerWidth * .5;
        if (!this.animating) {
          window.requestAnimationFrame(this.updateProgress);
          this.animating = true;
        }
      }
    }
  },
  mounted() {
    this.$el.addEventListener("mousemove", this.updateVelocity, passive);
    this.$el.addEventListener("touchstart", this.slide, passive);
    this.$el.addEventListener("touchend", this.endSlide, passive);
    this.$el.addEventListener("touchcancel", this.endSlide, passive);
    this.$el.addEventListener("touchmove", this.updateVelocity, passive);
    this.velocity = initialVelocity;
    window.requestAnimationFrame(this.updateProgress);
    this.animating = true;
  },
  beforeDestroy() {
    this.$el.removeEventListener("mousemove", this.updateVelocity, passive);
    this.$el.removeEventListener("touchstart", this.slide, passive);
    this.$el.removeEventListener("touchend", this.endSlide, passive);
    this.$el.addEventListener("touchcancel", this.endSlide, passive);
    this.$el.removeEventListener("touchmove", this.updateVelocity, passive);
  }
}
</script>
