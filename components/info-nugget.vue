<style scoped lang="scss">
.card-body {
  padding-bottom: 0;
}
.card-footer {
  padding: 0;
  background-color: transparent;
  border-radius: 0;
  border-bottom: solid 1px var(--dark);
  transition: border-color 200ms ease;
  &:hover {
    border-color: var(--info);
  }
  .info-nugget__more {
    display: block;
    padding: 1.25rem;
    transition: color 200ms ease;
    &__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .fas {
      transition: transform 200ms ease;
    }
  }
  .info-nugget__more:hover {
    text-decoration: none;
    color: var(--dark);
    span {
      text-decoration: underline;
    }
    .fas {
      transform: translateX(1rem);
    }
  }
}
</style>
<template>
  <b-card :title="title">
    <section class="card-text">{{text}}</section>
    <nuxt-link class="info-nugget__more"slot="footer" :to="link">
      <div class="info-nugget__more__inner">
        <span>
          Mehr
        </span>
        <i class="fas fa-arrow-right"></i>
      </div>
    </nuxt-link>
  </b-card>
</template>
<script>
export default {
  props: ['title', 'text', 'link']
}
</script>
