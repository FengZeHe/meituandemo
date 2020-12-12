
<template>
  <el-row :gutter="40">
    <el-col :span="12"
      ><div class="grid-content bg-purple">
        <div class="top-nav-left">
          <div>
            <i class="el-icon-location"></i>
            {{$store.state.location}}
          </div>
          <router-link tag="span" class="nav-router" to="/changecity"
            >切换城市
          </router-link>
          <span>[广州 顺德 佛山]</span>
          <router-link tag="span" to="/">立即登录</router-link>
          <router-link tag="span" to="/">注册</router-link>
        </div>
      </div></el-col
    >
    <el-col :span="12"
      ><div class="grid-content bg-purple">
        <div class="top-nav-right">
          <ul>
            <li>
              我的美团
              <dl>
                <dd>我的订单</dd>
                <dd>我的收藏</dd>
                <dd>抵用券</dd>
                <dd>用户设置</dd>
              </dl>
            </li>
            <li>手机APP</li>
            <li>
              商家中心
              <dl>
                <dd>美团餐饮商业中心</dd>
                <dd>登录商家中心</dd>
                <dd>美团智能收银</dd>
                <dd>我想合作</dd>
                <dd>手机免费开店</dd>
                <dd>餐饮代理商招募</dd>
                <dd>商家申请开票</dd>
                <dd>免费合作美团排队</dd>
              </dl>
            </li>
            <li>美团规则
                <dl>
                    <dd>规则中心</dd>
                    <dd>规则目录</dd>
                    <dd>规则众议院</dd>
                </dl>
            </li>
            <li>网站导航
                <dl class="nav-content">
                    <top-nav-content></top-nav-content>
                </dl>
            </li>
          </ul>
        </div>
      </div></el-col
    >
  </el-row>
</template>

<script>
import TopNavContent from '@/components/header/TopNavContent'
export default {
    components:{
        TopNavContent
    }
}
</script>

<style lang="less" scoped>
@oragne: #fe8c00;
.el-row {
  height: 50px;
  line-height: 50px;
  background-color: #F8F8F8;
  &:last-child {
    margin-bottom: 0;
  }
}

.top-nav-left,
.top-nav-right {
  font-size: 13px;
  display: flex;
  color: #999;

  span {
    margin: 0 10px;
    cursor: pointer;
  }

  span:hover {
    color: #fe8c00;
  }
}

.top-nav-right {
  float: right;
}

.top-nav-right li {
  display: inline-block;
  padding: 0 7px;
  margin: 0 10px;
  cursor: pointer;

  dl {
    text-align: center;
    position: absolute;
    display: none;

  }
}

.top-nav-right li:hover {
  background-color: white;
  color: #fe8c00;
  dl {
    color: #999;
    display: block;
    background-color: white;
  }
  dd:hover {
    color: #fe8c00;
  }
}

.nav-content{
    // border: 1px solid black;
    left: 50px;
    right: 30px;
    height: 350px;
    z-index:999
}
</style>
