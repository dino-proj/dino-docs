<!--
 Copyright 2023 dinosdev.cn.
 SPDX-License-Identifier: Apache-2.0
-->

# 配置
在使用dino-vue3-core前，需要对其进行配置

在main.ts中添加如下代码，来配置dino-vue3-core

## 第一步：配置全局消息【可选】
详细参见[全局消息](./message.md)
```ts
import { setupMessage } from '@dino-dev/vue3-core'

// 以Element Plus的message为例

import { ElMessage } from 'element-plus'

setupMessage({
  messageHandler: {
    success: (msg: string, options?: any):void => {
      ElMessage.success(msg)
    },
    info: (msg: string, options?: any):void => {
      ElMessage.info(msg)
    },
    warning: (msg: string, options?: any):void => {
      ElMessage.warning(msg)
    },
    error: (msg: string, options?: any):void => {
      ElMessage.error(msg)
    }
  }
})

```
