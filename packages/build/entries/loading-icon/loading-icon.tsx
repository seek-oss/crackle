import React from 'react';

const animationStyles = `
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 60px;
  height: 60px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #111;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 27px;
    left: 27px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 54px;
    height: 54px;
    opacity: 0;
  }
}`;

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
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>{' '}
    </div>
  </>
);
