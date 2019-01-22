<template>
  <div class="about">
    <NavBar />
    <div class="columns">
      <div class="column is-one-quarter">
        <Sidebar />
      </div>
      <div class="column">
        <div class="columns is-multiline">
          <div class="column is-one-third-desktop is-half-tablet">
            <Note />
          </div>
          <div class="column is-one-third-desktop is-half-tablet">
            <Note />
          </div>
          <div class="column is-one-third-desktop is-half-tablet">
            <Note />
          </div>
          <div class="column is-one-third-desktop is-half-tablet">
            <Note />
          </div>
          <div class="column is-one-third-desktop is-half-tablet">
            <Note />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Sidebar from '@/components/Sidebar.vue'
import Note from '@/components/Note.vue'

export default {
  name: 'homebtest',
  components: {
    NavBar,
    Sidebar,
    Note
  }
}
</script>
