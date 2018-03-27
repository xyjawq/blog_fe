
import Home from '../view/home/home.vue'
import RecommendArticle from '../view/home/recommendArticle.vue'
import ArticleList from '../view/home/groupArticle.vue'

export default {
  path: 'home',
  name: 'home',
  component: Home,
  meta: {title: '首页'},
  redirect: {name: 'recommend'},
  children: [
    {
      path: 'recommend', name: 'recommend', component: RecommendArticle, meta: {title: '推荐'}
    },
    {
      path: 'newarticles', name: 'newarticles', component: ArticleList, meta: {title: '最新文章'}
    },
    {
      path: 'watchers', name: 'watchers', component: ArticleList, meta: {title: '关注'}
    },
    {
      path: 'news', name: 'news', component: ArticleList, meta: {title: '资讯'}
    },
    {
      path: 'ai', name: 'ai', component: ArticleList, meta: {title: '人工智能'}
    },
    {
      path: 'cloud', name: 'cloud', component: ArticleList, meta: {title: '云计算/大数据'}
    },
    {
      path: 'blockchain', name: 'blockchain', component: ArticleList, meta: {title: '区块链'}
    },
    {
      path: 'db', name: 'db', component: ArticleList, meta: {title: '数据库'}
    },
    {
      path: 'career', name: 'career', component: ArticleList, meta: {title: '程序人生'}
    },
    {
      path: 'game', name: 'game', component: ArticleList, meta: {title: '游戏开发'}
    },
    {
      path: 'engineering', name: 'engineering', component: ArticleList, meta: {title: '研发管理'}
    },
    {
      path: 'web', name: 'web', component: ArticleList, meta: {title: '前端'}
    },
    {
      path: 'mobile', name: 'mobile', component: ArticleList, meta: {title: '移动开发'}
    },
    {
      path: 'iot', name: 'iot', component: ArticleList, meta: {title: '物联网'}
    },
    {
      path: 'ops', name: 'ops', component: ArticleList, meta: {title: '运维'}
    },
    {
      path: 'fund', name: 'fund', component: ArticleList, meta: {title: '计算机基础'}
    },
    {
      path: 'lang', name: 'lang', component: ArticleList, meta: {title: '编程语言'}
    },
    {
      path: 'arch', name: 'arch', component: ArticleList, meta: {title: '架构'}
    },
    {
      path: 'avi', name: 'avi', component: ArticleList, meta: {title: '音视频开发'}
    },
    {
      path: 'sec', name: 'sec', component: ArticleList, meta: {title: '安全'}
    },
    {
      path: 'other', name: 'other', component: ArticleList, meta: {title: '其他'}
    }
  ]}
