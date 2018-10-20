<style lang="scss">
#footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  h4 {
    margin: 0;
  }
  a {
    color: var(--info);
    white-space: nowrap;
    i {
      transform: translate3d(-.5rem, 0, 0);
      transition: transform 200ms ease;
    }
    &:hover i {
      transform: translate3d(-.25rem, 0, 0);
    }
  }
}

.footer_logo {
  transform: translateY(.25rem);
}
</style>
<template>
  <b-jumbotron bg-variant="dark"
               text-variant="info"
               class="mb-0 mt-4"
               id="footer">
    <b-container fluid>
      <b-row align-h="between" align-v="center">
        <b-col cols="12"
               md="6"
               lg="4"
               order="2"
               order-md="1">
          <h5>STIMMIG Lautsprechersysteme</h5>
          Nicola Berndt
          <br>Melanchthonstr. 29
          <br>10557 Berlin
        </b-col>
        <b-col cols="12"
               md="6"
               lg="4"
               order="1"
               order-md="2"
               class="text-md-center align-self-end footer_logo">
          <h4 class="display-3">STIMMIG</h4>
        </b-col>
        <b-col class="align-self-end text-lg-right"
               cols="12"
               lg="4"
               order-md="3"
               order="3">
          <div class="text-left d-inline-block">
            <a href="tel:03088763738">
              <i class="fas fa-arrow-right"></i>
              030 8876 3738
            </a>
            <br>
            <a href="mailto:info@stimmig-lautsprechersysteme.de">
              <i class="fas fa-arrow-right"></i>
              info@stimmig-lautsprechersysteme.de
            </a>
            <br>
            <a href="http://www.stimmig-lautsprechersysteme.de">
              <i class="fas fa-arrow-right"></i>
              www.stimmig-lautsprechersysteme.de
            </a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-jumbotron>
</template>

