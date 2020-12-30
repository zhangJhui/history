<!-- 列表 -->
<template>
  <div class="diagram_box">
    <Header home="diagram"></Header>
    <crumbs class="crumbs_List"></crumbs>
    <div
      id="main-chart"
      style="width: 100%; height: 37.5rem /* 600/16 */"
      v-if="nodes && links"
    ></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "../components/header.vue";
import crumbs from "../components/crumbs.vue";
import { getList } from "../util/util.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Header,
    crumbs,
  },
  data() {
    //这里存放数据
    return {
      nodes: [],
      links: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    color(params) {
      var colorarrays = [
        "#ff5555",
        "#009988",
        "#7555ff",
        "#ffe955",
        "#2F9323",
        "#D9B63A",
        "#2E2AA4",
        "#9F2E61",
        "#4D670C",
        "#BF675F",
        "#1F814A",
        "#357F88",
        "#673509",
        "#310937",
        "#1B9637",
        "#F7393C",
      ];
      return colorarrays[params];
    },
    setOption: function() {
      // console.log(this.parent)
      let list = {
        nodes: this.nodes,
        links: this.links,
      };
      // console.log('nodes',list.nodes)
      // console.log(list.links);
      // console.log(list.nodes);
      let option = {
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            type: "graph",
            layout: "force",
            symbolSize: (value, params) => {
              switch (params.data.category) {
                case 0:
                  return 60;
                  break;
                case 1:
                  return 30;
                  break;
                case 2:
                  return 20;
                  break;
              }
            },
            roam: false, //鼠标缩放功能
            label: {
              show: true, //是否显示标签
            },
            focusNodeAdjacency: true, //鼠标移到节点上时突出显示结点以及邻节点和边
            edgeSymbol: ["circle", ""], //关系两边的展现形式，也即图中线两端的展现形式。arrow为箭头
            edgeSymbolSize: [4, 10],
            draggable: false,
            edgeLabel: {
              fontSize: 20, //关系（也即线）上的标签字体大小
            },
            force: {
              repulsion: 250,
              edgeLength: 200,
            },
            data: list.nodes,
            links: list.links,
            lineStyle: {
              opacity: 0.9,
              width: 2,
              curveness: 0,
            },
            lineStyle: {
              color: "source",
              curveness: 0.5,
            },
            emphasis: {
              lineStyle: {
                width: 5,
              },
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 1,
              shadowBlur: 10,
              shadowColor: "rgba(0, 0, 0, 0.3)",
            },
          },
        ],
      };
      return option;
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    let myChart = this.$echarts.init(document.getElementById("main-chart"));
    myChart.resize(); //自适应大小

    getList(this.columnIds.ebook).then((res) => {
      // console.log(res.data.group_info.childs);
      res.data.group_info.childs.map((item, index) => {
        item.category = 0;
        item.itemStyle = { color: this.color(index) };
        // console.log('父级',item)
        this.nodes.push(item);
        item.childs.map((citem) => {
          citem.category = 1;
          citem.itemStyle = { color: this.color(index) };
          citem.herf = "/list";
          // console.log({source:item.name,target:citem.name});
          this.nodes.push(citem);
          this.links.push({ source: item.id, target: citem.id });
        });
      });
      myChart.setOption(this.setOption());
      myChart.on("click", (e) => {
        // console.log(e)
        if (e.data.herf) {
          // console.log(this.$router)
          // console.log(this.$route.query.name)
          // console.log(e.data.id)
          let arr = JSON.parse(window.sessionStorage.getItem("crumbs_List"));
          arr[2] = {
            name:e.data.name,
            link: "/diagram",
            id:e.data.id,
          };
          window.sessionStorage.setItem("crumbs_List", JSON.stringify(arr));
          this.$router.push({
            path: e.data.herf,
            query: {
              id: e.data.id,
              name: this.$route.query.name,
            },
          });
        }
      });
    });
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
.diagram_box {
  background-image: url("../assets/images/shangchengbg@3x.png");
  background-size: cover;
  background-position: center 0;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 9;
}
#main-chart {
  margin-top: 6.25rem /* 100/16 */;
}
.crumbs_List {
  position: absolute;
  z-index: 10;
  margin-top: 6.875rem /* 110/16 */;
}
</style>
