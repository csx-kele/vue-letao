<template>
  <div class="home-container">
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="#ccc">
      <van-swipe-item v-for="(item) in lunboData" :key="item.img">
        <img :src="item.img" alt />
      </van-swipe-item>
    </van-swipe>

    <!-- 宫格部分 -->
    <van-grid :border="false" :column-num="4">
      <van-grid-item icon="photo-o" text="文字" to = "/electrical">
        <img src="../../assets/images/menu10.png" alt/>
        <div class="text">数码电器</div>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="文字" to="/newslist">
        <img src="../../assets/images/menu19.png" alt />
        <div class="text">乐淘头条</div>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="文字">
        <img src="../../assets/images/menu18.png" alt />
        <div class="text">美图欣赏</div>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="文字">
        <img src="../../assets/images/menu15.png" alt />
        <div class="text">乐淘服饰</div>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="文字">
        <img src="../../assets/images/menu12.png" alt />
        <div class="text">9.9元拼单</div>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="文字">
        <img src="../../assets/images/menu15.png" alt />
        <div class="text">乐淘服饰</div>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="文字">
        <img src="../../assets/images/menu16.png" alt />
        <div class="text">物流查询</div>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="文字">
        <img src="../../assets/images/menu17.png" alt />
        <div class="text">全部</div>
      </van-grid-item>
    </van-grid>

    <!-- 分割线 -->
    <div class="recommend">
      <van-divider
        :style="{ color: '#333', borderColor: '#545e6c', padding: '15px 16px', height:'5px',fontSize:'16px'}"
      >为你推荐</van-divider>

      <div class="goodsList">
        <div class="item" v-for="(item) in itemData" :key="item.img_url" @click = "goodsDec">
          <img v-lazy="item.img_url" alt />
          <div class="text">
            <div class="title">{{item.title}}</div>
            <div class="price">
              ¥{{item.sell_price}}
              <span class="buyed">{{item.buy}}人已购买</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { Swipe, SwipeItem, Grid, GridItem, Divider } from "vant";
import { getLunboData } from "@/api/common.js";
import { getItemData } from "@/api/common.js";
export default {
  data() {
    return {
      lunboData: [],
      itemData: [],
    }
  },
  methods: {
    async getLunbotuData () {
      // 获取轮播图数据
      let res = await getLunboData();
      // console.log(res);
      this.lunboData = res.data.message;
    },
    async getItemsData() {
      let res = await getItemData();
      // console.log(res);
      this.itemData = res.data.message;
    },
    //点击跳转商品详情页面
    goodsDec(){
        this.$router.replace('/goodsDec');
    }

  },
  components: {
    "van-swipe": Swipe,
    "van-swipe-item": SwipeItem,
    "van-grid": Grid,
    "van-grid-item": GridItem,
    "van-divider": Divider,
  },
  created() {
    this.getLunbotuData();
    this.getItemsData();
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  .van-swipe-item {
    height: 200px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .van-grid {
    background-color: #fff;
    .van-grid-item {
      padding: 8px 2px;
      img {
        width: 50%;
      }

      .text {
        color: #524949;
      }
    }
  }

  .recommend {
    background-color: rgb(238, 238, 238);
    box-sizing: border-box;

    // .van-divider{
    //     box-sizing: border-box;
    // }

    .goodsList {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 6px 10px;
      background-color: rgb(238, 238, 238);
      box-sizing: border-box;

      .item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 44%;
        background-color: #fff;
        border-radius: 6px;
        overflow: hidden;
        margin: 5px 10px;
        box-sizing: border-box;

        img {
          width: 100%;
        }

        .text {
          .title {
            font-size: 12px;
            color: #333;
          }

          .price {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            color: #f50;
            padding: 6px 5px;

            .buyed {
              font-size: 12px;
              color: #999;
            }
          }
        }
      }
    }
  }
}
</style>
