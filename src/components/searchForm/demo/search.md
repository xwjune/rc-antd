> 搜索框

### API

| Property | Description | Type | Default |
| :------- | :---------- | :--- | :------ |
| name | 字段名 | string | - |
| label | 标签文本 | string | - |
| list | 选择项 | object[] | - |
| onSearch | 文本框值变化时回调| function(value: string) | - |
| loading | 加载中状态| boolean | - |
| placeholder | 描述文字 | string | 请输入 |
| width | 宽度 | string \| number | 100% |
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
  fetching: loading.effects['user/search'],
  list: user.list,
}))
class App extends React.Component {
  formRef = React.createRef();
  
  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };
  }
  
  fetchUser = (value) => {
    this.props.dispatch({
      type: 'user/search',
      payload: {
        name: value,
      }
    }).then((res) => {
      this.setState({
        result: res,
      });
    });
  };

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
    	type: 'search',
    	name: 'name',
    	label: '姓名',
    	list: this.state.result,
    	onSearch: this.fetchUser,
    	loading: this.props.fetching,
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
