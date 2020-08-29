<template>
  <div class="electrical_container">
       <div class="goodsList">
        <div class="item" v-for="(item) in electricalData" :key="item.id">
          <img  v-lazy = "item.img_url" alt />
          <div class="text">
            <div class="title">{{item.title}}</div>
            <div class="price">
              ¥{{item.sell_price}}
              <del>¥{{item.market_price}}</del>
            </div>
            <div class="count">
                <span>热卖中</span>
                <span>剩{{item.stock_quantity}}件</span>
            </div>
          </div>
        </div>
      </div>
      <button class="btn" @click = "getEleData">加载更多</button>

  </div>
</template>

<script>
import {getElectricalData} from "@/api/common.js";
import { Toast } from 'vant';
  export default {
      data(){
        return {
            electricalData:[],
            pageIndex:1
        }
      },
      methods:{
          async getEleData(){
            let res = await getElectricalData(this.pageIndex);
            // console.log(res);
            // this.electricalData = res.data.message;
            console.log(res.data.message.length);
            if(res.data.message.length == 0){
                Toast({
                  message: '以获取所有商品',
                  position: 'middle',
              });
              return;
            }
            res.data.message.forEach(ele => {
                  this.electricalData.push(ele);
            })
            this.pageIndex++;
          },
      },
      created(){
          this.getEleData();
      },
  }
</script>

<style lang="scss" scoped>
.electrical_container{
   background-color: rgb(238, 238, 238);

     .goodsList {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 4px 0px;
        background-color: rgb(238, 238, 238);
        box-sizing: border-box;

      .item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 46%;
        background-color: #fff;
        border-radius: 8px;
        overflow: hidden;
        margin: 5px 7px;
        box-sizing: border-box;

        img {
          width: 100%;
        }

        .text {
          padding-left: 5px;
          .title {
            font-size: 12px;
            color: #333;
          }

          .price {
            display: flex;
            // justify-content: space-between;
            align-content: center;
            font-size: 14px;
            color: red;
            padding: 5px 5px;
            padding-top: 10px;
            font-weight: 700;
            font-size: 16px;

            del{
                color: #565252;
                font-size: 12px;
                padding: 0px 20px;
            }

          }

          .count{
              display: flex;
              justify-content: space-between;

              span{
                  color: #565252;
                  font-size: 14px;
              }
          }
        }
      }
    }

    .btn{
        max-width: 750px;
        width: 100%;
        height: 50px;
        background-color: red;
        color: #fff;
        outline: 0px;
        border: 0px;
    }
}

</style>
