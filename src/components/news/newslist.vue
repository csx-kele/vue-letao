<template>
  <div class="newslist_container">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="newItem" v-for="(item) in newsData" :key="item.id">
        <div class="img_container">
          <img :src="item.img_url" alt="">
        </div>
        <div class="info">
          <div class="title">{{item.title}}</div>
          <div class="time">
              <span>发布时间:{{item.add_time | dateFormat("YYYY-MM-DD")}}</span>
              <span>点击: {{item.click}} 次</span>
          </div>
        </div>
      </div>
  </van-pull-refresh>
  <van-button type="info" loading-text="加载中..." @click = "loadMore" v-show = "isShow" block >加载更多</van-button>
  </div>
</template>

<script>
import {getNewsList} from "@/api/common.js";
import { PullRefresh,Toast,Button } from 'vant';
export default {
  data(){
    return {
      newsData:[],
      isLoading:false,
      page:1,
      pageSize:10,
      isShow: true
    }
  },
  methods:{
    async getNewsData(){
        let res = await getNewsList(this.page,this.pageSize);
        // this.newsData = res.data.message;
        //说明没有更多的数据
        if(res.data.message.length == 0){
              Toast('没有更多数据了');
              return;
        }
        this.newsData = this.newsData.concat(res.data.message);
        this.page++;
    },
    onRefresh(){
      //将加载更多按钮隐藏
      // this.isShow = false;
      setTimeout(() => {
        Toast('刷新成功');
        if(this.isLoading == true){
            this.newsData = [];
            this.page = 1;
            this.getNewsData();
        }
        // this.isShow = true;
        this.isLoading = false;
      }, 1000);
    },
    loadMore(){
        this.getNewsData();
    }
  },
  created(){
      this.getNewsData();
  },
  components:{
      "van-pull-refresh":PullRefresh,
      "van-button":Button
  }
};
</script>

<style lang="scss" scoped>
.newslist_container{
    background-color: rgb(238, 238, 238);

    .newItem{
      display: flex;
      // justify-content: space-between;
      overflow: hidden;
      height: 104px;
      border-bottom: 1px solid #ccc;

      .img_container{
          img{
            width: 104px;
            height: 100%;
          }
      }

      .info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 21px 2px;

        .title{
          color: #000;
          font-size: 13px;
          font-weight: 700;

          //设置文本超出两行显示省略号
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }

        .time{
            display: flex;
            justify-content: space-between;

            span{
              color: #999;
              font-size: 12px;
            }
        }
      }
    }
}

</style>
