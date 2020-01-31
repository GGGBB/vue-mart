<template>
  <div class="home">
    <!-- 轮播图 -->
    <cube-slide :data="slider" :interval="5000">
      <cube-slide-item v-for="(item, index) in slider" :key="index">
        <router-link :to="`/detail/${item.id}`">
          <img class="slider" :src="item.img">
        </router-link>
      </cube-slide-item>
    </cube-slide>

    <!-- 商品列表 -->
    <good-list :data="goods"></good-list>
  </div>
</template>

<script>
import gs from '@/service/goods'
import GoodList from '@/components/GoodList.vue'

export default {
  name: 'home',
  components: {
    GoodList
  },
  data () {
    return {
      goodsInfo: {},
      keys: [],
      slider: []
    }
  },
  created () {
    // this.$store.dispatch('userInfo').then(data => {
    //   if (data) {
    //     console.log(data)
    //   }
    // })
    gs.getGoodsInfo().then(data => {
      if (data) {
        const { goodsInfo, slider, keys } = data
        this.goodsInfo = goodsInfo
        this.keys = keys
        this.slider = slider
      }
    })
  },
  computed: {
    goods () {
      return this.keys.flatMap(key => this.goodsInfo[key])
    }
  }

}
</script>

<style lang="stylus" scoped>
.cube-slide {
  height: auto;
}

.cube-slide-item > a > img {
  width: 100%;
  height: auto;
}
</style>
