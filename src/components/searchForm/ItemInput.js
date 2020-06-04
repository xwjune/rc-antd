/**
 * 输入框
 *
 * @param {string} name - 字段名
 * @param {string} label - 标签的文本
 * @param {string} [placeholder='请输入'] - 描述文字
 * @param {string|number} [width='100%'] - 宽度
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';

const App = ({
  name,
  label,
  placeholder,
  width,
}) => (
  <Form.Item label={label} name={name}>
    <Input placeholder={placeholder} style={{ width }} />
  </Form.Item>
);

App.defaultProps = {
  placeholder: '请输入',
  width: '100%',
};

App.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default App;
