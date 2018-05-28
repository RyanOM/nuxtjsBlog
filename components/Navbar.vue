<template>
  <div>
    <nav class="navbar ">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          Ryan's Nuxtjs Blog
        </a>

        <a class="navbar-item is-hidden-desktop" href="https://github.com/ryanom" target="_blank">
          <span class="icon" style="color: #333;">
            <i class="fa fa-github"></i>
          </span>
        </a>

        <a class="navbar-item is-hidden-desktop" href="https://www.linkedin.com/in/ryanomullan" target="_blank">
          <span class="icon" style="color: #0077B5;">
            <i class="fa fa-linkedin"></i>
          </span>
        </a>

        <a class="navbar-item is-hidden-desktop" href="https://www.twitter.com/ryanomullan" target="_blank">
          <span class="icon" style="color: #0084b4;">
            <i class="fa fa-twitter"></i>
          </span>
        </a>

        <div class="navbar-burger burger" data-target="navMenubd-example">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenubd-example" class="navbar-menu">
        <div class="navbar-start">
          <span class="navbar-item">
            &nbsp;
          </span>
          <a class="navbar-item " href="/">
            Blog
          </a>
          <a class="navbar-item " href="/about">
            About
          </a>
          <a class="navbar-item " href="/contact">
            Contact
          </a>
        </div>

        <div class="navbar-end">
          <a class="navbar-item is-hidden-desktop-only" href="https://github.com/ryanom" target="_blank">
            <span class="icon" style="color: #333;">
              <i class="fa fa-github"></i>
            </span>
          </a>
          <a class="navbar-item is-hidden-desktop-only" href="https://www.linkedin.com/in/ryanomullan" target="_blank">
            <span class="icon" style="color: #0077B5;">
              <i class="fa fa-linkedin"></i>
            </span>
          </a>
          <a class="navbar-item is-hidden-desktop-only" href="https://www.twitter.com/ryanomullan" target="_blank">
            <span class="icon" style="color: #0084b4;">
              <i class="fa fa-twitter"></i>
            </span>
          </a>
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="button is-primary" href="https://github.com/RyanOM/nuxtjsBlog">
                  <span class="icon">
                    <i class="fa fa-github"></i>
                  </span>
                  <span>View Code</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped>

</style>
