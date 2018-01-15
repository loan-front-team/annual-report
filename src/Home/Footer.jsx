import React from 'react';
import * as pageData from './data';

const { footer } = pageData;

export default function Footer(props) {
  return (
    <footer className="footer">
      {props.isMobile ? null : (
        <div className="links">
        </div>)}
      <span className="logo" key="logo" />
      <span key="logo-name">{footer.logoName}</span>
      <i key="slice" />
      <span>{props.isMobile ? footer.name.split('©').pop() : footer.name}</span>
    </footer>
  );
}
