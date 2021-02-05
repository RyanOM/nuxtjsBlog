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
          I’m a software engineer with over 5 years of experience in building applications, everything from internal tooling to consumer banking apps.
          I’ve also led small teams as a PM and enjoy working closely with customers.
          <br>
          <br>
          I’ve been full-remote for over 2 years and prior to that I’ve worked internationally in France, Germany & Brazil, allowing me to become trilingual and well equipped to work with teams & customers worldwide.
          <br>
          <br>
          You can checkout some of the things I have worked on <a href="https://github.com/ryanom" target="_blank" rel="noreferrer">my Github account</a> or <a href="https://www.linkedin.com/in/ryanomullan/" target="_blank" rel="noreferrer">connect with me on Linkedin.</a>
        </p>
      </div>
    </div>
    <div class="column is-offset-2 is-8"><hr></div>
    <div class="container has-text-centered" style="padding-top: 30px">
      <h1 class="title">Side Projects</h1>
      <div class="column is-half is-offset-one-quarter has-text-justified">
        <p><a href="https://sudojobs.io/" target="_blank" rel="noreferrer">SudoJobs</a> - A job platform focused on IT jobs that favors transparency in the offers.</p>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "about.vue",
      head: {
        title: 'About - Ryan\'s Blog',
        meta: [
          {
            hid: `description`,
            name: 'description',
            content: 'Find out more about me and my current projects'
          },
          {
            hid: `keywords`,
            name: 'keywords',
            keywords: 'About me - Ryan\'s Blog'
          },
          {
            hid: `og:title`,
            property: 'og:title',
            content: `About - Ryan's Blog`
          },
          {
            hid: `og:url`,
            property: 'og:url',
            content: 'https://ryanomullan.com'
          },
          {
            hid: `og:image`,
            property: 'og:image',
            content: 'https://pbs.twimg.com/profile_banners/2400039026/1527443496/1500x500'
          },
          {
            hid: `og:description`,
            property: 'og:description',
            content: 'Find out more about me and my current projects'
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
