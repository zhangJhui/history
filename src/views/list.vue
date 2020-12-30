<!--  -->
<template>
  <div class="list_box">
    <Header home="list"></Header>
    <crumbs class="crumbs_List" v-if="crumbs_List"></crumbs>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import crumbs from "../components/crumbs.vue";
import {getList} from '@/util/util.js'
console.log(getList)
export default {
  components: {
    Header,
    crumbs,
  },
  data() {
    return {
      crumbs_List: [],
    };
  },
  methods: {
    getCatalog(){
      console.log(this)
    }
  },
  created() {
    this.getCatalog()
  },
  mounted() {
    this.crumbs_List = this.$route.query;
  },
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
