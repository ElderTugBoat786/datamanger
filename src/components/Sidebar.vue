<template lang="html">
  <aside class="menu">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li><a>Dashboard</a></li>
      <li><a>Customers</a></li>
    </ul>
    <p class="menu-label">
      Categories
    </p>
    <ul class="menu-list">
      <li><a>List</a></li>
      <li><a>Create</a></li>
    </ul>
  </aside>
</template>

<script>

export default {
  name: 'Sidebar'
}
</script>

<style lang="css" scoped>
.menu {
  margin-left: 15px
}
</style>
