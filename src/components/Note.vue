<template lang="html">
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ name }}</p>
          <p class="subtitle is-6">{{ email }}</p>
        </div>
      </div>

      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
        <a href="#">#css</a> <a href="#">#responsive</a>
        <br>
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Note',
  props: {
    image : {
      type : String,
      default : 'No url'
    },
    name: {
      type : String,
      default : 'No Name',
    },
    email : {
      type : String,
      default : 'nomail@nomail.com'
    },
    messagge : {
      type: String,
      default : 'No Message'
    },
    date : {
      type: Date,
      default : function() { return (new Date())},
    },
  }
}
</script>

<style lang="css" scoped>

</style>
