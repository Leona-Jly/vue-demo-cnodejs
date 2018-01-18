<template>
  <div>
    <myHeader></myHeader>
    <div>
      <ul>
        <li class="topic-list" v-for="item in dataList" :key="item.id">
          <span v-text="$utils.formatTime(item.create_at)"></span>
          <router-link :to="`/content/${item.id}`">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
    <myFooter></myFooter>
  </div>
</template>
<script>
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'

export default{
  data () {
    return {
      dataList: []
    }
  },
  components: { MyHeader, MyFooter },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('topics', null, res => {
        console.log(res)
        this.dataList = res.data
      })
    }
  }
}
</script>
