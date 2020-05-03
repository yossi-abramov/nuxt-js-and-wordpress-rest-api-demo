<template>
  <div class="container">
    <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 60px;
  ul {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0;
    list-style-type: none;
    li {
      height: 100%;
      display: flex;
      align-items: center;
      a {
        &.nuxt-link-exact-active {
          border-bottom: 2px solid dodgerblue;
        }
        text-decoration: none;
        padding: 5px;
        color: #222;
      }
    }
  }
}
</style>
