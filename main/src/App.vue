<template>
  <div class="main">

    <div class="menu">
      <div><button @click="push(null, '', '/micro-a')">go micro-a</button></div>
      <div><button @click="push(null, '', '/micro-b')">go micro-b</button></div>
      <div><button @click="push(null, '', '/micro-a')">go micro-a again</button></div>
      <div><button @click="push(null, '', '/micro-b')">go micro-b again</button></div>
    </div>
    <div id="container" />
  </div>
</template>

<script setup>
  const push = (...args) => history.pushState(...args)
  // const href = url => location.href = url // can work
</script>

<style scoped>
:global(body) {
  margin: 0;
  padding: 0;
}
.main {
  display: flex;
  height: 100vh;
}

.menu {
  background-color: #ccc;
  padding: 0 20px;
}
</style>
