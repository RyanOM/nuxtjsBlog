<template>
  <section class="section is-medium" style="padding-top: 30px">
    <div class="container has-text-centered">
      <h1 class="title">About Me</h1>

      <div class='card-content is-flex is-horizontal-center'>
        <figure class="image is-128x128">
          <img src="../static/me_400x400.jpeg" class="is-circular">
        </figure>
      </div>
      <div class="column is-half is-offset-one-quarter">
        <p>
          My name is Ryan O'Mullan and I'm an Irish web developer who currently lives in São Paulo. I like to build things using technology such as Python, Javascript and AWS.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "about.vue"
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
