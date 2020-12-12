<!--
 * @Author: your name
 * @Date: 2020-12-10 11:03:16
 * @LastEditTime: 2020-12-10 11:36:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /meituandemo/src/components/Content/ContentOther.vue
-->
<template>
  <div class="wrapper">
    <span class="content-nav">
      <dl>
        <dt>{{ nav.title }}</dt>
        <dd v-for="kind in nav.list" :key="kind">{{ kind }}</dd>
        <span>全部> </span>
      </dl>
    </span>

    <div class="content">
      <el-row>
        <el-col :span="8" v-for="(item, index) in room" :key="item + index">
          <el-card :body-style="{ padding: '0px' }" class="content-item">
            <img :src="item.img" class="image pic" />
            <div style="padding: 14px">
              <p class="title">{{ item.title }}</p>
              <p class="detail">{{ item.detail }}</p>
              <p class="price">￥ {{ item.price }}</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>



<script>
export default {
  props: ["nav"],
  data() {
    return {
      room: [
        {
          title: "白云机场·美丽雅居·嘉豪双床房|24小时",
          detail: "整套1居室·可住2人 | 新白云国际机场",
          price: 98,
          img:
            "http://p0.meituan.net/iphoenix/dbc3b0852d53e71962cdca35b3a07c41228926.jpg@740w_416h_1e_1c",
        },
        {
          title: "白云机场·24小时免费接机 特殊",
          detail: "整套1居室·可住2人 | 新白云国际机场",
          price: 131,
          img:
            "http://p0.meituan.net/iphoenix/92326b05ad556de12d2a099e438bce645465771.jpg@740w_416h_1e_1c",
        },
        {
          title: "24小时免费接机INS风格",
          detail: "整套1居室·可住2人 | 新白云国际机场",
          price: 198,
          img:
            "https://img.meituan.net/iphoenix/7e5a997ee30a108a625fa50204a921eb196689.jpg@740w_416h_1e_1c",
        },
        {
          title: "千禧公寓 奥园落地窗 大床房",
          detail: "整套1居室·可住2人 | 新白云国际机场",
          price: 228,
          img:
            "https://img.meituan.net/phoenix/7e39ddd4e79f41097f93a09f930890b63309145.jpg@740w_416h_1e_1c",
        },
        {
          title: "特水大床房|晚上22点至早上3点免费接打飞机",
          detail: "整套1居室·可住2人 | 新白云国际机场",
          price: 228,
          img:
            "http://p0.meituan.net/iphoenix/431a38f9be02facaa1c559a5b7a905eb3424107.jpg@740w_416h_1e_1c",
        },
        {
          title: "叙利亚风格房间",
          detail: "床都没有",
          price: 91,
          img:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2998293491,2907340532&fm=26&gp=0.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  margin-top: 20px;
  position: relative;
  width: 1050px;
  height: 350px;
  left: 50%;
  margin-left: -525px;
}
.content-nav {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #f2c247;
  height: 40px;
  line-height: 40px;
  display: block;
  span {
    float: right;
    margin-right: 10px;
    color: white;
  }
}

dt,
dd {
  display: inline-block;
  color: white;
  margin: 0 20px;
}

.pic {
  width: 350px;
  height: 200px;
}

.content-item {
  margin: 5px;
  cursor: pointer;
  .title {
    font-size: 16px;
    white-space: nowrap;
    margin-bottom: 5px;
  }

  .detail {
    font-size: 14px;
    color: #ccc;
    margin: 10px 0px;
  }
  .price {
    color: #ff6601;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>