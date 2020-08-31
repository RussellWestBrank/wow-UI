<template>
  <div>
    <g-input value="张三" disabled></g-input>
    <g-input value="李四" readonly></g-input>
    <g-input value="王五"></g-input>
    <g-input value="王" error="姓名不能少于两个字"></g-input>
    <div>
      <g-input v-model="message"></g-input>
      <p>{{message}}</p>
    </div>
  </div>

</template>
<script>
  import Input from '../../../src/input'

  export  default {
    components: {
      'g-input':Input
    },
    data(){
      return {
        message:'hi'
      }
    }
  }
</script>