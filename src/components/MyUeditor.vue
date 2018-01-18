<template>
  <div>
    <script id="ueditorContainer" name="content" type="text/plain"></script>
  </div>
</template>
<script>
export default {
  name: 'MyUeditor',
  data () {
    return {
      ueditor: null
    }
  },
  props: {
    value: {
      type: String,
      required: false,
      default: ''
    },
    config: {
      type: Object,
      required: false,
      default: () => {
        return {
          // toolbars: [
          //   ['fullscreen', 'source', 'undo', 'redo', 'bold']
          // ],
          // autoHeightEnabled: true,
          // autoFloatEnabled: true
        }
      }
    }
  },
  mounted () {
    const self = this
    this.ueditor = window.UE.getEditor('ueditorContainer', this.config)
    this.ueditor.ready(() => {
      this.ueditor.setContent(this.value)
    })
  },
  methods: {
    getUEContent (type) { // type值为html/text
      if (type === 'html') {
        return this.ueditor.getContent()
      } else if (type === 'text') {
        return this.ueditor.getContentTxt()
      } else {
        return 'getUEContent方法参数type格式不正确'
      }
    }
  },
  destroyed () {
    this.ueditor.destroy()
  }
}
</script>
