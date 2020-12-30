<!--  -->
<template>
  <div>
    <div class="list_box">
      <Header home="list"></Header>
      <crumbs class="crumbs_List" v-if="crumbs_List"></crumbs>
    </div>
    <div>
      <div class="columns">
        <aside>
          <div>电子书</div>
          <ul v-if="columns !== null" class="">
            <li v-for="item in columns" :key="item.id">
              {{item.name}}
              <ul v-if="item.showChild">
                <li v-for="childColumn in item.childs" :key="childColumn.id">{{childColumn.name}}</li>
              </ul>
            </li>
          </ul>
        </aside>
        
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import crumbs from "../components/crumbs.vue";
import {getList} from '@/util/util.js'

export default {
  components: {
    Header,
    crumbs,
  },
  data() {
    return {
      crumbs_List: [],
      columns:null
    };
  },
  methods: {
    getCatalog(){
      getList(this.columnIds.ebook).then(res=>{
        this.columns = res.data.group_info.childs.map(item=>{
          item.showChild = false
          return item
        })
        console.log(this.columns)
      })
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
ul,li{
  text-emphasis: none;
  list-style-type: none;
  margin:0;
  padding:0;
}
.columns{
  width: 1200px;
}
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
