import React from 'react';
// import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import * as pageData from './data';

const { page2 } = pageData;

export default function Page2(props) {
  const { isMobile } = props;
  const timelineLen = page2.timeline.length;
  const children = page2.timeline.map((data, i) => {
    const contents = data.content.map((item, index) => (
      typeof item === 'string' ? <p key={index.toString()} >{item}</p> : <a key={index.toString()} href={item.link}>{item.text}&nbsp;&nbsp;</a>
    ));
    const textWrapper = (
      <QueueAnim
        className="content-wrapper"
        key="text"
        leaveReverse
        dleay={isMobile ? [0, 100] : 0}
      >
        <div className="time" key="time">{data.time}</div>
        <h2 key="title">{data.title}</h2>
        {contents}
      </QueueAnim>
    );
    const other = !data.post ? 'other' : '';
    const pointStartOrEndClass = i === 0 || i === timelineLen - 1 ? 'start-or-end' : other;
    return (
      <div key={i.toString()} className="block-wrapper">
        <QueueAnim
          className="image-wrapper"
          key="image"
          type={isMobile ? 'right' : 'bottom'}
          leaveReverse
          delay={isMobile ? [100, 0] : 0}
        >
          <div key="image" className={`image${data.double ? ' double' : ''}`}>
            <img src={data.src} />
          </div>
          <div key="name" className="name-wrapper">
            <p className="name" key="name">{data.name}</p>
            {data.post ?
              <p key="post">{isMobile ? '- ' : ''}{data.post}</p> : null}
          </div>
        </QueueAnim>
        <TweenOne
          animation={{ y: 15, opacity: 0, type: 'from' }}
          className={`point ${pointStartOrEndClass}`}
          key="point"
          component="i"
        />
        {!isMobile && textWrapper}
      </div>
    );
  });
  return (
    <div className="page-wrapper page2" id={props.id}>
      <div className="page title">
        <i key="i" />
        <h1 key="h1">{page2.title}</h1>
        <div key="timeline" className="timeline">
          {children}
        </div>
      </div>
    </div>
  );
}
