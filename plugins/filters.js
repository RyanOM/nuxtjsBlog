import Vue from 'vue'
const removeMd = require('remove-markdown');

function truncate(string, value) {
  return string.substring(0, value) + '…';
}

function getPostImageUrl(post) {

  if (post.fields.images !== undefined) {
    return post.fields.images[0].fields.file.url
  } else {
    return "https://pbs.twimg.com/profile_banners/2400039026/1527443496/1500x500"
  }

}

function removeMarkdown(string) {
  return removeMd(string);
}

Vue.filter('capitalize', val => val.toUpperCase());
Vue.filter('truncate', truncate);
Vue.filter('getPostImageUrl', getPostImageUrl);
Vue.filter('removeMarkdown', removeMarkdown);

