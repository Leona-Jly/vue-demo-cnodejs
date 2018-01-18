<template>
  <div>
    <myHeader></myHeader>
    <div>
      <h2 v-text="content.title"></h2>
      <p>作者：{{content.author && content.author.loginname}} 发表于：{{$utils.formatTime(content.create_at)}}</p>
      <!-- <p>作者：{{loginname}} 发表于：{{$utils.formatTime(content.create_at)}}</p> -->
      <hr>
      <article v-html="content.content"></article>
      <h3>网友回复：</h3>
      <ul>
        <li v-for="item in content.replies" :key="item.id">
          <p>评论者：{{item.author.loginname}} 评论于：{{$utils.formatTime(item.create_at)}}</p>
          <article v-html="item.content"></article>
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
      id: this.$route.params.id,
      content: {},
      loginname: ''
    }
  },
  components: { MyHeader, MyFooter },
  created () {
    // this.getData()
  },
  methods: {
    getData () {
      this.$api.get(`topic/${this.id}`, null, res => {
        console.log(res)
        this.content = res.data
        this.loginname = res.data.loginname
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getData()
    })
  }
}
</script>
