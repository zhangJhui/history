<!--  -->
<template>
  <div class="list_box">
    <Header home="list"></Header>
    <crumbs class="crumbs_List" v-if="crumbs_List"></crumbs>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "../components/header.vue";
import crumbs from "../components/crumbs.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Header,
    crumbs,
  },
  data() {
    //这里存放数据
    return {
      crumbs_List: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
     console.log(this.$route); 
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    //   console.log(this.$route.query.crumbs_List)
    
    this.crumbs_List = this.$route.query;
    // this.crumbs_List.map((item) => {
    //   if (item.link == "") {
    //     item.link = "-1";
    //   }
    // });
    console.log(this.crumbs_List);
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
.list_box {
  background-image: url("../assets/images/shangchengbg@3x.png");
  background-size: cover;
  background-position: center 0;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 9;
}
.crumbs_List {
  position: absolute;
  z-index: 10;
  margin-top: 6.875rem /* 110/16 */;
}
</style>
