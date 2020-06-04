> 搜索表单

## 使用场景
配合表格查询搜索使用

## API

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

### list
| Property | Description | Type | Default |
| :------- | :---------- | :--- | :------ |
| type | 类型 | string | - |
| name | 字段名 | string | - |
| label | 标签文本 | string | - |
| render | 自定义渲染函数 | function | - |
| ... | 各类型对应参数 |- | - |

### list.type
可选值：

- `input` 输入框
- `rangeInput` 区间输入框
- `select` 下拉框
- `search` 搜索框
- `date` 时间范围选择器

## Usage

```jsx
import { Table } from 'antd';
import { SearchForm } from 'jun-rc-antd';

class App extends React.Component {
  formRef = React.createRef();

  // 搜索框渲染
  renderSearch = () => {
    const {
      onSearch,
      onReset,
      loading,
    } = this.props;
    const list = [{
      type: 'input', // 输入框
      name: 'name',
      label: '姓名',
    }, {
      type: 'select', // 下拉框
      name: 'sex',
      label: '性别',
      list: [{
        value: 'male',
        text: '男',
      }{
        value: 'female',
        text: '女',
      }],
    }, {
      type: 'date', // 时间范围选择器
      name: 'entryTime',
      label: '入职时间',
    }];

    return (
      <SearchForm
        formRef={this.formRef}
        list={list}
        onSearch={onSearch}
        onReset={onReset}
        loading={loading}
      />
    );
  };

  render() {
    return (
      <div>
        { this.renderSearch() }
        <Table
          columns={columns}
          dataSource={dataSource}
         />
      </div>
    );
  }
}

ReactDOM.render(<App/>, mountNode);
```
