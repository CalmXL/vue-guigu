<template>
  <div class="footer-guide">
    <span class='footer-item' :class="{on: $route.path === '/msite'}" @click="goto('/msite')">
      <span>
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </span>
    <span class='footer-item' :class="{on: $route.path === '/search'}" @click="goto('/search')">
      <span>
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </span>
    <span class='footer-item' :class="{on: $route.path === '/order'}" @click="goto('/order')">
      <span>
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </span>
    <span class='footer-item' :class="{on: $route.path === '/profile'}" @click="goto('/profile')">
      <span>
        <i class="iconfont icon-wode"></i>
      </span>
      <span>个人</span>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{}
    },
    methods: {
      goto(path){
        // 解决路由重复点击警告的问题 
        //  方案1: 判断路径 与 当前路径是都相等, 相等不调转
        if(path !== this.$route.path){
          this.$router.replace(path)
        }else{
          // 再次点击刷新页面
          window.location = path
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/styuls" >
  @import "../../common/stylus/mixins.styl"

  .footer-guide
    top-border-1px(hotpink)
    z-index 100
    display flex
    position fixed
    left 0
    bottom 0
    width 100%
    height 50px
    background #fff
    .footer-item
      display flex
      flex-direction column
      width 25%
      text-align center
      &.on
        color $green
      span
          margin-top 4px
          font-size 12px
        .iconfont
          font-size 22px
    
</style>
