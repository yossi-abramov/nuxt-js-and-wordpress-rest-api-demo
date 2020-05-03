<template>
  <div class="container">
    <div>
      <h1 class="title">Posts</h1>
      <Loader v-if="$fetchState.pending" />
      <div v-else>
        <post-item v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PostItem from "@/components/PostItem";
import Loader from "@/components/Loader";

export default {
  components: {
    Loader,
    PostItem
  },
  data() {
    return {
      posts: []
    };
  },
  async fetch() {
    const { data: posts } = await axios.get(
      "https://demo.wp-api.org/wp-json/wp/v2/posts"
    );

    this.posts = posts;
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
}
</style>
