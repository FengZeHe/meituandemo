<!--
 * @Author: your name
 * @Date: 2020-12-09 14:29:23
 * @LastEditTime: 2020-12-11 16:35:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /meituandemo/src/components/Content/ContentMenu.vue
-->
<template>
  <div class="wrapper">
    <h2>全部分类</h2>
    <div v-for="(list, index) in Navlist" :key="list + index" class="listitem">
      <dl>
        <!-- <i :class="list.icon"></i> -->
        <dt>
          {{ list.name }}
        </dt>
        <span> > </span>
        <div class="categoryitem">
          <h2>{{ list.name }}</h2>
          <dt
            v-for="(categories, index) in list.items"
            :key="categories + index"
          >
            <span
              class="nav-item"
              v-for="item in categories.items"
              :key="item"
              >{{ item }}</span
            >
          </dt>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  created() {
    api.getLeftNav().then((res) => {
      this.Navlist = res.data.data;
      // console.log(res.data.data);
    });
  },
  data() {
    return {
      MenuList: [
        {
          title: "美食",
          icon: "el-icon-fork-spoon",
          category: [
            "代金券",
            "甜点饮品",
            "火锅",
            "自助餐",
            "小吃快餐",
            "日韩料理",
            "西餐",
            "聚餐宴请",
            "烧烤烤肉",
            "东北菜",
            "川湘菜",
            "江浙菜",
            "香锅烤鱼",
            "粤港菜",
            "中式烧烤/烤串",
            "西北菜",
            "咖啡酒吧茶馆",
            "云贵菜",
            "东南亚菜",
            "海鲜",
            "素食",
            "台湾/客家菜",
            "创意菜",
            "汤/粥/炖菜",
            "蒙餐",
            "新疆菜",
            "其他美食",
            "京菜鲁菜",
          ],
        },
        {
          title: "外卖",
          icon: "el-icon-dish",
          category: ["美团外卖"],
        },
        {
          title: "酒店",
          icon: "el-icon-office-building",
          category: ["经济型", "舒适/三星", "高档/四星", "豪华/五星"],
        },
        {
          title: "民宿",
          icon: "el-icon-school",
          category: ["上海", "成都", "北京", "重庆", "南京", "杭州", "广州"],
        },
        {
          title: "猫眼电影",
          icon: "el-icon-video-camera-solid",
          category: [
            "如果声音不记得",
            "除暴",
            "赤狐书生",
            "隐形人",
            "一秒钟",
            "紧急救援",
            "疯狂原始人2",
            "哆啦A梦:大雄的新恐龙",
            "宝可梦：超梦的逆袭",
            "进化闺蜜心窍",
          ],
        },
      ],
      Navlist: [],
    };
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  position: relative;
  border: 1px solid #999;
  background-color: #fff;
  height: 500px;
  display: flex;
  flex-direction: column;

  .listitem:hover {
    background-color: #fff7ee;
    dt {
      font-weight: bold;
    }
    .categoryitem {
      display: block;

      .nav-item {
        color: #999;
      }
      .nav-item:hover {
        color: #fe9e3d;
        cursor: pointer;
      }
    }
  }

  h2 {
    font-size: 16px;
    margin-left: 10px;
    margin-bottom: 25px;
    margin-top: 10px;
  }

  i,
  dt {
    height: 20px;
    line-height: 20px;
    margin-left: 10px;
    position: relative;
    display: inline-block;
    font-size: 14px;
    margin-top: 5px;
    margin-bottom: 5px;
    cursor: pointer;
  }

  span {
    float: right;
    margin: 5px;
  }

  dd {
    margin-left: 10px;
    white-space: nowrap;
    display: inline-block;
    font-size: 12px;
    margin: 10px 5px 25px 10px;
    cursor: pointer;
    color: #999;
  }

  dd:hover {
    color: #fe9e3d;
  }

  .categoryitem {
    display: none;
    width: 400px;
    height: 400px;
    position: absolute;
    left: 235px;
    top: 0px;
    background-color: white;
    z-index: 996;
  }
}
</style>