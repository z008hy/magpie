<template>
  <div class="magpie">
    <div class="magpie-content" id="magpieContent" ref="magpieContent"></div>
  </div>
</template>

<script>
import Quill from 'quill'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import defaultOption from './defaultOption'

export default {
  name: 'Magpie',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      quill: {}
    }
  },
  computed: {
  },
  methods: {
    createQuill () {
      this.quill = new Quill(this.$refs.magpieContent, defaultOption)
      // 绑定事件
      this.quill.on('text-change', this.textChange)
    },
    textChange (delta, oldDelta, source) {
      const html = this.$refs.magpieContent.children[0].innerHTML
      this.$emit('input', html)
    }
  },
  mounted () {
    // 初始化Quill
    this.createQuill()
  }
}
</script>

<style scoped lang="scss">
    .magpie{
      border-radius: 2px;
      /*border: 1px solid #ccc;*/
      & > div{
        /*border-radius: 2px;*/
      }
    }
</style>
