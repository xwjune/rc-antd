/**
 * 输入框
 *
 * @param {string} label - 标签的文本
 * @param {string} leftName - 左输入框字段名
 * @param {string} rightName - 右输入框字段名
 * @param {string} [leftPlaceholder] - 左输入框描述文字
 * @param {string} [rightPlaceholder] - 右输入框描述文字
 * @param {string|number} [width='90px'] - 宽度
 * @param {any} 其他参数参考antd-InputNumber组件
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, InputNumber } from 'antd';

const App = ({
  label,
  leftName,
  rightName,
  leftPlaceholder,
  rightPlaceholder,
  width,
  ...restProps
}) => (
  <Form.Item label={label}>
    <Form.Item name={leftName} style={{ display: 'inline-block', marginRight: 0 }}>
      <InputNumber
        placeholder={leftPlaceholder}
        style={{ width }}
        {...restProps}
      />
    </Form.Item>
    <span style={{ height: 34, display: 'inline-flex', alignItems: 'center' }}>&nbsp;-&nbsp;</span>
    <Form.Item name={rightName} style={{ display: 'inline-block' }}>
      <InputNumber
        placeholder={rightPlaceholder}
        style={{ width }}
        {...restProps}
      />
    </Form.Item>
  </Form.Item>
);

App.defaultProps = {
  leftPlaceholder: '',
  rightPlaceholder: '',
  width: '90px',
};

App.propTypes = {
  label: PropTypes.string,
  leftName: PropTypes.string,
  rightName: PropTypes.string,
  leftPlaceholder: PropTypes.string,
  rightPlaceholder: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default App;
