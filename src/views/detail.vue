<!--  -->
<template>
  <div class="detail_box">
    <Header home="detail"></Header>
    <crumbs
      class="crumbs_List"
      v-if="crumbs_List"
      :DataList="crumbs_List"
    ></crumbs>
    <div>
      <el-card class="box_card" v-if="Detail.title != ''">
        <div
          class="box_card_img"
          :style="{backgroundImage:'url('+Detail.style.data[0].thumb+')'}"
        ></div>
        <div class="box_card_title">{{Detail.title}}</div>
        <div>作者：{{ Detail.author }}</div>
        <div class="box_card_date">上传时间：{{ Detail.publish_at_str }}</div>
        <div>内容简介：</div>
        <div>{{ Detail.summary }}</div>
        <div>
            <span>立即下载</span>
            <span>在线预览</span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "../components/header.vue";
import crumbs from "../components/crumbs.vue";
import { getDetail } from '../util/util'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Header,
    crumbs,
  },
  data() {
    //这里存放数据
    return {
      crumbs_List: JSON.parse(window.sessionStorage.getItem("crumbs_List")),
      Detail: {},
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
    let arr = JSON.parse(window.sessionStorage.getItem("crumbs_List"));
    arr = [
      {
        name: "e.data.name",
        link: "/diagram",
        id: 123,
      },
    ];
    window.sessionStorage.setItem("crumbs_List", JSON.stringify(arr));
    getDetail('AryPGcW1').then(res => {
        console.log(res)
        this.Detail = res.data
    })

  },
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
.detail_box {
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
.box_card {
  margin-top: 8.75rem /* 140/16 */;
  margin-left: 17%;
  width: 82%;
  overflow: hidden;
  &_img {
    width: 40%;
    height: 34.375rem /* 550/16 */;
    display: inline-block;
    background-size: 100% 100%;
    background-position:center 0 ;
    float: left;
    margin-right: 1.25rem /* 20/16 */;
    margin-bottom: 1.25rem /* 20/16 */;
  }
  &_title {
      font-size: 1.75rem /* 28/16 */;
      margin-bottom: .625rem /* 10/16 */;
  }
  &_date {
      margin: .625rem /* 10/16 */ 0;
  }
  :nth-child(5) {
      margin-bottom: .625rem /* 10/16 */;
  }
  :nth-child(7) {
      margin-top: 2.5rem /* 40/16 */;
      span {
          display: inline-block;
          width: 11rem /* 176/16 */;
          height: 3.8125rem /* 61/16 */;
          text-align: center;
          line-height: 4rem /* 64/16 */;
          font-size: 1.5rem /* 24/16 */;
          border-radius: .25rem /* 4/16 */;
      }
      >span:nth-child(1) {
          border: .0625rem /* 1/16 */ solid #009988;
          color: #009988;
          margin-right: 3.75rem /* 60/16 */;
      }
      >span:nth-child(2) {
          background: #009988;
          color: white;
      }
  }
}
</style>
