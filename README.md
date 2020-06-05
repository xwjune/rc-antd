> Ant Design of React

## Installation

Install with npm:

```bash
npm install jun-rc-antd
```

Install with yarn:

```bash
yarn add jun-rc-antd
```

## Usage

ES6 module:

```jsx
import { ImgView } from 'jun-rc-antd';

// 图片预览
ReactDOM.render(
  <ImgView src="pic.png">
    <img
      alt="图片"
      src="pic.png"
      style={{ width: 80, height: 80 }}
    />
  </ImgView>,
  mountNode
);
```

Script:

```html
<!DOCTYPE html>
<html lang="zh-cn">
<head>
  <meta charset="utf-8">
  <title>jun-rc-antd</title>
  <link rel="stylesheet" type="text/css" href="jun-rc-antd.min.css">
</head>
<body>
  <div id="root"></div>
  <script type="text/javascript" charset="utf-8" src="react.js"></script>
  <script type="text/javascript" charset="utf-8" src="react-dom.js"></script>
  <script type="text/javascript" charset="utf-8" src="browser.js"></script>
  <script type="text/javascript" charset="utf-8" src="jun-rc-antd.min.js"></script>
  <script type="text/babel">
    const ImgView = junRcAntd.ImgView;
    // 图片预览
    ReactDOM.render(
      <ImgView src="pic.png">
        <img
          alt="图片"
          src="pic.png"
          style={{ width: 80, height: 80 }}
        />
      </ImgView>,
      document.getElementById('root')
    );
  </script>
</body>
</html>
```

## Note
部分组件需要引入样式

## Components

### ImgView
**图片预览**

样式：`jun-rc-antd/lib/components/imgView/style.css`

| Property | Description | Type | Default |
| :------- | :---------- | :--- | :------ |
| src | 图片资源 | string |

### SearchForm
**搜索表单**

| Property | Description | Type | Default |
| :------- | :---------- | :--- | :------ |
| formRef | 表单实体 | object | - |
| onSearch | 查询回调 | function(values) | - |
| onReset | 重置回调 | function | - |
| list | 选择项 | array | - |
| multiple | 是否为高级搜索 | boolean | false |
| collapsed | 高级搜索是否收起 | boolean | true |
| size | 简易搜索个数 | number | 3 |
| loading | 是否正在查询 | boolean | - |
| initialValues | 初始值 | object | - |
| onExport | 导出回调 | function | - |
| extra | 搜索栏额外元素【操作按钮】 | string \| ReactNode | - |
| onCollapse | 展开/收起回调 | function(collapsed) | - |
| searchText | 查询按钮文字 | string | 查询 |
| resetText | 重置按钮文字 | string | 重置 |
| exportText | 导出按钮文字 | string | 导出 |
| collapseText | 收起状态按钮文字 | string | 展开 |
| uncollapseText | 展开状态按钮文字 | string | 收起 |
