<template>
  <div class="demo">
    <div class="magpie">
      <div class="magpie-tool">
        <ul>
          <li v-if="bold">
            <a @click="doBold"><i class="fa fa-bold" aria-hidden="true"></i></a>
          </li>
        </ul>
      </div>
      <div class="magpie-content" ref="content" contenteditable="true">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Magpie',
  props: {
    // 粗体
    bold: {
      type: Boolean,
      default: true
    }
    // 斜体
    // 下划线
    // H1
    // H2
    // H3
    // 对齐方式
    // 无序列表
    // 有序列表
    // 字体
    // 背景颜色
    // 超链接
    // 图片
    // 音频
    // 视频
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    doBold (val, flag) {
    }
  }
}
</script>

<style scoped lang="scss">
  .demo{
    padding: 20px 0;
    .magpie{
      margin: 0 auto;
      width: 800px;
      border-radius: 2px;
      border: 1px solid #ccc;
      .magpie-tool{
        line-height: 38px;
        min-height: 38px;
        padding: 0 12px;
        border-bottom: 1px solid #ccc;
        .ul {
          overflow: auto;
          .li{
            float: left;
            .a{
              cursor: pointer;
            }
          }
        }
      }
      .magpie-content{
        height: 500px;
        padding: 8px;
        outline: none;
      }
    }
  }
</style>
