
<style lang="less" scoped>
  .container{
    width: 1000px;
    margin: auto;

    .el-aside{
      padding: 0px;
      .el-menu{
        .el-menu-item{
          height: 32px;
          line-height: 32px;
          &:hover{

          }
        }
      }
    }
  }
</style>

<template>
  <div class="container">
    <el-container>
      <el-aside width="100px">
        <el-menu @select="selectGroup" :default-active="groups[0].name">
          <el-menu-item :index="item.name"  style="padding:0" v-for="item in groups" :key="item.name">{{item.meta.title}}</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-aside width="200px"> 推荐 </el-aside>
    </el-container>
  </div>
</template>

<script>
  import home from '../../router/home'

  export default{
    data () {
      return {
        groups: home.children
      }
    },
    methods: {
      selectGroup (index) {
        this.$router.push({name: index})
      }
    }
  }
</script>
