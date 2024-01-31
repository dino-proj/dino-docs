<!--
 Copyright 2023 dinosdev.cn.
 SPDX-License-Identifier: Apache-2.0
-->

# Common Types
定义了一些基础对象类型，目的是为了统一类型及属性名称

## IdKeyType
Id KEY的类型，用于对象主键值的类型

- **Type**
```ts
export type IdKeyType = string | number
```
- **Details**

一般用于`dino-spring`后台定义的接口中的id类型

- **Example**
```ts
import { IdKeyType } from '@dino-dev/vue3-core'

interface Animal<K extends IdKeyType> {
  id: K;
  // other fields
}
```

## VoBase
Vo的基础类型，用于`dino-spring`后台返回的接口类型

- **Type**
```ts
export interface VoBase<K extends IdKeyType> {
  id: K
  createAt: number
  updateAt: number
  createBy: string
  status: number
}

/**
 * 添加VoBase扩展
 */
export type withVoBase<T, K extends IdKeyType> = T & VoBase<K>
```
- **Details**

| name     | type     | optional | default | description                      |
|----------|----------|----------|---------|----------------------------------|
| id       | `K`      | `false`  | `n/a`   | 对象 ID                          |
| createAt | `number` | `false`  | `n/a`   | 对象创建时间戳，unix时间戳，到毫秒 |
| updateAt | `number` | `false`  | `n/a`   | 对象更新时间戳，unix时间戳，到毫秒 |
| createBy | `string` | `false`  | `n/a`   | 对象创建者                       |
| status   | `number` | `false`  | `n/a`   | 用户status                       |
 
- **Example**
```ts
import { VoBase, withVoBase } from '@dino-dev/vue3-core'

interface Animal extends VoBase<number>  {
  name: string
  // other fields
}

// use withVoBase
interface A{
  name: string
}

type AVo = withVoBase<A, string>

```

## Orderable
用于可排序对象，带排序码

- **Type**
```ts
export interface Orderable {
  orderNum?: number
}

export type withOrderable<T> = T & Orderable
```

- **Details**

可排序对象，带排序码

| name     | type     | optional | default | description |
|----------|----------|----------|---------|-------------|
| orderNum | `number` | `true`   | `n/a`   | 排序号      |

- **Example**
```ts
import { Orderable, VoBase, withOrderable } from '@dino-dev/vue3-core'

interface Animal extends VoBase<number>, Orderable{
  name: string
  // other fields
}

// use withOrderable
interface A{
  name: string
}

type AOrderable = withOrderable<A>
```

## Tenant
用于多租户系统

- **Type**
```ts
export interface Tenant {
  [K: string]: any
  id: string
  name: string
  shortName: string
  iconUrl: string
}
```

- **Details**

租户信息

| name        | type     | optional | default | description  |
|-------------|----------|----------|---------|--------------|
| [K: string] | `any`    | `true`   | `n/a`   | 其他扩展属性 |
| id          | `string` | `false`  | `n/a`   | 租户ID       |
| name        | `string` | `false`  | `n/a`   | 租户名称     |
| shortName   | `string` | `false`  | `n/a`   | 租户简称     |
| iconUrl     | `string` | `false`  | `n/a`   | 租户logo     |

- **Example**
```ts
import { Tenant } from '@dino-dev/vue3-core'

const tenant:Tenant = getTenant(...);

```

## Tenantable
- **Type**
```ts
export interface Tenantable {
  tenantId: string
}

export type withTenantable<T> = T & Tenantable

```

- **Details**

分租户，添加租户ID信息

| name     | type     | optional | default | description |
|----------|----------|----------|---------|-------------|
| tenantId | `string` | `false`  | `n/a`   | 租户ID      |

- **Example**
```ts
import { Tenantable, withTenantable } from '@dino-dev/vue3-core'

interface Animal extends Tenantable{
  name: string
  // other fields
}

// use withTenantable
interface A{
  name: string
}

type ATenantable = withTenantable<A>
```

## User

用户信息，区分用户类型，建议为每个用户类型定义单独的`interface`

- **Type**
```ts
export interface User<K extends IdKeyType> {
  id: K
  userType: string
  displayName: string
  avatarUrl: string
  tenantId?: string
  status: number
}
```
- **Details**

用户信息

| name        | type     | optional | default | description  |
|-------------|----------|----------|---------|--------------|
| id          | `K`      | `false`  | `n/a`   | 用户ID       |
| userType    | `string` | `false`  | `n/a`   | 用户类型     |
| displayName | `string` | `false`  | `n/a`   | 用户名称     |
| avatarUrl   | `string` | `false`  | `n/a`   | 用户头像     |
| tenantId    | `string` | `true`   | `n/a`   | 用户所属租户 |
| status      | `number` | `false`  | `n/a`   | 用户status   |

- **Example**
```ts
import { User } from '@dino-dev/vue3-core'

// 定义ClientUser类型
export interface ClientUser extends User<number> {
  userType: 'client'
}

const user: ClientUser = {
  id: 1,
  userType: 'client',
  // 其他属性...
}

```

## GeoPoint
坐标点类型

- **Type**
```ts
export interface GeoPoint {
  lon: number
  lat: number
}
```

- **Details**

GeoPoint

| name | type     | optional | default | description |
|------|----------|----------|---------|-------------|
| lon  | `number` | `false`  | `n/a`   | 坐标点：经度 |
| lat  | `number` | `false`  | `n/a`   | 坐标点：纬度 |

- **Example**
```ts
import { GeoPoint } from '@dino-dev/vue3-core'

const beijingGp: GeoPoint = {
  lon: 116.405285,
  lat: 39.904989
}
```

## Address
地址信息类型定义

- **Type**
```ts
export interface Address extends Partial<GeoPoint> {
  privince: string
  city: string
  area: string
  street: string
  detail: string
}
```
- **Details**

 Address

| name     | type     | optional | default | description |
|----------|----------|----------|---------|-------------|
| privince | `string` | `false`  | `n/a`   | 省份        |
| city     | `string` | `false`  | `n/a`   | 城市        |
| area     | `string` | `false`  | `n/a`   | 区域/县     |
| street   | `string` | `false`  | `n/a`   | 街道        |
| detail   | `string` | `false`  | `n/a`   | 详细地址    |
| lon      | `number` | `true`   | `n/a`   | 坐标点：经度 |
| lat      | `number` | `true`   | `n/a`   | 坐标点：纬度 |

- **Example**
```ts
import { Address } from '@dino-dev/vue3-core'

const address: Address = {
  privince: "北京市",
  city: "北京市",
  area: "朝阳区",
  street: "来广营街道",
  detail: "16号院1栋101室",
  lon: 116.405285,
  lat: 39.904989
}
```

## Contact
联系人类型定义

- **Type**
```ts
export interface Contact {
  name: string
  phone: string
}
```

- **Details**

Contact

| name  | type     | optional | default | description  |
|-------|----------|----------|---------|--------------|
| name  | `string` | `false`  | `n/a`   | 联系人姓名   |
| phone | `string` | `false`  | `n/a`   | 联系人手机号 |

- **Example**
```ts
import { Contact } from '@dino-dev/vue3-core'

const contact: Contact = {
  name: "赵某某",
  phone: "18888888888"
}
```

## Place
地点信息类型定义

- **Type**
```ts
export interface Place extends Partial<GeoPoint> {
  name: string
}
```
- **Details**

Place

| name | type     | optional | default | description |
|------|----------|----------|---------|-------------|
| name | `string` | `false`  | `n/a`   | 地点名称    |
| lon  | `number` | `true`   | `n/a`   | 坐标点：经度 |
| lat  | `number` | `true`   | `n/a`   | 坐标点：纬度 |

- **Example**
```ts
import { Place } from '@dino-dev/vue3-core'

const beijingPlace: Place = {
  name: '北京市',
  lon: 116.405285,
  lat: 39.904989
}
```

## Range

- **Type**
```ts
// @param T 范围类型，如：number、string、Date等
export interface Range<T> {
  begin: T
  end: T
}
```

- **Details**

Range&lt;T&gt;

| name      | type  | optional | default | description                                               |
|-----------|-------|----------|---------|-----------------------------------------------------------|
| &lt;T&gt; | `any` | `false`  | `n/a`   | 范围类型，如：number、string、Date等                          |
| begin     | `T`   | `true`   | `n/a`   | 开始值，如：[begin, end]；<br/>若begin为null则代表：\(-∞, end\) |
| end       | `T`   | `true`   | `n/a`   | 结束值，如：[begin, end]；<br/>若end为null则代表：\[begin, +∞) |

- **Example**
```ts
import { Range } from '@dino-dev/vue3-core'

// 北京早上公交车道限行时间为早7点至9点，9:00后不限行
const limitTime: Range<number> = {
  begin: 7,
  end: 9
}
```

## TimePeriod
TimePeriod类型，到秒的unix时间戳

- **Type**
```ts
export type TimePeriod = Range<number>
```

- **Details**

TimePeriod

| name  | type     | optional | default | description                                                        |
|-------|----------|----------|---------|--------------------------------------------------------------------|
| begin | `number` | `true`   | `n/a`   | 开始值，包含，如：\[begin, end\)；<br/>若begin为null则代表：\(-∞, end\)   |
| end   | `number` | `true`   | `n/a`   | 结束值，不包含，如：\[begin, end\)；<br/>若end为null则代表：\[begin, +∞\) |

- **Example**
```ts
import { TimePeriod } from '@dino-dev/vue3-core'

const updateBetween: TimePeriod = {
  begin: 1673437025,
  end: 1703338350
}

```

## ValueLabel
ValueLabel类型定义

- **Type**
```ts
export interface ValueLabel<T extends IdKeyType> {
  value: T
  label: string
}
```
- **Details**

ValueLabel&lt;T&gt;

| name  | type     | optional | default | description |
|-------|----------|----------|---------|-------------|
| value | `T`      | `false`  | `n/a`   | 值          |
| label | `string` | `false`  | `n/a`   | 名称        |

- **Example**
```ts
import { ValueLabel } from '@dino-dev/vue3-core'

const contractTypes: ValueLabel<string>[] = [
  {
    value: "hr-outsource",
    label: "人力外包"
  },
  {
    value: "hr-formal",
    label: "正式用工"
  },
]
```

## Option
Option类型定义，是对ValueLabel的扩展

- **Type**
```ts
export interface Option<T extends IdKeyType> {
  value: T
  label: string
  icon?: string
  style?: string
  desc?: string
}
```

- **Details**

Option&lt;T&gt;

| name  | type     | optional | default | description |
|-------|----------|----------|---------|-------------|
| value | `T`      | `false`  | `n/a`   | 选项值      |
| label | `string` | `false`  | `n/a`   | 选项名称    |
| icon  | `string` | `true`   | `n/a`   | 选项图标    |
| style | `string` | `true`   | `n/a`   | 选项样式    |
| desc  | `string` | `true`   | `n/a`   | 选项描述    |

- **Example**
```ts
import { Option } from '@dino-dev/vue3-core'

const contractOptions: Option<string>[] = [
  {
    value: "hr-outsource",
    label: "人力外包",
    icon: "outsource",
    desc: "从外包公司派遣的合同"
  },
  {
    value: "hr-formal",
    label: "正式用工",
    icon: "formal",
    desc: "正式员工及实习生合同"
  },
]

```

## OptionGroup
OptionGroup类型定义

- **Type**
```ts
export interface OptionGroup<T extends IdKeyType> {
  label: string
  options: Option<T>[]
  desc?: string
}
```

- **Details**

OptionGroup&lt;T&gt;

| name    | type          | optional | default | description |
|---------|---------------|----------|---------|-------------|
| label   | `string`      | `false`  | `n/a`   | 分组名称    |
| options | `Option<T>[]` | `false`  | `n/a`   | 分组选项    |
| desc    | `string`      | `true`   | `n/a`   | 分组描述    |

- **Example**
```ts
import { Option, OptionGroup } from '@dino-dev/vue3-core'

const hrContractOptions: Option<string>[] = [ ...]

const salesContractOptions: Option<string>[] = [ ...]

const contractOptionGroups: OptionGroup<string>[] = [
  {
    label: '人力合同',
    options: hrContractOptions
  },
  {
    label: '销售合同',
    options: salesContractOptions
  }
]

```
