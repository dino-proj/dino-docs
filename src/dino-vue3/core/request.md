<!--
 Copyright 2023 dinosdev.cn.
 SPDX-License-Identifier: Apache-2.0
-->

# 配置Api Request
Request用于配置网络请求，`dino-vue3-core`内置了`axios`、`uni.request`、`wx.request`等网络请求模块，可以根据不同的开发框架选择不同的网络请求模块。

## 初始化ApiRequest
`ApiRequest`是作为所有网络请求的基础，在使用`dino-vue3-core`所有API请求前，需要对网络请求做初始化.

- **Type**
```ts

export interface ApiOptions {
  /**
   * 请求提供函数
   */
  requestProvider: RequestProvider

  /**
   * api配置
   */
  config: ApiConfig
}

export const setupApi = (options: ApiOptions) => {
}
```

- **Details**

`ApiOptions`

| name            | type              | optional | default | description  |
|-----------------|-------------------|----------|---------|--------------|
| requestProvider | `RequestProvider` | `false`  | `n/a`   | 请求提供函数 |
| config          | `ApiConfig`       | `false`  | `n/a`   | api配置      |


`ApiConfig` Api配置类型

| name           | type                     | optional | default | description                                   |
|----------------|--------------------------|----------|---------|-----------------------------------------------|
| baseUrl        | `string`                 | `false`  | `n/a`   | api请求基础路径，如：https://dinosdev.cn/api    |
| requestTimeout | `number`                 | `true`   | `n/a`   | 接口请求超时时间(毫秒)，默认：-1，表示不设置超时 |
| successCode    | `number \| number[]`     | `true`   | `n/a`   | 接口成功返回状态码，默认：0                     |
| needLoginCode  | `number \| number[]`     | `true`   | `n/a`   | 需要重新登录的状态码，默认：630                 |
| tenant         | `() => Tenant`           | `true`   | `n/a`   | 获取租户信息函数                              |
| authToken      | `() => AuthToken`        | `true`   | `n/a`   | 获取登录凭证函数                              |
| autoLogin      | `() => Promise<boolean>` | `true`   | `n/a`   | 自动登录函数                                  |
| onLoginExpired | `() => void`             | `true`   | `n/a`   | 登录过期回调函数，用于自动登录失败后的处理     |
| defaultHeaders | `HttpHeaderType`         | `true`   | `{}`    | 接口请求默认的headers                         |
| defaultParams  | `ApiParamType`           | `true`   | `{}`    | 接口请求默认的url参数                         |
| proxy          | `false \| ProxyConfig`   | `true`   | `false` | 是否开启代理                                  |


## 使用Axios
使用`Axios`作为网络请求模块

第一步，安装`axios`
```bash
npm install axios
# or
yarn add axios
```

第二步，在main.ts中添加如下代码
```ts
import { setupApi } from '@dino-dev/vue3-core'
import { axiosRequestProvider } from '@dino-dev/vue3-core/axios'

setupApi({
  // 配置网络请求
  requestProvider: axiosRequestProvider,

  // 配置API请求，详细参数参见`ApiConfig`模块
  config: {
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    authToken: useTokenStore().getToken,
    autoLogin: gotoLoginPage
  }
})

```


## 使用UniRequest
使用`uni.request`作为网络请求函数，适用于用Uni-App作为开发框架的应用场景。

第一步，安装依赖

内置`uni` request 是通过`axios`实现的，因此需要先安装`axios`和 `uniapp-axios-adapter`
```bash
npm install axios uniapp-axios-adapter
# or
yarn add axios uniapp-axios-adapter
```

第二步，在main.ts中添加如下代码
```ts
import { setupApi } from '@dino-dev/vue3-core'
import { uniRequestProvider } from '@dino-dev/vue3-core/uni'


setupApi({
  // 配置网络请求
  requestProvider: uniRequestProvider,

  // 配置API请求，详细参数参见`ApiConfig`模块
  config: {
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    authToken: useTokenStore().getToken,
    autoLogin: gotoLoginPage
  }
})

```

## 使用WxRequest
使用`wx.request`作为网络请求函数，适用于用微信小程序开发场景

第一步，安装依赖

内置`wx` request 是通过`axios`实现的，因此需要先安装`axios`和 `axios-miniprogram-adapter`
```bash
npm install axios axios-miniprogram-adapter
# or
yarn add axios axios-miniprogram-adapter
```

第二步，在main.ts中添加如下代码
```ts
import { setupApi } from '@dino-dev/vue3-core'
import { wxRequestProvider } from '@dino-dev/vue3-core/wx'

setupApi({
  // 配置网络请求
  requestProvider: uniRequestProvider,

  // 配置API请求，详细参数参见`ApiConfig`模块
  config: {
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    authToken: useTokenStore().getToken,
    autoLogin: gotoLoginPage
  }
})

```

## 自定义Request
可以自定义网络请求函数，只需要实现`RequestProvider`接口即可。

例如，可以直接使用`uni.request`作为网络请求函数，只需要实现如下代码：
```ts
import { RequestProvider } from '@dino-dev/vue3-core'

 const uniRequestProvider: RequestProvider = async (config: HttpRequestConfig): Promise<HttpResponse> => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: config.url,
      method: config.method,
      data: config.data,
      header: config.headers,
      success: (res) => {
        resolve({
          data: res.data,
          status: res.statusCode,
          headers: res.header
        })
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}
```
