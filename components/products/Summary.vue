<template>
  <div class="columns is-multiline is-centered">
    <!-- Graph // -->
    <div class="column is-narrow">
      <div class="card is-shady">
        <router-link :to="{ name: 'graph' }">
          <div class="card-content">
            <div class="content">
              <h3>Graph</h3>
              <div class="card-image">
                <figure class="image is-128x128">
                  <img
                    src="~/assets/img/products/summary/graph.png">
                </figure>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <!-- // Graph -->
    <!-- BBS // -->
    <div class="column is-narrow">
      <div class="card is-shady">
        <router-link :to="{ name: 'bbs' }">
          <div class="card-content">
            <div class="content">
              <h3>BBS</h3>
              <div class="card-image">
                <figure class="image is-128x128">
                  <img
                    src="~/assets/img/products/summary/bbs.png">
                </figure>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <!-- // BBS -->
    <!-- Cart // -->
    <div class="column is-narrow">
      <div class="card is-shady">
        <a
          href="https://kojimain-cart.netlify.com/"
          target="_blank"
          rel="noopener">
          <div class="card-content">
            <div class="content">
              <h3>Cart</h3>
              <div class="card-image">
                <figure class="image is-128x128">
                  <img
                    src="~/assets/img/products/summary/cart.png">
                </figure>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <!-- // Cart -->
  </div>
</template>
