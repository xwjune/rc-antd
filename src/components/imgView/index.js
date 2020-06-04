/**
 * 图片预览
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';
import { floatUtil } from 'jun-utils';

class ImgView extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    src: PropTypes.string,
  };

  state = {
    visible: false,
    rotateDeg: 0, // 旋转角度
    scaleX: 1, // 缩放比例
  };

  handleShow = () => {
    this.setState({
      visible: true,
      rotateDeg: 0,
      scaleX: 1,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  // 还原
  reset = () => {
    this.setState({
      rotateDeg: 0,
      scaleX: 1,
    });
  };

  // 旋转
  rotateRight = () => {
    this.setState((prev) => ({
      rotateDeg: prev.rotateDeg + 90,
    }));
  };

  // 放大
  big = () => {
    this.setState((prev) => ({
      scaleX: floatUtil.add(prev.scaleX, 0.2),
    }));
  };

  // 缩小
  small = () => {
    const { scaleX } = this.state;
    if (scaleX > 0.2) {
      this.setState((prev) => ({
        scaleX: floatUtil.subtract(prev.scaleX, 0.2),
      }));
    }
  };

  render() {
    const { rotateDeg, scaleX } = this.state;
    const transform = `rotate(${rotateDeg}deg) scale(${scaleX})`;

    return (
      <span>
        <span
          role="button"
          tabIndex="-1"
          onClick={this.handleShow}
        >
          { this.props.children }
        </span>
        <Modal
          title="预览"
          maskClosable={false}
          visible={this.state.visible}
          bodyStyle={{ overflow: 'auto' }} // 防止旋转图片超出容器
          onCancel={this.handleCancel}
          footer={(
            <div>
              <Button type="primary" aria-label="reset" onClick={this.reset}>
                还原
              </Button>
              <Button type="primary" aria-label="rotate" onClick={this.rotateRight}>
                旋转
              </Button>
              <Button type="primary" aria-label="zoom in" onClick={this.big}>
                放大
              </Button>
              <Button type="primary" aria-label="zoom out" onClick={this.small}>
                缩小
              </Button>
            </div>
          )}
        >
          <img
            src={this.props.src}
            alt="图片"
            className="jun-antd-imgview"
            style={{ transform }}
          />
        </Modal>
      </span>
    );
  }
}

export default ImgView;
