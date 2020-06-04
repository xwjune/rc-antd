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
