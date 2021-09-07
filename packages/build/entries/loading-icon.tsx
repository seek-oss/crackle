import React from 'react';

const size = 60;

const animationStyles = `
.lds-facebook {
  display: inline-block;
  position: relative;
  width: ${size}px;
  height: ${size}px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: ${size * 0.1}px;
  width: ${size * 0.2}px;
  background: rgba(2,2,2,0.6);
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: ${size * 0.1}px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: ${size * 0.4}px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: ${size * 0.7}px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: ${size * 0.1}px;
    height: ${size * 0.8}px;
  }
  50%, 100% {
    top: ${size * 0.3}px;
    height: ${size * 0.4}px;
  }
}
`;

export const LoadingIcon = () => (
  <>
    <style
      data-module-loading-icon="style"
      type="text/css"
      dangerouslySetInnerHTML={{
        __html: animationStyles,
      }}
    />
    <div
      data-module-loading-icon="html"
      style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        padding: '10px',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div className="lds-facebook">
        <div />
        <div />
        <div />
      </div>
    </div>
  </>
);
