<style lang="scss">
.slider_wrap {
  overflow: hidden;
  min-height: calc( 100vh - 215px );
  width: 100%;
  height: 100%;
}

.slider {
  padding: 0;
  margin: 0;
  touch-action: none;
  width: 100%;
  height: 100%;
  display: grid;
  position: relative;
  &_image {
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    height: 100%;
    max-height: 100vh;
    z-index: 0;
		opacity: 0;
    @media (min-width: 768px) {
      max-height: calc( 100vh - 70px );
    }
    &--current {
      z-index: 1;
			opacity: 1;
    }
    &--hidden {
    }
  }
}

.slider_cta {
  font-size: 5rem;
  position: absolute;
  left: 50%;
  top: -1rem;;
  color: rgba(200, 200, 200, .7);
  transform: translate3d(-50%, 0, 0);
  opacity: 0;
  transition: opacity 200ms ease;
  z-index: 1;
}

.slider_cta_visible {
  opacity: 1;
  animation: pulse 5s linear normal infinite;
}

@keyframes pulse {
  0% {
    color: rgba(200, 200, 200, .7);
  }
  6.25% {
    color: rgba(200, 200, 200, 1);
  }
  12.5% {
    color: rgba(200, 200, 200, .7);
  }
  25% {
    color: rgba(200, 200, 200, 1);
  }
  31.25% {
    color: rgba(200, 200, 200, .7);
  }
  37.5% {
    color: rgba(200, 200, 200, 1);
  }
  43.75% {
    color: rgba(200, 200, 200, .7);
  }
  50% {
    color: rgba(200, 200, 200, .7);
  }
  100% {
    color: rgba(200, 200, 200, .7);
  }
}

</style>

<template>
  <div @mouseup="endSlide()"
       class="slider_wrap">
    <i :class="'slider_cta fas fa-arrows-alt-h ' + cta_visible"
        @mousedown="(e) => e.which === 1 ? slide() : null"></i>
    <div
        class="slider"
        @mousedown="(e) => e.which === 1 ? slide() : null"
        >
      <!-- Animation Frames -->
      <img
          v-for="(image, key) in images"
          :key="key"
          :class="slider_image_class(key)"
          :src="images_src[key]"
          :srcset="image.srcSet"
          :data-error="image.placeholder"
          :data-loading="image.placeholder"
          sizes="100vh"
          >
      <circle-loader />
    </div>
  </div>
</template>

<script>
import CircleLoader from '~/components/circle-loader';

const passive = {passive: true};
const numImages = 36;
const baseClass = "slider_image";

const initialVelocity = 0;
const draggingResistance = .4;
const freeResistance = .97;

export default {
  components: { CircleLoader },
  data() {
    const _images_fallback = [];
    for (let i = 0; i < numImages; i++)
      _images_fallback.push(require('~/assets/images/products/heim_l/360/'+i+'.jpg?size=128'));
    const _images = [];
    for (let i = 0; i < numImages; i++)
      _images.push(require('~/assets/images/products/heim_l/360/'+i+'.jpg'));
    return {
      images: _images,
      images_src: _images_fallback,
      sliding: false,
      animating: false,
      progress: 0,
      velocity: 0.,
      movementX: 0.,
      lastTouch: false,
      touch: false,
      cta_visible: 'slider_cta_visible'
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
      this.visible = Math.abs(this.distance) < 1;
      return `${baseClass}
      ${baseClass}_${key}
      ${baseClass}--${this.visible ? 'visible' : 'hidden'}
      ${this.distance === 0 ? `${baseClass}--current` : ''}
    `;
    },
    slide(e) {
      if (!Modernizr.touch)
        this.$el.requestPointerLock();
      this.sliding = true
      if (this.cta_visible) this.cta_visible = null;
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
      this.progress -= this.velocity;
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
    this.$el.addEventListener("touchend", this.endSlide);
    this.$el.addEventListener("touchcancel", this.endSlide);
    this.$el.addEventListener("touchmove", this.updateVelocity, passive);
    this.velocity = initialVelocity;
    window.requestAnimationFrame(this.updateProgress);
    this.animating = true;
  },
  beforeDestroy() {
    this.$el.removeEventListener("mousemove", this.updateVelocity);
    this.$el.removeEventListener("touchstart", this.slide);
    this.$el.removeEventListener("touchend", this.endSlide);
    this.$el.removeEventListener("touchcancel", this.endSlide);
    this.$el.removeEventListener("touchmove", this.updateVelocity);
  }
}
</script>
