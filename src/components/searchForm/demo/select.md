> 下拉框

### API

| Property | Description | Type | Default |
| :------- | :---------- | :--- | :------ |
| name | 字段名 | string | - |
| label | 标签的文本 | string | - |
| list | 选择项 | object[] | - |
| placeholder | 描述文字 | string | 请输入 |
| width | 宽度 | string \| number | 100% |
| showSearch | 使单选模式可搜索 | boolean | false |
| ... | 其他参数参考`antd-Select` | any | - |

#### list

| Property | Description | Type | Default |
| :------- | :---------- | :--- | :------ |
| value | 选项值 | string | - |
| text | 选项文本 | string | - |

### Usage

```jsx
import { Form, Table } from 'antd';
import { SearchForm } from 'jun-rc-antd';

@connect(({ loading, user }) => ({
  loading: loading.effects['user/fetchList'],
  list: user.list,
}))
class App extends React.Component {
  formRef = React.createRef();

  onQuery = (payload) => {
    this.props.dispatch({
      type: 'user/fetchList',
      payload,
    })
  };

  onSearch = (values) => {
    if (this.props.loading) {
      return;
    }
    this.onQuery(values);
  };

  onReset = () => {
    const form = this.formRef.current;
    form.resetFields();
    const values = form.getFieldsValue();
    this.onQuery(values);
  };

  renderSearch = () => {
    const list = [{
      type: 'select',
      name: 'sex',
      label: '性别',
      list: [{
        value: 'male',
        text: '男',
      }{
        value: 'female',
        text: '女',
      }],
      showSearch: true, // 搜索模式
    }];

    return (
      <SearchForm
        formRef={this.formRef}
        list={list}
        loading={this.props.loading}
        onSearch={this.onSearch}
        onReset={this.onReset}
      />
    );
  };

  render() {
    return (
      <div>
        { this.renderSearch() }
        <Table
          columns={columns}
          dataSource={this.props.list}
          loading={this.props.loading}
          pagination={false}
        />
      </div>
    );
  }
}

ReactDOM.render(<App/>, mountNode);
```
