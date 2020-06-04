> 区间输入框

### API

| Property | Description | Type | Default |
| :------- | :---------- | :--- | :------ |
| label | 标签文本 | string | - |
| leftName | 左输入框字段名| string | - |
| rightName | 右输入框字段名 | string | - |
| leftPlaceholder | 左输入框描述文字 | string | - |
| rightPlaceholder | 右输入框描述文字 | string | - |
| width | 宽度 | string \| number | 90px |
| ... | 其他参数参考`antd-InputNumber` | any | - |

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
      type: 'rangeInput',
      leftName: 'ageLeft',
      rightName: 'ageRight',
      label: '年龄',
      min: 0, // 最小值
      precision: 0, // 数值精度
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
