<!--
 Copyright 2023 dinosdev.cn.
 SPDX-License-Identifier: Apache-2.0
-->
# 版本说明

## 开发版(3.0.0) <Badge type="warning" text="未发布" />

* 破坏：更新`Spring Boot`到`3.0`
* 破坏：`Java`最低版本要求`Java Version>=17`
* 破坏：移除对`Hibernate`和`JPA`依赖，直接使用`JDBC`访问数据库
* 破坏：`IM`，`SMS`等业务模块移到独立项目中

## RELEASE-2.3.5

* 新增：core:openIM，增加是否用户注册检测
* 新增：core:login，增加LoginByRefreshtoken Controller接口
* 新增：core:wallet，增加支出字段
* 新增：core，service增加根据自定义条件查询记录数接口
* 新增：core，增加根据条件查询是否存在的controller接口，一般用于新增是检查是否存在
* 改进：将auth升级为独立工程dino-spring-auth
* 改进：core:import，文件导入接口增加文件格式
* 改进：core:category，增加分页查询分类树接口
* 改进：common工程，优化异步执行器AsyncWorker
* 改进：common工程，提升ContextHelper初始化阶段
* 改进：validator，电话号码校验注解增加默认允许国家为中国
* 改进：core:login，package从core移到modules
* 改进：openAPI，升级springdoc到1.6.9；增加SecurityScheme配置
* 改进：openAPI，增加server、contract、license属性自定义配置
* 修复：core:paging，修复通过sort可以进行SQL注入的问题
* 修复：core:oss，修复大文件上传oom问题，及资源未释放问题
* 修复：core:oss，修复部分Mp4文件时长获取不正确问题
* 修复：core:login，修复refreshToken内判断字段错误
* 移除：user移除guid属性
* 移除：PostBody移除uid、utype、guid字段

## RELEASE-2.3.0

* 新增：增加ASM工具类，用于生成泛型类的子类
* 新增：增加对openim模块，支持群组管理，聊天消息
* 新增：增加image4j依赖
* 新增：增加iam模块，用于权限控制，包含操作权限、数据权限、菜单权限
* 新增：增加Supplier函数相关便捷工具
* 新增：增加flayway支持，其中Java Migration支持依赖jpa组件
* 新增：增加国密SM2加密工具类
* 新增：增加BeanInfo工具类，支持对JsonView注解的属性解析
* 改进：改进dino-auth，增加@CheckIgnore注解和URL白名单配置，以忽略某些方法的权限校验
* 改进：crud接口支持权限校验，支持@Validated参数校验，支持JsonView
* 改进：升级oss相关依赖jar的版本
* 改进：租户模块增加favicon.ico生成接口，增加根据code查询租户信息
* 改进：将@JsonDiscriminator注解移到dino-spring-commons工程
* 改进：将api-doc Swagger的json属性序列化命名规则修改为snake
* 修复：解决doc,pdf等文档无法获取content-type的问题
* 移除：移除hibernate的deprecated接口
* 移除：移除dino-utils工程，并将其废弃

## RELEASE-2.2.0

* 新增：基于注解的权限检查，支持检查注解，@CheckPermission，@CheckRole，@CheckLogin，@CheckResource，以及可以自定义扩展的@CheckAuthz
* 新增：UserType增加是否为租户下的用户判断，以防止api调用中url中的租户与登录用户租户不一致问题
* 新增：InheritableThreadLocalMap工具类，满足对基于ThreadLocal的变量存储管理
* 修改：将TokenService的generateTokenId方法改为public
* 移除：shiro，由于其权限注解无法满足dinospring基于模块继承的权限注解方式
* 修复：hibernate版本更新，以兼容spring-data-jpa:2.6.6
