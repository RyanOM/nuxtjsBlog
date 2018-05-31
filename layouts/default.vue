<template>
  <div>
    <div>
      <navbar></navbar>
      <section class="hero is-primary has-text-centered" style="background: url(https://pbs.twimg.com/profile_banners/2400039026/1527443496/1500x500);">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              <nuxt-link to="/">Ryan's Blog</nuxt-link>
            </h1>
            <h2 class="subtitle">Mostly about tech, startups and other related content</h2>
          </div>
        </div>
      </section>
      <nuxt/>
    </div>
    <div class="box cta">
      <p class="has-text-centered">
        <a href="http://eepurl.com/dwNlR1" target="_blank">
          <span class="tag is-primary">Newsletter</span> If you want to receive an email about new articles or updates, click here to subscribe to my newsletter.
        </a>
      </p>
    </div>
    <blog-footer></blog-footer>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar'
  import BlogFooter from '../components/BlogFooter'

  export default {
    components: {
      Navbar,
      BlogFooter
    }
  }
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.box.cta {
  border-radius: 0;
  border-left: none;
  border-right: none;
}

</style>
