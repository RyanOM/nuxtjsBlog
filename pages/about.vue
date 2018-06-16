<template>
  <section class="section is-medium" style="padding-top: 30px">
    <div class="container has-text-centered">
      <h1 class="title">About Me</h1>

      <div class='card-content is-flex is-horizontal-center'>
        <figure class="image is-128x128">
          <img src="../static/me_400x400.jpeg" class="is-circular">
        </figure>
      </div>
      <div class="column is-half is-offset-one-quarter has-text-justified">
        <p>
          My name is Ryan O'Mullan and I'm an Irish web developer who currently lives in São Paulo. I like to build things using technology such as Python, Javascript and AWS.
          <br>
          <br>
          You can checkout some of the things I have worked on <a href="https://github.com/ryanom" target="_blank" rel="noreferrer">my Github account</a>.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "about.vue",
      head: {
        title: 'Contact - Ryan\'s Blog',
        meta: [
          {
            hid: `description`,
            name: 'description',
            content: 'Contact me here'
          },
          {
            hid: `keywords`,
            name: 'keywords',
            keywords: 'Latest Posts - Ryan\'s Blog'
          },
          {
            hid: `og:title`,
            property: 'og:title',
            content: `Contact - Ryan's Blog`
          },
          {
            hid: `og:url`,
            property: 'og:url',
            content: 'https://ryanomullan.com/conact'
          },
          {
            hid: `og:image`,
            property: 'og:image',
            content: 'https://pbs.twimg.com/profile_banners/2400039026/1527443496/1500x500'
          },
          {
            hid: `og:description`,
            property: 'og:description',
            content: 'Contact me here'
          }
        ]
      },
    }
</script>

<style scoped>

  .is-circular {
    border-radius: 50%;
  }

  .is-horizontal-center {
    justify-content: center;
  }

</style>
