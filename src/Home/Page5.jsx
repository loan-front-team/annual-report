import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import * as pageData from './data';

export default function Page5(props) {
  return (
    <OverPack className="page-wrapper page5" id={props.id}>
      <QueueAnim type="bottom" leaveReverse key="page" className="page">
        <i key="i" />
        <h1 key="title">DBOX</h1>
        <p key="p">更多精彩期待请关注<a target="blank" href="https://zhuanlan.zhihu.com/xtech">UED协会</a>，欢迎你的加入</p>
        <div key="button" style={{ textAlign: 'center' }}>
        </div>
      </QueueAnim>
    </OverPack>
  );
}
