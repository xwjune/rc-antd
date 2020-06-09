import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchForm from '../index';

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

  test('render error', () => {
    const wrapper = shallow(<SearchForm />);
    expect(wrapper.isEmptyRender()).toBeTruthy();
  });

  test('render error type', () => {
    const list = [{
      type: 'errtype',
      name: 'name',
      label: '姓名',
    }];
    const wrapper = mount(<SearchForm list={list} />);
    expect(wrapper.getDOMNode().children.length).toBe(1);
    wrapper.unmount();
  });

  test('default text', () => {
    const onExport = jest.fn();
    const list = [{
      type: 'input',
      name: 'name',
      label: '姓名',
    }];
    const wrapper = mount(
      <SearchForm
        list={list}
        searchText="Search"
        resetText="Reset"
        exportText="Export"
        onExport={onExport}
      />
    );
    expect(wrapper.find('button[aria-label="search"]').text()).toBe('Search');
    expect(wrapper.find('button[aria-label="reset"]').text()).toBe('Reset');
    expect(wrapper.find('button[aria-label="export"]').text()).toBe('Export');
    wrapper.find('button[aria-label="export"]').simulate('click');
    expect(onExport).toBeCalled();
    wrapper.unmount();
  });

  test('has class', () => {
    const list = [{
      type: 'input',
      name: 'name',
      label: '姓名',
    }];
    const wrapper = mount(
      <SearchForm
        list={list}
        className="myAction"
        style={{ padding: 10 }}
      />
    );
    expect(wrapper.find('button[aria-label="export"]').exists()).toBeFalsy();
    expect(wrapper.hasClass('myAction')).toBeTruthy();
    expect(wrapper.getDOMNode().getAttribute('style')).toBe('padding: 10px;');
    wrapper.unmount();
  });

  test('has extra', () => {
    const list = [{
      type: 'input',
      name: 'name',
      label: '姓名',
    }];
    const wrapper = mount(
      <SearchForm
        list={list}
        extra={<button type="button" className="myAdd">Add</button>}
      />
    );
    expect(
      wrapper
        .find('.ant-form-item[aria-label="action"]')
        .find('button')
        .last()
        .hasClass('myAdd')
    ).toBeTruthy();
    wrapper.unmount();
  });

  test('render multiple', () => {
    const onCollapse = jest.fn();
    const list = [{
      type: 'input',
      name: 'name',
      label: '姓名',
    }, {
      type: 'input',
      name: 'age',
      label: '年龄',
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
    }];
    const wrapper = mount(
      <SearchForm
        list={list}
        multiple
        size={2}
        collapseText="Expand"
        uncollapseText="Collapse"
        onCollapse={onCollapse}
      />
    );
    expect(wrapper.state('collapsed')).toEqual(true);
    expect(wrapper.getDOMNode().children.length).toBe(3);
    wrapper
      .find('.ant-form-item[aria-label="action"]')
      .find('button')
      .last()
      .simulate('click');
    expect(onCollapse).toHaveBeenCalledWith(false);
    expect(wrapper.state('collapsed')).toEqual(false);
    expect(wrapper.getDOMNode().children.length).toBe(4);
    wrapper.unmount();
  });
});
