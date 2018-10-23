<style lang="scss">
#footer {
  position: absolute;
  width: 100%;
  height: 24rem;
  @media (min-width: 576px) {
    height: 27.5rem;
  }
  @media (min-width: 768px) {
    height: 22.5rem;
  }
  @media (min-width: 992px) {
    height: 18rem;
    .footer_links {
      padding-bottom: .5rem;
    }

  }
  bottom: 0;
  left: 0;
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

.footer_logo_wrap {
  transform: translateY(.25rem);
}
.footer_logo {
  height: 9rem;
  fill: var(--info);
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
          <h5 class="d-none d-md-block">STIMMIG Lautsprechersysteme</h5>
          Nicola Berndt
          <br>Melanchthonstr. 29
          <br>10557 Berlin
        </b-col>
        <b-col cols="12"
               md="6"
               lg="4"
               order="1"
               order-md="2"
               class="text-md-center align-self-end footer_logo_wrap">
          <svg class="footer_logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1012.9237 492.2345"><defs><style>.a{font-size:313.8283px;}.a,.c{font-family:Oswald-Regular, Oswald;}.b{letter-spacing:0.026em;}.c{font-size:129.048px;}.d{letter-spacing:0.009em;}.e{letter-spacing:0.014em;}.f{letter-spacing:0em;}</style></defs><title>STIMMIG_Logo</title><text class="a" transform="translate(-5.5362 311.3096)">S<tspan class="b" x="148.4385" y="0">T</tspan><tspan x="286.207" y="0">IMMIG</tspan></text><text class="c" transform="translate(6.956 439.3955)">Lau<tspan class="d" x="162.9839" y="0">t</tspan><tspan x="203.8916" y="0">sprechersy</tspan><tspan class="e" x="710.5273" y="0">s</tspan><tspan class="f" x="760.5977" y="0">teme</tspan></text></svg>
        </b-col>
        <b-col class="footer_links align-self-end text-lg-right"
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
            <br>
            <a href="/datenschutz">
              <i class="fas fa-arrow-right"></i>
              Datenschutz
            </a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-jumbotron>
</template>

