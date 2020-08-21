/**
 * 时间范围选择器
 *
 * @param {string} name - 字段名
 * @param {string} label - 标签的文本
 * @param {string} [format='YYYY-MM-DD'] - 展示的日期格式
 * @param {string|number} [width='auto'] - 宽度
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, DatePicker } from 'antd';
import zhCN from 'antd/lib/date-picker/locale/zh_CN';

const App = ({
  name,
  label,
  format,
  width,
}) => (
  <Form.Item label={label} name={name}>
    <DatePicker.RangePicker
      getPopupContainer={triggerNode => triggerNode.parentElement}
      locale={zhCN}
      format={format}
      style={{ width }}
    />
  </Form.Item>
);

App.defaultProps = {
  format: 'YYYY-MM-DD',
  width: 'auto',
};

App.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  format: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default App;
