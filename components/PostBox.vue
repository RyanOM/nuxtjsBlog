<template>
  <div class="column is-half">
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
          <span v-if="'tags' in post.fields">
            <br>
            <br>
            <i class="fa fa-tags"></i> &nbsp;
            <span v-for="(tag, index) in post.fields.tags" :key="index">#{{ tag.fields.name }}<span v-if="index+1 < post.fields.tags.length">, </span></span>
          </span>
          <br>
          <br>
          <time datetime="">{{ new Date(post.sys.createdAt).toDateString() }}</time>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "PostBox.vue",
      props: ['post']
    }
</script>

<style scoped>

</style>
