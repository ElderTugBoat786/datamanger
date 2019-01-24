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
    <NotesList :elements="elements"/>
  </div>
</template>


<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Sidebar from '@/components/Sidebar.vue'
import NotesList from '@/components/NotesList.vue'
import Note from '@/components/Note.vue'

// eslint-disable-next-line

export default {
  name: 'homebtest',
  data : function(){
    return {
      elements : [1,2,3,4,5,6,7,8,9,0],
      word : 'hello'
    }
  },
  components: {
    NavBar,
    Sidebar,
    NotesList,
    Note
  }
}
</script>
