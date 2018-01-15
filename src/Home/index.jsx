import React from 'react';
import { Modal } from 'antd';
import Element from 'rc-scroll-anim/lib/ScrollElement';
import qrcode from 'qrcode-js';
import DocumentTitle from 'react-document-title';
// import { enquireScreen } from 'enquire-js';
import Header from './Header';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page4 from './Page4';
import Page5 from './Page5';
import Footer from './Footer';
import './static/style';

import * as pageData from './data';

const { code, url } = pageData;

// enquireScreen((b) => {
//   isMobile = b;
// });


class Home extends React.PureComponent {
  state = {
    noTop: true,
    visible: false,
  };
  componentDidMount() {
    // enquireScreen((b) => {
    //   this.setState({
    //     isMobile: b,
    //   });
    // });
  }

  onChange = ({ mode }) => {
    // 只判断 screen0 就可以了。。
    this.setState({ noTop: mode === 'enter' });
  }
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  render() {
    const codeBase64 = qrcode.toDataURL(url, 7);
    const { noTop, visible } = this.state;
    return (
      [
        <Header key="nav" noTop={noTop} isMobile={false} />,
        <Element key="banner" id="screen0" onChange={this.onChange}>
          <Banner key="banner" showModal={this.showModal} isMobile={false} />
        </Element>,
        <Page1 id="screen1" key="page1" />,
        <Page2 id="screen2" key="page2" isMobile={false} />,
        <Page5 key="page5" isMobile={false} showModal={this.showModal} />,
        <Page4 key="page4" isMobile={false} />,
        <Footer key="footer" isMobile={false} />,
        <Modal
          title={null}
          visible={visible}
          onCancel={this.handleCancel}
          footer={null}
          width={400}
          className="qrcode-modal"
          wrapClassName="vertical-center-modal"
          key="modal"
        >
          <p><img src={codeBase64} /></p>
          <p>{code}</p>
        </Modal>,
        <DocumentTitle title="贷款组前端团队2017回顾" key="title" />,
      ]
    );
  }
}
export default Home;

