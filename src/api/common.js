

import instance from './config.js';

//暴露获取轮播数据的函数
export async function getLunboData(){
    return await instance.get('/getlunbo');
}

//获取推荐商品的数据
export async function getItemData(){
    return await instance.get('/recommend?limit=6');
}

//获取商品列表数据
export async function getNewsList(page,pageSize){
    return await instance.get(`/getnewslist?page=${page}&pageSize=${pageSize}`);
}

//获取数码电商数据
export async function getElectricalData(pageIndex){
  return await instance.get(`/getgoods?pageindex=${pageIndex}`);
}

//获取商品信息数据
export async function getGoodsDecData(id){
    return await instance.get(`/getgoodsinfo/:${id}`);
}


