<!--  -->
<template>
  <div class="crumbs">
    <div v-for="(value, index) in DataList" :key="index" class="crunmbs_box">
      <div class="block" v-if="value.name"></div>
      <span @click="go_link(value.link, index)">{{ value.name }}</span>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props:{
    DataList:Array
  },
  data() {
    //这里存放数据
    return {
      // DataList: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  //方法集合
  methods: {
    go_link(url, index) {
      let arr = JSON.parse(window.sessionStorage.getItem("crumbs_List"));
      arr.splice(index+1)
      window.sessionStorage.setItem("crumbs_List", JSON.stringify(arr));
      console.log(arr);

      // if (url != "") {
      //   window.location.href = url;
      // }
      // if (url == "-1") {
      //   window.history.go(-1);
      // }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.DataList = JSON.parse(window.sessionStorage.getItem("crumbs_List"));
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.crumbs {
  margin-left: 12.5rem /* 200/16 */;
}
.crunmbs_box {
  display: inline-block;
  margin-right: 0.5rem /* 8/16 */;
}
.block {
  width: 0.25rem /* 4/16 */;
  height: 0.25rem /* 4/16 */;
  background: #009988;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.5rem /* 8/16 */;
}
span {
  color: #009988;
}
span:hover {
  cursor: pointer;
  color: #663366;
}
</style>
