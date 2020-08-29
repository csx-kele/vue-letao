<template>
  <div id="app">
    <!-- 头部布局 -->
    <!-- 首页头部布局 -->
    <!-- v-if= "isFlag" -->
    <van-sticky>
        <div class="header" style="max-width: 750px; margin: 0 auto;">
            <img src="./assets/images/logo.png" alt />
            <van-search placeholder="请输入搜索关键词" />
        </div>
    </van-sticky>

    <!-- 其他页面部头布局 -->
     <!-- <van-sticky>
        <div class="header1">
          <van-nav-bar title="" left-text="返回" left-arrow></van-nav-bar>
        </div>
    </van-sticky> -->

    <!-- 中间布局 -->
    <router-view></router-view>

    <!-- 底部布局 -->
    <van-sticky>
      <div class="tab_bar">
        <van-tabbar v-model="active">
          <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
          <van-tabbar-item icon="cart-o" badge="5" to="/mycar">购物车</van-tabbar-item>
          <van-tabbar-item icon="user-o" to="user">我的乐淘</van-tabbar-item>
        </van-tabbar>
      </div>
    </van-sticky>

  </div>
</template>

<script>
import { Search, Tabbar, TabbarItem, Icon, Sticky,NavBar } from "vant";
export default {
  data() {
    return {
      active: 0,
      // isFlag: true
    };
  },
  //监听路由的变化
  // watch:{
  //   $route(to,from){
  //     console.log(from.path);
  //     console.log(to.path);
  //     //判断路径
  //     if(to.path == '/home'){
  //         this.isFlag = true;
  //         console.log(this.isFlag);
  //     }else {
  //       this.isFlag = false;
  //     }
  //   }
  // },
  components: {
    "van-search": Search,
    "van-tabbar": Tabbar,
    "van-tabbar-item": TabbarItem,
    "van-sticky": Sticky,
    "van-nav-bar":NavBar,
  },
};
</script>

<style lang="scss" scoped>
#app {
  min-width: 320px;
  max-width: 750px;
  // background-color: rgb(238, 238, 238);
  padding-bottom: 50px;
  margin: 0 auto;

    // .van-sticky--fixed{
    //     max-width: 750px;
    //     margin: 0 auto;
        .header {
            display: flex;
            padding: 0px 2px;
            background-color: #fff;

            img {
            height: 44px;
            }
            .van-search {
            flex: 1;
            }
        }
    // }

}
</style>
