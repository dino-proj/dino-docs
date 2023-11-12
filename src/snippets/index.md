---
layout: doc
---

# Code Snippets
代码快捷指令，帮助快速创建接口、实体、添加注解等，以下Snippets是基于[VSCode](https://code.visualstudio.com/)实现。

<a href='/snippets/dino-spring.code-snippets' download>下载完成Snippets文件</a>

## 添加作者信息
代码检查规则要求每个类需要包含`@author`信息，这指令能快速添加，请将`Cody Lu`替换成你的名字
```json
  "add author info": {
    "scope": "java",
    "prefix": "@author",
    "body": ["/**", " * $1", " * @author Cody Lu", " * @date $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND", " */", ""],
    "description": "add author infomation"
  }
```

## 添加Entity注解
包括 `@Data`，`@Entity`，`@Table`等

```json
  "entity annotion": {
    "scope": "java",
    "prefix": "@entity",
    "body": ["@Data", "@EqualsAndHashCode(callSuper = true)", "@SuperBuilder", "@NoArgsConstructor", "@Entity", "@Table(name = \"$1\")"],
    "description": "add annotion to entity"
  },
```

## 添加Schema注解

`@Schema`用于生成API文档的注解

```json
  "schema annotion": {
    "scope": "java",
    "prefix": "@schema",
    "body": ["@Schema(description = \"$1\")"],
    "description": "add a schema annotion"
  },
```

## 添加Column注解

`@Column`注解用于声明数据库列属性信息

```json
  "column annotion": {
    "scope": "java",
    "prefix": "@column",
    "body": ["@Schema(description = \"$1\")", "@Column($2)"],
    "description": "add a column annotion"
  },
```

## 添加Rest Controller注解

并添加API文档用的`@Tag`

::: code-group

```json [多租户版本]
  "rest annotion Tenantable": {
    "scope": "java",
    "prefix": "@restcontrollerTenant",
    "body": ["@Tag(name = \"$1\")", "@RestController", "@RequestMapping(\"/v1/{tenant_id:[0-9A-Z]+}/$2\")"],
    "description": "add annotion to tenant contoller"
  },
```


```json [非租户版本]
  "rest annotion": {
    "scope": "java",
    "prefix": "@restcontroller",
    "body": ["@Tag(name = \"$1\")", "@RestController", "@RequestMapping(\"/v1/$2\")"],
    "description": "add annotion to contoller"
  },
```
:::

## 添加Get接口

添加`@GetMapping`，并添加接口文档相关的`@Operation`注解

```json
  "get Mapping": {
    "scope": "java",
    "prefix": "@getMapping",
    "body": ["@Operation(summary = \"$1\")", "@GetMapping(\"/$2\")", "public Response<$3> get$2(){", "$4", "return Response.success(null);", "}"],
    "description": "add GetMapping method to contoller"
  },
```

## 添加Post接口

添加`@PostMapping`，并添加接口文档相关的`@Operation`注解

```json
  "post Mapping": {
    "scope": "java",
    "prefix": "@postMapping",
    "body": ["@Operation(summary = \"$1\")", "@PostMapping(\"/$2\")", "public Response<$3> post$2(@RequestBody PostBody<$4> req){", "$5", "return Response.success(null);", "}"],
    "description": "add PostMapping method to contoller"
  },
```

## 为接口添加参数注解

为`Get`或`Post`接口添加`@Parameter`注解用于描述参数

```json
  "param annotion": {
    "scope": "java",
    "prefix": "@param",
    "body": ["@Parameter(in = ParameterIn.QUERY, name = \"$1\", required = true)"],
    "description": "add a parameter annotion"
  },
```
