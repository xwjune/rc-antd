/**
 * 下拉框
 *
 * @param {string} name - 字段名
 * @param {string} label - 标签的文本
 * @param {string} list - 选择项
 * @param {string} [placeholder='请输入'] - 描述文字
 * @param {string|number} [width='100%'] - 宽度
 * @param {boolean} [showSearch=false] - 使单选模式可搜索
 * @param {any} 其他参数参考antd-Select组件
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Select } from 'antd';

const App = ({
  name,
  label,
  list,
  placeholder,
  width,
  showSearch,
  ...restProps
}) => {
  const searchProps = {};
  if (showSearch) {
    Object.assign(searchProps, {
      showSearch: true,
      optionFilterProp: 'children',
      filterOption: (input, option) => {
        if (option.props && option.props.children) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }
        return false;
      }
    });
  }
  return (
    <Form.Item label={label} name={name}>
      <Select
        allowClear
        getPopupContainer={triggerNode => triggerNode.parentElement}
        placeholder={placeholder}
        style={{ width }}
        {...searchProps}
        {...restProps}
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
  showSearch: false,
  placeholder: '请选择',
  width: '100%',
};

App.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  list: PropTypes.array,
  showSearch: PropTypes.bool,
  placeholder: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default App;
