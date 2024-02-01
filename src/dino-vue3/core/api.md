<!--
 Copyright 2023 dinosdev.cn.
 SPDX-License-Identifier: Apache-2.0
-->

# Api模块
Api模块用于定义请求后台Api请求接口，这些接口需要跟服务端的rest接口定义一致。

`dino-vie3-core` lib主要定义了`dino-spring`中内置的一些接口。

在使用网络请求前，需要先对[配置Api](./request.md)

## useApi
通过`useApi`可以直接使用ApiService进行网络请求

- **Types**
```ts
/**
 * 获取服务Api
 * @param service 服务名称
 * @returns ApiService
 * @throws Error 如果服务未配置，则抛出错误
 */
export const useApi = (service?: string): ApiService

/**
 * Api请求函数类型
 */
export interface HttpRequest {
  <T = any, R = HttpResponse<T>, D = any>(config: RequestConfig<D>): Promise<R>
  <T = any, R = HttpResponse<T>, D = any>(url: string, config?: RequestConfig<D>): Promise<R>
}
```
- **Details**
### RequestConfig

请求接口的配置类型

| name            | type               | optional | default | description    |
|-----------------|--------------------|----------|---------|----------------|
| url             | `string`           | `false`  | `n/a`   | 请求的 URL     |
| method          | `string`           | `false`  | `n/a`   | 请求的方法     |
| baseUrl         | `string`           | `true`   | `n/a`   | 请求的基础 URL |
| headers         | `HttpHeaderType`   | `true`   | `n/a`   | 请求的头部信息 |
| params          | `any`              | `true`   | `n/a`   | 请求的参数     |
| data            | `D`                | `true`   | `n/a`   | 请求的数据     |
| timeout         | `number`           | `true`   | `n/a`   | 请求的超时时间 |
| withCredentials | `boolean`          | `true`   | `n/a`   | 是否携带凭证   |
| auth            | `BasicCredentials` | `true`   | `n/a`   | 基本认证凭证   |
| withToken | `boolean` | `true` | `undifined` | 是否需要身份验证令牌: undifined or true: 需要false: 不需要 |
| responseType | `ResponseType` | `true` | `n/a` | 响应的数据类型 |
| responseEncoding | `string` | `true` | `n/a` | 响应的编码方式 |
| socketPath | `string` | `true` | `n/a` | Socket 路径 |
| transport | `any` | `true` | `n/a` | 传输方式 |
| proxy | `false or ProxyConfig` | `true` | `n/a` | 代理配置 |
| onUploadProgress | `(progressEvent: RequestProgressEvent) => void` | `true` | `n/a` | 上传进度回调函数 |
| onDownloadProgress | `(progressEvent: RequestProgressEvent) => void` | `true` | `n/a` | 下载进度回调函数 |

### HttpResponse

HTTP响应接口

| name       | type             | optional | default | description  |
|------------|------------------|----------|---------|--------------|
| data       | `RESP_T`         | `false`  | `n/a`   | 响应数据     |
| status     | `number`         | `false`  | `n/a`   | 响应状态码   |
| statusText | `string`         | `false`  | `n/a`   | 响应状态文本 |
| headers    | `HttpHeaderType` | `false`  | `n/a`   | 响应头部信息 |

- **Example**
```ts
import { useApi } from '@dino-dev/vue3-core'

const api = useApi('core')

api.request({url: '/user/info'})

```
