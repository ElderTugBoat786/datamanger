<template lang="html">
  <div class="column">
    <div class="columns is-multiline">
      <li v-for="element in elements" :key="element">
        {{element}}
        <Note />
      </li>
    </div>
  </div>
</template>

<script>

import Note from '@/components/Note.vue';

export default {
  name : 'NotesList',
  props : {
    elements : Array
  },
  components:{
    Note,
  },
  created : function(){console.log(this.$props);}
}

</script>

<style lang="css" scoped>
</style>
