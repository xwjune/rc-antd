import React from 'react';
import { mount } from 'enzyme';
import { Form, Input } from 'antd';
import SearchForm from '../index';

const delay = async (timeout = 0) => {
  await new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

describe('SearchForm', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: () => {
        return {
          matches: false,
          addListener: () => {},
          removeListener: () => {}
        };
      }
    });
  });

  test('render correctly', async () => {
    class App extends React.Component {
      formRef = React.createRef();

      state = {
        result: {},
      };

      onSearch = (values) => {
        this.setState({
          result: values,
        });
      };

      onReset = () => {
        const form = this.formRef.current;
        form.resetFields();
        const values = form.getFieldsValue();
        this.setState({
          result: values,
        });
      };

      render() {
        const list = [{
          type: 'input',
          name: 'name',
          label: '姓名',
        }, {
          type: 'rangeInput',
          leftName: 'ageLeft',
          rightName: 'ageRight',
          label: '年龄',
          min: 0,
          precision: 0,
          className: 'my-rangeInput',
        }, {
          type: 'select',
          name: 'sex',
          label: '性别',
          list: [{
            value: 'male',
            text: '男',
          }, {
            value: 'female',
            text: '女',
          }],
          showSearch: true,
          className: 'my-select',
        }, {
          name: 'hobby',
          render: () => (
            <Form.Item label="爱好" name="hobby">
              <Input className="my-render" />
            </Form.Item>
          ),
        }];
        const result = JSON.stringify(this.state.result);
        return (
          <div>
            <SearchForm
              formRef={this.formRef}
              list={list}
              onSearch={this.onSearch}
              onReset={this.onReset}
            />
            <p>{result}</p>
          </div>
        );
      }
    }
    const wrapper = mount(<App />);

    wrapper
      .find('.ant-form-item')
      .first()
      .find('input')
      .simulate('change', {
        target: {
          value: 'Jack',
        },
      });

    wrapper
      .find('.ant-input-number.my-rangeInput')
      .first()
      .find('input')
      .simulate('change', {
        target: {
          value: '25',
        },
      });
    wrapper
      .find('.ant-input-number.my-rangeInput')
      .at(1)
      .find('input')
      .simulate('change', {
        target: {
          value: '30',
        },
      });

    wrapper
      .find('.ant-select.my-select')
      .simulate('click');
    const dropdownWrapper = mount(
      wrapper
        .find('Trigger')
        .instance()
        .getComponent(),
    );
    dropdownWrapper
      .find('.ant-select-item')
      .at(0)
      .simulate('click');

    wrapper
      .find('input.my-render')
      .simulate('change', {
        target: {
          value: 'swimming',
        },
      });

    wrapper.find('form').simulate('submit');
    await delay();
    expect(wrapper.state('result')).toEqual({
      name: 'Jack',
      sex: 'male',
      ageLeft: 25,
      ageRight: 30,
      hobby: 'swimming',
    });
    wrapper.find('button[aria-label="reset"]').simulate('click');
    expect(wrapper.state('result')).toEqual({
      name: undefined,
      sex: undefined,
      ageLeft: undefined,
      ageRight: undefined,
      hobby: undefined,
    });
    wrapper.unmount();
  });
});
