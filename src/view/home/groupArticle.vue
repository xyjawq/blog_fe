
<template>
  <div>
    <h3 style="color: blue">{{group}}</h3>
    <article-list :key-word="group"></article-list>
  </div>
</template>
<script>
  import ArticleList from '../common/articleList.vue'

  export default {
    components: { ArticleList },
    data () {
      return {
        group: ''
      }
    },
    watch: {
      '$route': function (to) {
        this.group = to.name
      }
    },
    mounted () {
      this.group = this.$route.name
    }
  }
</script>
