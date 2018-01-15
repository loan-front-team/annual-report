import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import { TweenOneGroup } from 'rc-tween-one';

const { Link } = ScrollAnim;

export default class Header extends React.PureComponent {
  getHeaderChildToRender = () => (
    [
      <Link className="logo" to="screen0" toHash={false} key="logo" />,
      <nav key="nav">
      </nav>,
    ]);
  render() {
    const { noTop, isMobile } = this.props;
    const header = this.getHeaderChildToRender();
    const headerFix = this.getHeaderChildToRender();
    return (
      <header key="nav" >
        <div className="site-top">
          {header}
        </div>
        <TweenOneGroup
          component=""
          enter={{ y: -80, opacity: 0, type: 'from' }}
          leave={{ y: -80, opacity: 0 }}
        >
          {!noTop && !isMobile && (
            <div className="site-top no-banner" key="nav">
              {headerFix}
            </div>)}
        </TweenOneGroup>
      </header>
    );
  }
}
