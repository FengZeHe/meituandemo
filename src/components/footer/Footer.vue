<!--
 * @Author: your name
 * @Date: 2020-12-09 09:42:00
 * @LastEditTime: 2020-12-09 10:10:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /meituandemo/src/components/footer/Footer.vue
-->
<template>
  <div class="footer">
    <div class="content">
      <dl>
        <dt>用户帮助</dt>
        <dd>申请退款</dd>
        <dd>常见问题</dd>
        <dd>用户协议</dd>
        <dd>隐私政策</dd>
        <dd>反诈骗公告</dd>
        <dd>消费者权益保障</dd>
      </dl>

      <dl>
        <dt>美团服务</dt>
        <dd>美团外卖</dd>
        <dd>美团酒店</dd>
        <dd>猫眼电影</dd>
        <dd>美团配送</dd>
        <dd>美团云</dd>
        <dd>大众点评</dd>
        <dd>美团民宿</dd>
        <dd>无人配送</dd>
      </dl>

      <dl>
        <dt>商家合作</dt>
        <dd>美团餐饮商户中心</dd>
        <dd>美食商家入驻(非外卖)</dd>
        <dd>美团外卖开店申请</dd>
        <dd>美团收银官网</dd>
        <dd>外卖配送加盟申请</dd>
        <dd>美团餐饮学院</dd>
        <dd>酒店商家入驻</dd>
        <dd>境内度假商家入驻</dd>
        <dd>综合商家入驻</dd>
        <dd>美团民宿房东商家入驻</dd>
        <dd>商家开票申请</dd>
      </dl>

      <dl>
        <dt>代理商加盟</dt>
        <dd>美团外卖代理商招募</dd>
        <dd>到店餐饮代理商招募</dd>
        <dd>非餐饮代理商招募</dd>
        <dd>美团联盟</dd>
        <dd>美团收银招募线上分销商</dd>
        <dd>美团5S服务商招募</dd>
        <dd>美团收单渠道代理商招募</dd>
      </dl>

      <dl>
        <dt>美团规则</dt>
        <dd>规则中心</dd>
        <dd>规则目录</dd>
        <dd>规则众议院</dd>
      </dl>

      <dl>
        <dt>关注美团</dt>
        <dd>美团新浪微博</dd>
      </dl>

      <dl>
        <dt>公司信息</dt>
        <dd>关于我们</dd>
        <dd>投资者关系</dd>
        <dd>加入我们</dd>
        <dd>商户诚信公约及管理办法</dd>
        <dd>保险经纪资质</dd>
      </dl>

      <dl>
        <dt>廉正举报</dt>
        <dd>廉正举报平台</dd>
      </dl>

      <dl>
        <dt>知识产权</dt>
        <dd>知识产权维护平台</dd>
      </dl>

      <dl>
        <dt>消费者服务热线</dt>
        <dd>外卖消费者：10109777</dd>
        <dd>猫眼消费者：10105335</dd>
        <dd>其他消费者：10107888</dd>
      </dl>

      <dl>
        <dt>商家服务热线</dt>
        <dd>外卖&餐饮商家：10105557</dd>
        <dd>休闲娱乐、丽人、ktv、教育、结婚、亲</dd>
        <dd>子、家装等商家：10100107 投诉举报专区</dd>
      </dl>

      <dl>
        <dt>投诉举报专区</dt>
        <dd>违法和不良信息举报电话：4006018900</dd>
        <dd>举报邮箱：tousujubao@meituan.com</dd>
        <dd>网上有害信息举报</dd>
      </dl>

      <dl>
          <dt>商家自助入驻美团入口</dt>
          <dt>供应商注册入口</dt>
      </dl>
    </div>
  </div>
</template>


<style lang='less' scoped>
.footer {
  width: 100%;
  height: 550px;
  display: flex;
  justify-content: center;

  .content {
    width: 70%;
    height: 550px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;


  }
  dl {
    margin: 10px 40px;

    dt {
      margin: 10px 0;
    }

    dd {
      font-size: 12px;
      color: #999;
      margin: 10px 0;
    }
  }
}
</style>