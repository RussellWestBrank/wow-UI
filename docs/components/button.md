---
title:Button
---
# Button

# 示例
<ClientOnly>
<button-demo></button-demo>
</ClientOnly>

# 代码
```vue
<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="settings">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>
    <g-button disabled>默认按钮</g-button>
    <g-button :loading="loading1" @click="loading1 = !loading1">
      默认按钮
    </g-button>
    <g-button icon="settings" :loading="loading2"
              @click="loading2 = !loading2">
      默认按钮
    </g-button>
    <g-button icon="settings" icon-position="right" :loading="loading3"
              @click="loading3 = !loading3">
      按钮
    </g-button>
    <g-button-group>
      <g-button icon="left">上一页</g-button>
      <g-button>更多</g-button>
      <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>
  </div>
  </div>
</template>

<script lang="ts">
  import {Button} from '@mosaic-huojing'
  import {Component, Vue} from "vue-property-decorator"  
  @Component({
    components: {Button}
  })
  export  default {
    data(){
      return {
        loading1:true,
        loading2:true
      }
  }
    }

</script>
```