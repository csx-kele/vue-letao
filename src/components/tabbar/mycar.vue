<template>
  <div class="car-container">
      <div class="goodsList"></div>
      <div class="empty">
          <h3>
               亲，您的购物车为空，去
              <a href="#/home">首页</a>
              逛逛吧!
              <div>
                  <img src="../../assets/images/car.png" alt="">
              </div>
          </h3>
      </div>

  </div>
</template>

<script>
  export default {
        // created(){
        //   console.log( this.$parent.isFlag);
        // },

  }
</script>

<style lang="scss" scoped>
    .car-container{
        background-color: rgb(238, 238, 238);

        .empty{
            padding: 20px 0px;
            h3{
                text-align: center;
                color: #333;
                font-size: 18px;
            }
        }
    }
</style>
