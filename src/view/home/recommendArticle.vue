<style>
  .test{
    background-image: none;
  }
</style>
<template>
  <div style="width: 706px">
    <el-row>
      <el-col :style="{backgroundImage: 'url('+topAd.img+')',backgroundSize:'cover', backgroundRepeat:'no-repeat'}">
        <a href="https://software.intel.com/zh-cn/videos/announcing-the-scalar-studiocloud-and-intel-partnership-at-siggraph-2017?utm_source=CSDN&utm_medium=cpc&utm_campaign=Game_PRC_18Q1">
          <img src="/static/ad/intel_ad.png"/>
        </a>
      </el-col>
    </el-row>
    <br>
    <el-row :gutter="5">
      <el-col :span="16">
        <el-carousel trigger="click" height="200px">
          <el-carousel-item v-for="item in adList" :key="item.value" :style="{backgroundImage: 'url('+item.img+')',backgroundSize:'cover', backgroundRepeat:'no-repeat'}">
            <!--<img :src="item.img"/>-->
            <div style="margin-top: 150px;">
              <a href="https://www.baidu.com" style="color: white;text-decoration: none">{{item.title}}</a>
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="8">
        <div v-for="item in rightAdList" :style="{height: '100px',backgroundImage: 'url('+item.img+')',backgroundSize:'cover', backgroundRepeat:'no-repeat'}">
          <a href="https://www.baidu.com" style="margin-top: 50px;color: white;text-decoration: none">{{item.title}}</a>
        </div>
      </el-col>
    </el-row>
    <el-row>最近有更新</el-row>
    <article-list></article-list>
  </div>
</template>
<script>
  import ArticleList from '../common/articleList.vue'
  import ElRow from 'element-ui/packages/row/src/row'

  export default {
    components: {
      ElRow,
      ArticleList },
    data () {
      return {
        img: '/static/ad/bta.jpg',
        topAd: { title: '广告', img: '/static/ad/intel_ad.png' },
        adList: [
          {value: 1, title: '2018区块链技术及应用峰会', img: '/static/ad/bta.jpg'},
          {value: 2, title: 'JAVA 10正式发布,时隔6月带来109项新特性', img: '/static/ad/java.jpg'},
          {value: 3, title: '机器学习大神迈克尔.乔丹:我讨厌讲机器学习称之为AI', img: '/static/ad/run.jpg'},
          {value: 4, title: '韭菜的报复or戏精的上身？315币圈"鹅厂黑客"碰瓷全记录', img: '/static/ad/crow.jpg'}],
        rightAdList: [
          {value: 1, title: '2017图灵将出炉,Google母公司董事长', img: '/static/ad/own.jpg'},
          {value: 2, title: '封杀抖音,微博在紧张什么', img: '/static/ad/douyin.jpg'}
        ]
      }
    }
  }
</script>
