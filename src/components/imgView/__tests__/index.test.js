import React from 'react';
import { shallow, mount } from 'enzyme';
import ImgView from '../index';

const Component = (
  <ImgView src="pic.png">
    <img
      alt="图片"
      src="pic.png"
      style={{ width: 80, height: 80 }}
    />
  </ImgView>
);

describe('ImgView', () => {
  test('render correctly', () => {
    const wrapper = shallow(Component);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('全屏预览', () => {
    const wrapper = mount(Component);
    expect(wrapper.state('visible')).toBeFalsy();

    // 点击全屏预览
    wrapper.find('img').simulate('click');
    expect(wrapper.state('visible')).toBeTruthy();
    // 点击关闭
    wrapper.find('.ant-modal-close').simulate('click');
    expect(wrapper.state('visible')).toBeFalsy();
  });

  test('rotate', () => {
    const wrapper = mount(Component);
    wrapper.find('img').simulate('click');

    wrapper.find('.ant-modal-footer button').at(1).simulate('click');
    expect(wrapper.state('rotateDeg')).toEqual(90);
    wrapper.find('.ant-modal-footer button').at(0).simulate('click');
    expect(wrapper.state('rotateDeg')).toEqual(0);
  });

  test('zoom in', () => {
    const wrapper = mount(Component);
    wrapper.find('img').simulate('click');

    wrapper.find('.ant-modal-footer button').at(2).simulate('click');
    expect(wrapper.state('scaleX')).toEqual(1.2);
  });

  test('zoom out', () => {
    const wrapper = mount(Component);
    wrapper.find('img').simulate('click');

    const button = wrapper.find('.ant-modal-footer button').at(3);
    button.simulate('click');
    expect(wrapper.state('scaleX')).toEqual(0.8);
    button.simulate('click');
    expect(wrapper.state('scaleX')).toEqual(0.6);
    button.simulate('click');
    expect(wrapper.state('scaleX')).toEqual(0.4);
    button.simulate('click');
    expect(wrapper.state('scaleX')).toEqual(0.2);
    button.simulate('click');
    expect(wrapper.state('scaleX')).toEqual(0.2);
    wrapper.find('.ant-modal-footer button').at(0).simulate('click');
    expect(wrapper.state('scaleX')).toEqual(1);
  });
});
