
<template>
  <div>
    <article v-for="article in articleList" :key="article.id">
      <h3>{{article.title}}</h3>
      <p>{{article.author}}</p>
    </article>
  </div>
</template>

<script>
  export default {
    props: {
      kewWord: String
    },
    data () {
      return {
        articleList: []
      }
    },
    methods: {
      loadArticles (keyWord) {
        return [
          {id: 1, title: 'HTTP协议漫谈', author: 'ccpat', createTime: '2018-3-12 10:00:00'},
          {id: 2, title: '使用FileTypesMan修复office关联图标', author: '小菜鸟入门', createTime: '2018-3-12 10:00:00'},
          {id: 3, title: 'java实现双向RSA + AES加密', author: '嫩草终结者', createTime: '2018-3-12 10:00:00'},
          {id: 4, title: '微信公众号开发（一）微信网址接入', author: 'wchenhua', createTime: '2018-3-12 10:00:00'},
          {id: 5, title: '你了解HTTP协议吗？？', author: 'itest_2016', createTime: '2018-3-12 10:00:00'},
          {id: 6, title: 'HTTP协议漫谈', author: 'ccpat', createTime: '2018-3-12 10:00:00'},
          {id: 7, title: 'HTTP协议漫谈', author: 'ccpat', createTime: '2018-3-12 10:00:00'},
          {id: 8, title: 'HTTP协议漫谈', author: 'ccpat', createTime: '2018-3-12 10:00:00'},
          {id: 9, title: 'HTTP协议漫谈', author: 'ccpat', createTime: '2018-3-12 10:00:00'},
          {id: 10, title: 'HTTP协议漫谈', author: 'ccpat', createTime: '2018-3-12 10:00:00'}
        ]
      }
    },
    mounted () {
      this.articleList = this.loadArticles(this.keyWord)
    }
  }
</script>
