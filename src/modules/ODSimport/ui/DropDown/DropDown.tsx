import React, { FC, useEffect, useState } from 'react';
import { i18n } from '@universe-platform/sdk';

interface IProps {
  disabled?: boolean;
  onClickXLXS(): void,
  onClickODS(): void,
}

const containerStyle = {
  position: 'relative',
  top: 20,
  right: 120,
  cursor: 'pointer'
};

const divStyle = {
  width: 160,
  height: 25,
  alignContent: 'center',
  marginTop: 20,
  paddingLeft: 5,
  backgroundColor: '#e3e3e3',
  border: '1px solid #cccccc',
  borderRadius: '2px'
};

const DropDown:FC<IProps> = ({ disabled, onClickXLXS, onClickODS }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = (e: MouseEvent) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (isOpen && e?.target?.id !== 'container') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const root = document.querySelector('#root');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    root?.addEventListener('click', handleClickOutside);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return () => root?.removeEventListener('click', handleClickOutside);
  }, []);

  const handleClick = () => {
     setIsOpen(!isOpen);
  };

  return (
    <div
      id='container'
      style={{
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#e3e3e3',
        position: 'absolute',
        top: 65,
        right: 15,
        pointerEvents: disabled ? 'none' : 'all',
        cursor: disabled ? 'not-allowed' : 'pointer'
      }}
      onClick={handleClick}
    >
      <div
style={{
        width: 15,
        height: 15,
        position: 'relative',
        top: 6,
        left: 8
        }}
      >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 414.21 419.33' fill='#666666'>
          <path d='M121.86,265.73h0a13,13,0,0,0-4.1,9.47,11.43,11.43,0,0,0,4.1,9l52.22,52.74a23.3,23.3,0,0,0,4.35,2.56,11.91,11.91,0,0,0,4.87,1,13.78,13.78,0,0,0,5.12-1A20.73,20.73,0,0,0,193,336.9,14.33,14.33,0,0,0,193,318l-30.21-29.69H401.15a13.06,13.06,0,0,0,13.06-13.06h0a13.06,13.06,0,0,0-13.06-13.06H162.82L193,231.94a14,14,0,0,0,3.58-9.48,12.16,12.16,0,0,0-3.58-9,13,13,0,0,0-18.95,0Z' /><path d='M0,38.91v341a38,38,0,0,0,11.52,27.91,38,38,0,0,0,27.91,11.52H301.57A39.33,39.33,0,0,0,341,379.9V327.68a13.31,13.31,0,1,0-26.62,0V379.9a13.12,13.12,0,0,1-13.31,13.32H39.43A13.12,13.12,0,0,1,26.11,379.9v-341A12.29,12.29,0,0,1,30,30a12.88,12.88,0,0,1,9.48-3.84H210.18V91.65a39.33,39.33,0,0,0,39.42,39.42h65v91.65a12.29,12.29,0,0,0,3.84,9,13.6,13.6,0,0,0,18.94,0,12.29,12.29,0,0,0,3.84-9V104.45a11.91,11.91,0,0,0-1-4.87,23.3,23.3,0,0,0-2.56-4.35L245.51,3.58a7.79,7.79,0,0,0-4.1-2.81A17.81,17.81,0,0,0,236.29,0H39.43A38,38,0,0,0,11.52,11.52,37.41,37.41,0,0,0,0,38.91Zm236-7.68,73.22,73.22H248.83A13.12,13.12,0,0,1,236,91.65Z' />
        </svg>
      </div>
      {/* @ts-ignore */}
      {isOpen && <div style={{ ...containerStyle }}>
        {/* @ts-ignore */}
        <div
style={{ ...divStyle, marginTop: 0 }} onClick={()=>{
          onClickXLXS();
        }}>{i18n.t('dropdown>xlsx')}
        </div>
        {/* @ts-ignore */}
        <div style={{ ...divStyle, marginTop: 0 }} onClick={onClickODS}>{i18n.t('dropdown>ods')}</div>
                 </div>}
    </div>
  );
};

export default DropDown;
