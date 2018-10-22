<style lang="scss">
.slider_wrap {
  overflow: hidden;
  min-height: calc( 100vh - 215px );
  width: 100%;
  height: 100%;
  position: relative;
  overflow: visible;
  touch-action: none;
  user-select: none;
}

.slider::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}

.slider {
  padding: 0;
  margin: 0;
  touch-action: none;
  width: 100%;
  height: 100%;
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
    will-change: opacity;
    @media (min-width: 768px) {
      max-height: calc( 100vh - 70px );
    }
    &--current {
      z-index: 1;
			opacity: 1;
    }
    &--hidden {
      opacity: 0;
    }
  }
}

.slider_cta {
  &.none {
    display: none;
  }
  font-size: 5rem;
  position: absolute;
  left: 50%;
  top: 0;
  color: rgba(200, 200, 200, .7);
  transform: translate3d(-50%, 0, 0);
  opacity: 0;
  transition: opacity 200ms ease;
  z-index: 4;
  font-family: Oswald;
  font-weight: 500;
  text-align: center;
  line-height: 1;
}

.slider_cta_visible {
  display: block;
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
    <div @mousedown="(e) => e.which === 1 ? slide() : null" :class="'slider_cta ' + cta_visible">
      360°<br>
      <i class="fas fa-arrows-alt-h"></i>
    </div>
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
          sizes="100vh"
          >
      <circle-loader class="slider_loader" />
    </div>
  </div>
</template>

<script>
import CircleLoader from '~/components/circle-loader';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const passive = {passive: true};
const numImages = 36;
const baseClass = "slider_image";

const initialVelocity = 0;
const draggingResistance = .4;
const freeResistance = .97;
const maxVelocity = .05;

export default {
  components: { CircleLoader },
  data() {
    const _images_fallback = [];
    for (let i = 0; i < numImages; i++)
      _images_fallback.push(require('~/assets/images/products/heim_l/360/'+i+'.jpg?size=1024'));
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
      cta_visible: 'slider_cta_visible',
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
      disableBodyScroll(this.$el);
      if (!Modernizr.touch)
        this.$el.requestPointerLock();
      this.sliding = true
      if (this.cta_visible) this.cta_visible = null;
    },
    endSlide(e) {
      enableBodyScroll(this.$el);
      if (!Modernizr.touch)
        document.exitPointerLock();
      this.sliding = false
      this.touch = false
      this.lastTouch = false
    },
    updateProgress() {
      this.animating = Math.abs(this.velocity) > 0.0004;
      if (Math.abs(this.velocity) > maxVelocity)
        this.velocity = maxVelocity * Math.sign(this.velocity);
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
    if (window.innerWidth < 768) {
      let l = document.getElementsByClassName('slider_image')
      for(let i = 0; i < l.length; i++) {
        const el = l[i];
        el.addEventListener('load', () => {
          window.requestAnimationFrame(() => {
            el.setAttribute('style', `height: ${l[i].offsetHeight}px !important; max-height: unset`)
          });
        })
      }
    }
    this.$el.addEventListener("mousemove", this.updateVelocity, passive);
    this.$el.addEventListener("touchstart", this.slide, passive);
    this.$el.addEventListener("touchend", this.endSlide);
    this.$el.addEventListener("touchcancel", this.endSlide);
    this.$el.addEventListener("touchmove", this.updateVelocity, passive);
    // this.velocity = initialVelocity;
    // window.requestAnimationFrame(this.updateProgress);
    // this.animating = true;
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
