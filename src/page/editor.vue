<template>
  <div>
    <MyUeditor :value="initValue" :config="editorConfig" ref="editor"></MyUeditor>
    <input type="button" value="show content in console" @click="getContent">
    <div v-html="contentCopy"></div>
  </div>
</template>
<script>
import MyUeditor from '@/components/MyUeditor'
export default {
  data () {
    return {
      initValue: '',
      editorConfig: {
        toolbars: [
          [
            'undo', // 撤销
            'bold', // 加粗
            'indent', // 首行缩进
            'italic', // 斜体
            'underline', // 下划线
            'strikethrough', // 删除线
            'formatmatch', // 格式刷
            'pasteplain', // 纯文本粘贴模式
            'preview', // 预览
            'removeformat', // 清除格式
            'unlink', // 取消链接
            'fontfamily', // 字体
            'fontsize', // 字号
            'paragraph', // 段落格式
            'simpleupload', // 单图上传
            'insertimage', // 多图上传
            'justifyleft', // 居左对齐
            'justifyright', // 居右对齐
            'justifycenter', // 居中对齐
            'justifyjustify', // 两端对齐
            'forecolor', // 字体颜色
            'backcolor', // 背景色
            'fullscreen' // 全屏
          ]
        ],
        allowDivTransToP: false, // {Boolean} 默认会将外部进入的html数据中的Div标签转换成P标签，外部进入的数据包括粘贴和调用setContent接口进入编辑器的数据。如果设置成false将不在做这个转换。
        // indentValue: '2em', // {String} [默认值：'2em'] //首行缩进距离，默认是2em
        autoClearEmptyNode: false, // {Boolean} [默认值：true] //getContent时，是否删除空的inlineElement节点（包括嵌套的情况）
        enableAutoSave: false, // {Boolean} [默认值：true] //启用自动保存
        retainOnlyLabelPasted: true, // {Boolean} [默认值：false] //粘贴只保留标签，去除标签所有属性
        pasteplain: true, // {Boolean} [默认值：false] //是否默认为纯文本粘贴。false为不使用纯文本粘贴，true为使用纯文本粘贴
        elementPathEnabled: false, // {Boolean} [默认值：true] //是否启用元素路径，默认是显示
        // allHtmlEnabled: true, // [默认值：false] //提交到后台的数据是否包含整个html字符串
        maximumWords: 20000 // {Number} [默认值：10000] //允许的最大字符数
      },
      contentCopy: ''
    }
  },
  components: { MyUeditor },
  methods: {
    getContent () {
      // console.log(this.$refs.editor)
      this.contentCopy = this.$refs.editor.getUEContent('html')
      console.log(this.contentCopy)
    }
  }
}
</script>
