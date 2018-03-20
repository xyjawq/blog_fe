<style lang="less" scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 50px;

    a{
      color: #515151;
      text-decoration: none;
      &:hover{
          color: #c92027;
        }
    }
  }
</style>

<template>
  <el-container style="height: 1000px; border: 1px solid #eee">
    <el-header style="font-size: 12px;" height="50px">
      <el-row type="flex" justify="space-between">
        <el-col :md="14" :lg="12" :xl="10" style="text-align: left;">
          <el-row type="flex" justify="space-around">
            <el-col> <a href="#">博客</a> </el-col>
            <el-col> <a href="#">学院</a> </el-col>
            <el-col> <a href="#">下载</a> </el-col>
            <el-col> <a href="">GitChat</a> </el-col>
            <el-col> <a href="">论坛</a> </el-col>
            <el-col> <a href="">问答</a> </el-col>
            <el-col> <a href="">商城</a> </el-col>
            <el-col> <a href="">VIP</a> </el-col>
            <el-col> <a href="">活动</a> </el-col>
            <el-col> <a href="">招聘</a> </el-col>
            <el-col> <a href="">ITeye</a> </el-col>
            <el-col> <a href="">码云</a> </el-col>
            <el-col> <a href="">CSTO</a> </el-col>
          </el-row>
        </el-col>
        <el-col :md="8" :lg="5" style="text-align: right">
          <el-row type="flex" justify="space-around">
            <el-col>
              <el-input v-model="q.queryText" clearable suffix-icon="el-icon-search" size="small" style="width: 160px"></el-input>
            </el-col>
            <el-col> <span>写博客</span> </el-col>
            <el-col> <span>发Chat</span> </el-col>
            <el-col> <span>王小虎</span> </el-col>
          </el-row>
        </el-col>

      </el-row>
    </el-header>
    <el-main style="background-color: #f5f6f7">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
  import ElRow from 'element-ui/packages/row/src/row'
  export default {
    components: {ElRow},
    data () {
      return {
        q: {
          queryText: ''
        }
      }
    }
  }
</script>
