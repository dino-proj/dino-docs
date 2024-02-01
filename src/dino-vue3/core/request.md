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

export const setupApi = (options: ApiOptions, service?:string) => ApiService
```

- **Details**

### `ApiOptions`

| name            | type              | optional | default | description  |
|-----------------|-------------------|----------|---------|--------------|
| requestProvider | `RequestProvider` | `false`  | `n/a`   | 请求提供函数 |
| config          | `ApiConfig`       | `false`  | `n/a`   | api配置      |


### `ApiConfig` Api配置类型

| name           | type                                    | optional | default | description                                   |
|----------------|-----------------------------------------|----------|---------|-----------------------------------------------|
| baseUrl        | `string`                                | `false`  | `n/a`   | api请求基础路径，如：https://dinosdev.cn/api    |
| requestTimeout | `number`                                | `true`   | `n/a`   | 接口请求超时时间(毫秒)，默认：-1，表示不设置超时 |
| successCode    | `number \| number[]`                    | `true`   | `n/a`   | 接口成功返回状态码，默认：0                     |
| needLoginCode  | `number \| number[]`                    | `true`   | `n/a`   | 需要重新登录的状态码，默认：630                 |
| tenant         | `() => Tenant \| Promise<Tenant>`       | `true`   | `n/a`   | 获取租户信息函数                              |
| authToken      | `() => AuthToken \| Promise<AuthToken>` | `true`   | `n/a`   | 获取登录凭证函数                              |
| autoLogin      | `() => Promise<boolean>`                | `true`   | `n/a`   | 自动登录函数                                  |
| onLoginExpired | `() => void`                            | `true`   | `n/a`   | 登录过期回调函数，用于自动登录失败后的处理     |
| defaultHeaders | `HttpHeaderType`                        | `true`   | `{}`    | 接口请求默认的headers                         |
| defaultParams  | `ApiParamType`                          | `true`   | `{}`    | 接口请求默认的url参数                         |
| proxy          | `false \| ProxyConfig`                  | `true`   | `false` | 是否开启代理                                  |

### `ApiService` ApiService接口

| name         | type                                                                                                                                                             | optional | default | description  |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|---------|--------------|
| serviceName  | `string`                                                                                                                                                         | `false`  | `n/a`   | 服务名称     |
| apiConfig    | `ApiConfig`                                                                                                                                                      | `false`  | `n/a`   | Api配置      |
| interceptors | `{ readonly request: InterceptorManager<RequestConfig<any>, { apiService: ApiService; }>; readonly response: InterceptorManager<HttpResponse<any>, { ...; }>; }` | `false`  | `n/a`   | 拦截器管理器 |
| request      | `HttpRequest`                                                                                                                                                    | `false`  | `n/a`   | 请求函数     |



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
    // ...
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

## 使用拦截器
可以使用`interceptors`配置拦截器，拦截器用于在请求前或请求后做一些处理，例如：添加请求头、添加请求参数、添加请求体、添加响应头、添加响应体等。

**添加拦截器**
```ts
// 1. 通过`useApi`或`setupApi`可以获取ApiService的实例
const apiService = useApi()
// or
const apiService = setupApi({/* ... */})

// 类型定义如下：
export interface ApiService {
  // ...
  /**
   * 拦截器管理器
   */
  readonly interceptors: {
    readonly request: InterceptorManager<RequestConfig, { apiService: ApiService }>
    readonly response: InterceptorManager<HttpResponse, { requestConfig: RequestConfig; apiService: ApiService }>
  }
  // ...
}

// 2. 拦截器管理器，以添加Request拦截器为例
const myInterceptorCancle = apiService.interceptors.request.use((config: RequestConfig, { apiService }) => {
  // ...
  return config
})

// 如果要取消拦截器，可以调用`myInterceptorCancle`函数
myInterceptorCancle()

```

**内置的request拦截器有：**
- 添加默认baseUrl拦截器
- 添加默认params拦截器
- 添加默认headers拦截器
- 添加请求formData数据转换拦截器
- 添加默认请求超时拦截器
- 添加默认代理拦截器
- tenant_id参数拦截器
- auth token拦截器

**内置的response拦截器有：**
- 成功状态码拦截器
- 自动登录拦截器
- 默认错误提示拦截器

## 配置多个微服务
后端请求服务可能会有多个，例如：用户服务、订单服务、商品服务等，这些服务可能会有不同的baseUrl、不同的请求头、不同的请求参数等，因此，可以通过微服务来管理这些服务。

**添加微服务**
```ts
// 1. 通过`setupApi`配置每个微服务的ApiService的实例
// 默认API服务
const apiService = setupApi({/* ... */})
// 用户微服务
const userApiService = setupApi({/* ... */}, 'user')
// 订单微服务
const orderApiService = setupApi({/* ... */}, 'order')

// 使用默认API服务
const apiService = useApi()
// 使用用户微服务
const userApiService = useApi('user')
// 使用订单微服务
const orderApiService = useApi('order')

```

## 更多用法

### 当Token过期时，使用自动登录函数自动登录
需要使用`autoLogin`配置自动登录函数，用于自动登录处理

```ts
import { setupApi } from '@dino-dev/vue3-core'

const refreshTokenApi = definePostApi<RefreshTokenRequest, RefreshTokenResponse>('/auth/refreshToken')

setupApi({
  // ...
  config: {
    // ...
    autoLogin: () => {
      // 自动登录
      return refreshTokenApi()
    }
  }
})

```

### 当登录过期时，自动跳转到登录页面
需要使用`onLoginExpired`配置登录过期回调函数，用于自动登录失败后的处理

```ts
import { setupApi } from '@dino-dev/vue3-core'

setupApi({
  // ...
  config: {
    // ...
    onLoginExpired: () => {
      // 跳转到登录页面
      gotoLoginPage()
    }
  }
})

```
