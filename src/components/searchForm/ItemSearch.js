/**
 * 搜索框
 *
 * @param {string} name - 字段名
 * @param {string} label - 标签的文本
 * @param {string} list - 选择项
 * @param {function} onSearch - 文本框值变化时回调
 * @param {boolean} loading - 加载中状态
 * @param {string} [placeholder='请输入'] - 描述文字
 * @param {string|number} [width='100%'] - 宽度
 * @param {any} 其他参数参考antd-Select组件
 */
import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import { Form, Select, Spin } from 'antd';

function noop() {}

const App = ({
  name,
  label,
  list,
  onSearch,
  loading,
  placeholder,
  width,
  ...restProps
}) => {
  const otherProps = {};
  if (typeof onSearch === 'function') {
    Object.assign(otherProps, {
      onSearch: debounce(onSearch, 500),
    });
  }
  return (
    <Form.Item label={label} name={name}>
      <Select
        allowClear
        getPopupContainer={triggerNode => triggerNode.parentElement}
        placeholder={placeholder}
        style={{ width }}
        {...otherProps}
        {...restProps}
        showSearch
        filterOption={false}
        notFoundContent={loading ? <Spin size="small" /> : null}
      >
        {
          list.map((item) => (
            <Select.Option key={item.value} value={item.value}>
              {item.text}
            </Select.Option>
          ))
        }
      </Select>
    </Form.Item>
  );
};

App.defaultProps = {
  list: [],
  placeholder: '请输入',
  width: '100%',
  onSearch: noop,
};

App.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  list: PropTypes.array,
  onSearch: PropTypes.func,
  loading: PropTypes.bool,
  placeholder: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default App;
