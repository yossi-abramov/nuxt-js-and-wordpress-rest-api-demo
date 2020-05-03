<template>
  <div class="post-item">
    <h3>#{{ post.id }}: {{ post.title.rendered }}</h3>
    <div class="the-excerpt" v-html="post.excerpt.rendered"></div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
.post-item {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border: 1px solid transparent;
  border-radius: 10px;
  margin: 20px 0;
  padding: 20px;
  &:first-child {
    background: dodgerblue;
    color: #fff;
  }
  & > h3 {
    margin-bottom: 15px;
  }
}
</style>
