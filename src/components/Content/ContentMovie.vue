<!--
 * @Author: your name
 * @Date: 2020-12-09 21:03:57
 * @LastEditTime: 2020-12-10 11:02:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /meituandemo/src/components/Content/ContentMovie.vue
-->

<template>
  <div class="wrapper">
    <span class="movie-nav">
      <dl>
        <dt>{{ nav.title }}</dt>
        <dd v-for="kind in nav.list" :key="kind">{{ kind }}</dd>
        <span>全部> </span>
      </dl>
    </span>
    <div class="btn left-btn" @click="handleMove('toleft')">
      <i class="el-icon-arrow-left"></i>
    </div>
    <div class="btn right-btn" @click="handleMove('toright')">
      <i class="el-icon-arrow-right"></i>
    </div>
    <div class="movie-content">
      <span
        v-for="(movie, index) in hitMovie"
        :key="movie + index"
        class="items"
      >
        <img :src="movie.img" alt="" />
      </span>
    </div>
  </div>
</template>


<script>
export default {
  props: ["nav"],
  data() {
    return {
      hitMovie: [
        {
          title: "紧急救援",
          point: 8,
          img:
            "https://p0.meituan.net/moviemachine/70be7bb482b0edc1c74f93e02d95a88a3068051.jpg@214w_297h_1e_1c",
        },
        {
          title: "除暴",
          point: 8.6,
          img:
            "https://p1.meituan.net/movie/38dd31a0e1b18e1b00aeb2170c5a65b13885486.jpg@214w_297h_1e_1c",
        },
        {
          title: "疯狂原始人",
          point: 9.1,
          img:
            "https://p0.meituan.net/moviemachine/6fb1855f663f9856bfc47b7d013e0474651230.jpg@214w_297h_1e_1c",
        },
        {
          title: "隐形人",
          point: 7,
          img:
            "https://p0.meituan.net/moviemachine/7c4ba9633635503044a8f8fb6426aa8d416264.jpg@214w_297h_1e_1c",
        },
        {
          title: "一秒钟",
          point: 8,
          img:
            "https://p1.meituan.net/movie/13cb85d810b0530b951625430c2f35044951112.jpg@214w_297h_1e_1c",
        },
        {
          title: "多啦A梦",
          point: 8,
          img:
            "https://p1.meituan.net/movie/f9f90625d902e3bfb75688037a2476f83410480.jpg@214w_297h_1e_1c",
        },
      ],
    };
  },
  methods: {
    handleMove(type) {
      var moviecontent = document.querySelector(".movie-content");
      // console.log(moviecontent.style.left, moviecontent.offsetLeft, type);
      if (type == "toleft") {
        moviecontent.style.left = moviecontent.offsetLeft + 215 + "px";
        console.log(moviecontent.style.left);
      } else {
        moviecontent.style.left = moviecontent.offsetLeft - 215 + "px";
        console.log(moviecontent.style.left);
      }
    },
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
  overflow: hidden;

  .movie-nav {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #fb3e60;
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


  .btn {
    width: 25px;
    height: 25px;
    text-align: center;
    // border: 1px solid black;
    position: absolute;
    background-color: white;
    line-height: 25px;
    border-radius: 50%;
    opacity: 0;
    z-index: 999;
    cursor: pointer;
  }

  .left-btn {
    top: 50%;
  }

  .right-btn {
    top: 50%;
    right: 10px;
  }

  .movie-content {
    position: absolute;
    width: 1500px;
    height: 330px;
    // border: 1px solid red;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    transition: all 0.3s;

    .items {
      // border: 1px solid #ccc;
      border-radius: 10px;
      width: 214px;
      height: 310px;
      border-radius: 5px;
      margin: 2px 5px;
    }
  }
}
.wrapper:hover {
  .btn {
    opacity: 0.7;
  }
}
</style>