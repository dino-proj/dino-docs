<!--
 Copyright 2023 dinosdev.cn.
 SPDX-License-Identifier: Apache-2.0
-->


# 配置Message
Message用于处理消息提示，需要在使用dino-vue3-core前进行配置，如网络请求失败时，需要提示用户网络请求失败。

## setupMessage

MessageHandler类型定义

- **Type**
```ts
import { MessageHandler, MessageFun } from '@dino-dev/vue3-core'

export declare type MessageFun = (msg: string, options?: any) => void

export interface MessageHandler {
  success: MessageFun
  info: MessageFun
  warning: MessageFun
  error: MessageFun
}

export interface MessageOptions {
  /**
   * 消息处理函数
   */
  messageHandler: MessageHandler
}

export const setupMessage = (options: MessageOptions): void => {
}

```

- **Details**

`MessageHandler`

| name    | type         | optional | default | description |
|---------|--------------|----------|---------|-------------|
| success | `MessageFun` | `false`  | `n/a`   | 成功消息    |
| info    | `MessageFun` | `false`  | `n/a`   | 普通消息    |
| warning | `MessageFun` | `false`  | `n/a`   | 警告消息    |
| error   | `MessageFun` | `false`  | `n/a`   | 错误消息    |

- **Example**

```ts
import { MessageHandler, setupMessage } from '@dino-dev/vue3-core'

// 使用Element Plus的消息提示
import { ElMessage } from 'element-plus'
const messageHandler: MessageHandler = {
  success: (msg: string, options?: any):void => {
    ElMessage.success(msg)
  },
  info: (msg: string, options?: any)):void => {
    ElMessage.info(msg)
  },
  warning: (msg: string, options?: any)):void => {
    ElMessage.warning(msg)
  },
  error: (msg: string, options?: any)):void => {
    ElMessage.error(msg)
  },
}

setupMessage({
  messageHandler
})

// 使用uni-app的消息提示
const messageHandler: MessageHandler = {
  success: (msg: string, options?: any):void => {
    uni.showToast({
      title: msg,
      icon: 'success'
    })
  },
  info: (msg: string, options?: any)):void => {
    uni.showToast({
      title: msg,
      icon: 'none'
    })
  },
  warning: (msg: string, options?: any)):void => {
    uni.showToast({
      title: msg,
      icon: 'warn'
    })
  },
  error: (msg: string, options?: any)):void => {
    uni.showToast({
      title: msg,
      icon: 'error'
    })
  },
}

// 使用微信小程序的`wx.showToast`消息提示
const messageHandler: MessageHandler = {
  success: (msg: string, options?: any):void => {
    wx.showToast({
      title: msg,
      icon: 'success'
    })
  },
  info: (msg: string, options?: any)):void => {
    wx.showToast({
      title: msg,
      icon: 'none'
    })
  },
  warning: (msg: string, options?: any)):void => {
    wx.showToast({
      title: msg,
      icon: 'error'
    })
  },
  error: (msg: string, options?: any)):void => {
    wx.showToast({
      title: msg,
      icon: 'error'
    })
  },
}

setupMessage({
  messageHandler
})

```

## useMessage

`useMessage`用于获取`MessageHandler`或`MessageFun`，`MessageHandler`用于处理不同类型的消息，`MessageFun`用于处理指定类型的消息。

- **Type**
```ts
import { useMessage } from '@dino-dev/vue3-core'

// 类型定义如下
export function useMessage(): MessageHandler
export function useMessage(msgType: MessageType): MessageFun

```

- **Example**
  
```ts
import { useMessage } from '@dino-dev/vue3-core'

const messageHandler = useMessage()
messageHandler.success('成功消息')

// 或者直接使用函数
const success = useMessage('success')
success('成功消息')

```

