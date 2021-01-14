<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-offset-2 is-8">
          <h1 class="title is-2">Posts with tag: {{twwtw}}</h1>
          <hr>

          <div class="columns is-multiline">
            <postBox v-for="post in posts" :key="post.fields.slug" v-bind:post="post"></postBox>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>


<script>

  import client from '~/plugins/contentful';

  export default {
    asyncData({params, error, payload}) {
      return client
        .getEntries({
          content_type: 'post',
          order: '-sys.createdAt',
          //'fields.tags.fields.name[ne]': 'deeploy'
          'fields.tags[ne]': params.slug
        })
        .then(entries => {
          return {
            posts: entries.items,
            twwtw: params.slug
          };
        })
        .catch(e => console.log(e));
    },
    head: {
      title: 'Latest Posts - Ryan\'s Blog',
      meta: [
        {
          hid: `description`,
          name: 'description',
          content: 'Check out all of our latest posts'
        },
        {
          hid: `keywords`,
          name: 'keywords',
          keywords: 'Latest Posts - Ryan\'s Blog'
        },
        {
          hid: `og:title`,
          property: 'og:title',
          content: `Latest Posts - Ryan's Blog'`
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
          content: 'Check out all of our latest posts'
        }
      ]
    },
  };
</script>

<style scoped>

</style>
