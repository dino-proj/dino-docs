<!--
 Copyright 2023 dinosdev.cn.
 SPDX-License-Identifier: Apache-2.0
-->

# 快速开始
在使用dino-vue3-core前，需要对其进行配置

## 引入dino-vue3-core包
```shell
npm install  @dino-dev/vue3-core
# OR
yarn add @dino-dev/vue3-core

```

## 第一步：配置全局消息【可选】
详细参见[配置消息](./message.md)

在main.ts中添加如下代码：
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

## 第二步：配置Api请求
详细参见[配置Api](./request.md)

在main.ts中添加如下代码：
```ts
import { setupApi } from '@dino-dev/vue3-core'

// 以axios为例
import { axiosRequestProvider } from '@dino-dev/vue3-core/axios'

setupApi({
  // 配置网络请求
  requestProvider: axiosRequestProvider,

  // 配置API请求，详细参数参见`ApiConfig`模块
  config: {
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    // ...
  }
})
```
