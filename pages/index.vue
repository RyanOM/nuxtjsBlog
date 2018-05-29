<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-offset-2 is-8">
          <h1 class="title is-2">Latest Posts</h1>
          <hr>

          <div class="columns is-multiline">
            <div class="column is-half" v-for="(post, index) in posts" :key="index">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <nuxt-link :to="post.fields.slug">
                      <img :src="post|getPostImageUrl" alt="Placeholder image" style="object-fit: cover">
                    </nuxt-link>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">
                        <nuxt-link :to="post.fields.slug" class="has-text-dark">
                          {{ post.fields.title }}
                        </nuxt-link>
                      </p>
                    </div>
                  </div>

                  <div class="content">
                    {{ post.fields.content|removeMarkdown|truncate(120) }}
                    <!-- TODO - Add tags
                    <a href="#">#css</a> - <a href="#">#responsive</a>
                    -->
                    <br>
                    <br>
                    <time datetime="">{{ new Date(post.sys.createdAt).toDateString() }}</time>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
