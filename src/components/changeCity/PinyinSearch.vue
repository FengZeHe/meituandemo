
<template>
  <div class="wrapper">
    <dl>
      <dt>按拼音首字母选择:</dt>
      <dd v-for="letter in MyList" :key="letter">
        <a :href="'#city-' + letter">{{ letter }}</a>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      letterList: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    };
  },
  computed: {
    MyList() {
      return this.letterList.split("");
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  margin-top: 40px;
  width: 900px;
  position: relative;
  left: 50%;
  margin-left: -450px;
  padding-bottom: 40px;
  border-bottom: 1px solid #ccc;
  dl,
  dt,
  dd {
    display: inline-block;
  }

  dt {
    font-size: 18px;
  }
  dd {
    margin: 0 8px;
    cursor: pointer;

    a{
        text-decoration: none;
        color: black;
    }
  }
}
</style>