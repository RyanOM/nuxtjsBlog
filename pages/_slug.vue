<template>
  <section class="section">

    <!-- .section -->
    <section class="section is-paddingless-horizontal">
      <div class="container grid">
        <nav class="breadcrumb grid-xl" aria-label="breadcrumbs">
          <ul>
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li class="is-active"><a href="#" aria-current="page">{{ post.fields.title }}</a></li>
          </ul>
        </nav>
      </div>
    </section>
    <!-- /.section -->

    <section class="section is-paddingless-horizontal" style="padding-top: 0">
      <div class="container grid">
        <article class="media center">
          <figure class="media-left">
            <figure class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png">
            </figure>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Ryan O'Mullan</strong> ·
                <a href="https://twitter.com/ryanomullan" target="_blank">@ryanomullan</a> <br>
                <span class="has-text-grey">
                  Web Developer<br>
                  <time datetime="">{{ new Date(post.sys.createdAt).toDateString() }}</time>
                </span>
              </p>
            </div>
          </div>
        </article>

        <div class="section is-paddingless-horizontal">
          <h1 class="title is-2">{{ post.fields.title }}</h1>
          <h2 class="subtitle is-3">{{ post.fields.subtitle }}</h2>
        </div>

        <figure class="columns is-multiple is-variable is-0 is-marginless grid-xl">
          <div class="column" v-for="img in post.fields.images" :key="img.sys.id">
            <div class="image card">
              <img :src="img.fields.file.url">
            </div>
          </div>
        </figure>
        <figcaption class="level">
          <small class="level-item has-text-grey">
            {{ post.fields.imageCaption }}
          </small>
        </figcaption>

        <div class="content" v-html="$md.render(post.fields.content)"></div>
      </div>
    </section>
  </section>
</template>

<script>
  import client from '~/plugins/contentful';

  export default {
    asyncData({ params, error, payload }) {
      if(payload) return {post:payload}

      return client
        .getEntries({
          'content_type': 'post',
          'fields.slug': params.slug
        })
        .then(entries => {
          return { post: entries.items[0] };
        })
        .catch(e => console.log(e));
    },
    head() {
      return {
        title: this.post.fields.title
      }
    },
  };
</script>

<style>
  .is-paddingless-horizontal { padding-left: 0; padding-right: 0; }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .grid {
    display: grid;
    grid-template-columns:
      [xl-start] 1fr 1.5rem [md-start] minmax(0, 624px) [md-end] 1.5rem 1fr [xl-end];
  }

  .grid *  { grid-column: md; }

  .grid-xl { grid-column: xl; }

  @media (max-width: 672px) {
    :root {
      font-size: 75%;
    }
  }

</style>
