<!-- 首页 -->
<template>
  <div class="box">
    <Header home="home"></Header>
    <div class="logo">
      <img src="../assets/images/souyeLogo1.png" alt="" />
    </div>
    <div class="list">
      <ul>
        <li
          v-for="(value, index) in column_List"
          :key="index"
          @mouseover="imgChange(index)"
          @mouseout="changOut"
          @click="go_List(value.post_id, value.name)"
        >
          <div
            :style="{
              backgroundImage:
                active == index
                  ? 'url(' + value.img_Url2 + ')'
                  : 'url(' + value.img_Url1 + ')',
            }"
          ></div>
          <span :class="[active == index ? 'active' : '']">{{
            value.name
          }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "../components/header.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Header,
  },
  data() {
    //这里存放数据
    return {
      column_List: [
        {
          name: "电子书",
          post_id: "g3DjZdD0",
          img_Url1: require("../assets/images/dianzishu1.png"),
          img_Url2: require("../assets/images/dianzishu2.png"),
        },
        {
          name: "论文文章",
          post_id: "VnDMgE14",
          img_Url1: require("../assets/images/lunwen1.png"),
          img_Url2: require("../assets/images/lunwen2.png"),
        },
        {
          name: "纪录片",
          post_id: "Qz1zLOD2",
          img_Url1: require("../assets/images/jilupian1.png"),
          img_Url2: require("../assets/images/jilupian2.png"),
        },
        {
          name: "讲座视频",
          post_id: "WgD7Plkl",
          img_Url1: require("../assets/images/jiangzuo1.png"),
          img_Url2: require("../assets/images/jiangzuo2.png"),
        },
        {
          name: "历史照片",
          post_id: "7GDBoKkq",
          img_Url1: require("../assets/images/zhaopian1.png"),
          img_Url2: require("../assets/images/zhaopian2.png"),
          linkUrl:'fdaf'
        },
      ],
      active: undefined,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    imgChange(active) {
      this.active = active;
    },
    changOut() {
      this.active = undefined;
    },
    go_List(id, name) {
      if (name == "电子书") {
        let arr = JSON.parse(window.sessionStorage.getItem("crumbs_List"));
        arr[1] = {
          name,
          link: "/diagram",
          id,
        };
        window.sessionStorage.setItem("crumbs_List", JSON.stringify(arr));
        this.$router.push({
          path: "/diagram",
          query: {
            id,
            name,
          },
        });
      } else {
        let arr = JSON.parse(window.sessionStorage.getItem("crumbs_List"));
        arr[1] = {
          name: name,
          link: "",
          id: id,
        };
        window.sessionStorage.setItem("crumbs_List", JSON.stringify(arr));
        this.$router.push({
          path: "/diagram",
          query: {
            id,
            name,
          },
        });
      }
    },
  },
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
  background-image: url("../assets/images/shangchengbg@3x.png");
  background-size: cover;
  background-position: center 0;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 9;
}
.logo {
  text-align: center;
  margin-top: 11.5rem /* 184/16 */;
}
.list {
  ul li {
    display: inline-block;
    list-style: none;
  }
  ul {
    text-align: center;
    margin-top: 6.875rem /* 110/16 */;
  }
  li {
    color: #999999;
    font-size: 1.5rem /* 24/16 */;
    div {
      width: 16.25rem /* 260/16 */;
      height: 20rem /* 320/16 */;
      background-size: cover;
      margin-bottom: 0.625rem /* 10/16 */;
    }
    span {
      margin-left: -4.375rem /* 70/16 */;
    }
    .active {
      color: #00645c;
    }
  }
}
</style>
