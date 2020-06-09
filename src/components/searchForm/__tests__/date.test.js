import React from 'react';
import { mount } from 'enzyme';
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

  test('render date', async () => {
    class App extends React.Component {
      formRef = React.createRef();

      state = {
        result: {}, // eslint-disable-line
      };

      onSearch = (values) => {
        this.setState({
          result: values, // eslint-disable-line
        });
      };

      render() {
        const list = [{
          type: 'date',
          name: 'birthday',
          label: '生日',
        }];
        return (
          <SearchForm
            formRef={this.formRef}
            list={list}
            onSearch={this.onSearch}
          />
        );
      }
    }
    const wrapper = mount(<App />);
    wrapper
      .find('input')
      .at(0)
      .simulate('mousedown')
      .simulate('focus');
    wrapper
      .find('.ant-picker-cell-in-view')
      .at(0)
      .simulate('click');
    wrapper
      .find('.ant-picker-cell-in-view')
      .at(1)
      .simulate('click');
    wrapper
      .find('input')
      .at(0)
      .simulate('blur');
    wrapper
      .find('form')
      .simulate('submit');
    await delay();
    const v1 = wrapper
      .find('input')
      .at(0)
      .getDOMNode().value;
    const v2 = wrapper
      .find('input')
      .at(1)
      .getDOMNode().value;
    const result = wrapper.state('result');
    expect(result.birthday[0].format('YYYY-MM-DD')).toEqual(v1);
    expect(result.birthday[1].format('YYYY-MM-DD')).toEqual(v2);
    wrapper.unmount();
  });
});
