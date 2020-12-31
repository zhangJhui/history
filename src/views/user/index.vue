<!--  -->
<template>
  <div class="box">
    <Header home="index"></Header>
    <el-row :span='22' class="crad_box">
      <el-col :span='6' :offset="2">
        <el-card class="user_card">
          <div class="user_card_img"></div>
        </el-card>
      </el-col>
      <el-col :span='14' :offset="1">
        <el-card class="info_card">
          asd
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "../../components/header.vue";
export default {
  //import引入的组件需要注入到对象中才能使用

  components: {
    Header,
  },
  data() {
    //这里存放数据
    return {
      user:{
        alias:'一身军绿色',
        avatar:require("../../assets/images/denglu.png"),
        autograph:''
      }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
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
.box {
  background-image: url("../../assets/images/shangchengbg@3x.png");
  background-size: cover;
  background-position: center 0;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 9;
}
.crad_box {
    margin-top: 6.875rem /* 110/16 */;
  > div {
    display: inline-block;
  }
}
.user_card {
  display: inline-block;
  width: 100%;
  &_img {
    width: 6rem /* 96/16 */;
    height: 6rem /* 96/16 */;
  }
}
.info_card {
  display: inline-block;
  width: 100%;
}
</style>
