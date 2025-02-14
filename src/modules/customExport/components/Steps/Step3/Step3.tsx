import React from 'react';
import { i18n } from '@universe-platform/sdk';
import { Wizard } from '@universe-platform/uikit';
import { ICustomStore } from '../../../lib/types';
import { FileInput } from '../../../ui';

import './step3.scss';

interface IProps {
  store: ICustomStore
}

const Step3 = ({store}: IProps) => {
  
  return (
    <>
      <Wizard.Navigation />
      <Wizard.Content>
        <div className='container'>
          <div>{i18n.t('thirdStep>text1')}</div>
          <div>{i18n.t('thirdStep>text2')}</div>
          <div className='file-input'>
            <FileInput store={store}/>
          </div>
        </div>
      </Wizard.Content>
      <Wizard.Footer
        nextText={i18n.t('navigation>next')}
        prevText={i18n.t('navigation>prev')}
        submitText={i18n.t('navigation>submit')}
      />
    </>
  );
}

export default Step3;
