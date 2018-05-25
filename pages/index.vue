<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-offset-2 is-8">
          <h1 class="title is-2">Latest Posts</h1>
          <hr>

          <h2
            class="title is-4"
            v-for="(post, index) in posts"
            :key="index">
            <nuxt-link :to="post.fields.slug">
              {{ post.fields.title }}
            </nuxt-link>
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import client from '~/plugins/contentful';

  export default {
    asyncData({ params }) {
      return client
        .getEntries({
          content_type: 'post',
          order: '-sys.createdAt',
        })
        .then(entries => {
          return { posts: entries.items };
        })
        .catch(e => console.log(e));
    },
    head: {
      title: 'Latest Posts - Nuxt.js Blog',
      meta: [
        {
          hid: `description`,
          name: 'description',
          content: 'Check out all of our latest posts'
        },
        {
          hid: `keywords`,
          name: 'keywords',
          keywords: 'Latest Posts - Nuxt.js Blog'
        },
        {
          hid: `og:title`,
          property: 'og:title',
          content: `Latest Posts - Nuxt.js Blog'`
        },
        {
          hid: `og:url`,
          property: 'og:url',
          content: 'https://romantic-joliot-af3740.netlify.com/deployed-to-netlify'
        },
        {
          hid: `og:image`,
          property: 'og:image',
          content: ''
        },
        {
          hid: `og:description`,
          property: 'og:description',
          content: 'Check out all of our latest posts'
        }
      ]
    },
  };
</script>
