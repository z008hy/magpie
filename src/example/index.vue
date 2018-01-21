<template>
  <div class="example">
    <magpie ref="magpie" v-model="data"></magpie>
    <div class="result">
      {{data}}
    </div>
  </div>
</template>

<script>
import Magpie from '../Magpie'
export default {
  components: {Magpie},
  data () {
    return {
      data: ''
    }
  }
}
</script>

<style scoped lang="scss">
  .example{
    margin: 0 auto;
    padding: 8px;
    .magpie{
      float: left;
      width: 50%;
    }
    .result{
      float: left;
      width: 50%;
    }
  }
</style>
