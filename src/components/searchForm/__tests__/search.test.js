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

  test('render search', async () => {
    const lists = [{
      value: 'Hongkong',
      text: '香港',
    }, {
      value: 'Beijing',
      text: '北京',
    }, {
      value: 'Taipei',
      text: '台北',
    }, {
      value: 'Shanghai',
      text: '上海',
    }];
    class App extends React.Component {
      formRef = React.createRef();

      state = {
        result: {},
        cities: [],
      };

      onSearch = (values) => {
        this.setState({
          result: values,
        });
      };

      fetchCity = (value) => {
        const cities = lists.filter(el => el.text.includes(value));
        this.setState({
          cities,
        });
      };

      render() {
        const list = [{
          type: 'search',
          name: 'city',
          label: '城市',
          list: this.state.cities,
          onSearch: this.fetchCity,
          className: 'my-search',
        }];
        const result = JSON.stringify(this.state.result);
        return (
          <div>
            <SearchForm
              formRef={this.formRef}
              list={list}
              onSearch={this.onSearch}
            />
            <p>{result}</p>
          </div>
        );
      }
    }
    const wrapper = mount(<App />);

    wrapper
      .find('.ant-select.my-search')
      .simulate('click');
    wrapper
      .find('.ant-select.my-search input')
      .simulate('change', {
        target: {
          value: '北',
        },
      });
    await delay(500);
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

    wrapper.find('form').simulate('submit');
    await delay();
    expect(wrapper.state('result')).toEqual({
      city: 'Beijing',
    });
    wrapper.unmount();
  });
});
