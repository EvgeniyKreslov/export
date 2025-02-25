import React from 'react';
import {action, computed, observable} from 'mobx';
import {inject, observer} from 'mobx-react';
// import { i18n } from "@universe-platform/sdk";
import {
  // Button,
  // DropDown,
  Modal,
  SIZE,
  Wizard
} from '@universe-platform/uikit';

import customStore from '../../entities/CustomExportStore';
import { importObserver } from '../../lib/importObserver';
import Step1 from '../Steps/Step1/Step1';
import Step2 from '../Steps/Step2/Step2';
import { i18n } from '@universe-platform/sdk';
import { importData } from '../../api/api';
import Step3 from '../Steps/Step3/Step3';
import { DropDown } from '../../ui';

// const {Item} = DropDown;

@inject((stores: any) => {
  return {
    ...stores,
    customStore
  };
})
@observer
export class CustomImportODS extends React.Component<any> {

  @observable anchorEl: HTMLElement | null = null;

  handleClick = async (value: string): Promise<void> => {
    const {customStore} = this.props;
    const {setIsModalOpen, setIsDropDownOpen, setFileType} = customStore;

    await setFileType(value);

    console.log('value', value)

    if (value === 'xlxs') {
      this.anchorEl?.click()
    } else {
      setIsModalOpen(true);
    }

    setIsDropDownOpen(false)
  };

  handleCloseModal = () => {
    const {customStore} = this.props;
    const {setIsModalOpen} = customStore;

    setIsModalOpen(false);
  };

  onSubmit = () => {
  };

  @action.bound
  setAnchor = (element: HTMLElement) => {
    this.anchorEl = element;
  };

  @computed
  get canBeMount () {
    return Boolean(this.anchorEl);
  }

  mountCustomBtn = () => {
    const btn = document.createElement('button');

    btn.classList.add('custom-btn');
    btn.innerText = 'TEST';
  };

  override componentDidMount () {
    if (this.anchorEl) {
      return;
    }

    setTimeout(() => importObserver(this.setAnchor), 100);
  }

  override render () {
    const {customStore} = this.props;
    const {isModalOpen} = customStore;

    return (
      <>
          {/* <DropDown
            target={
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 14,
                  backgroundColor: '#e3e3e3',
                  position: 'absolute',
                  top: 65,
                  right: 15,
                }}
              >
                <div style={{
                  width: 15,
                  height: 15,
                  position: 'relative',
                  top: 6,
                  left: 8
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 414.21 419.33" fill="#666666">
                    <path d="M121.86,265.73h0a13,13,0,0,0-4.1,9.47,11.43,11.43,0,0,0,4.1,9l52.22,52.74a23.3,23.3,0,0,0,4.35,2.56,11.91,11.91,0,0,0,4.87,1,13.78,13.78,0,0,0,5.12-1A20.73,20.73,0,0,0,193,336.9,14.33,14.33,0,0,0,193,318l-30.21-29.69H401.15a13.06,13.06,0,0,0,13.06-13.06h0a13.06,13.06,0,0,0-13.06-13.06H162.82L193,231.94a14,14,0,0,0,3.58-9.48,12.16,12.16,0,0,0-3.58-9,13,13,0,0,0-18.95,0Z"></path><path d="M0,38.91v341a38,38,0,0,0,11.52,27.91,38,38,0,0,0,27.91,11.52H301.57A39.33,39.33,0,0,0,341,379.9V327.68a13.31,13.31,0,1,0-26.62,0V379.9a13.12,13.12,0,0,1-13.31,13.32H39.43A13.12,13.12,0,0,1,26.11,379.9v-341A12.29,12.29,0,0,1,30,30a12.88,12.88,0,0,1,9.48-3.84H210.18V91.65a39.33,39.33,0,0,0,39.42,39.42h65v91.65a12.29,12.29,0,0,0,3.84,9,13.6,13.6,0,0,0,18.94,0,12.29,12.29,0,0,0,3.84-9V104.45a11.91,11.91,0,0,0-1-4.87,23.3,23.3,0,0,0-2.56-4.35L245.51,3.58a7.79,7.79,0,0,0-4.1-2.81A17.81,17.81,0,0,0,236.29,0H39.43A38,38,0,0,0,11.52,11.52,37.41,37.41,0,0,0,0,38.91Zm236-7.68,73.22,73.22H248.83A13.12,13.12,0,0,1,236,91.65Z">
                    </path>
                  </svg>
                </div>
              </div>
            }
          >
            <Item
              onClick={() => {
                this.handleClick('xlxs');
              }}>{i18n.t('dropdown>xlsx')}
            </Item>
            <Item
              onClick={() => {
                this.handleClick('ods');
              }}>{i18n.t('dropdown>ods')}
            </Item>
          </DropDown> */}
          <DropDown
            onClickXLXS={() => {
              this.handleClick('xlxs');
            }}
            onClickODS={() => {
              this.handleClick('ods');
            }}
          />
          <Modal
              isOpen={isModalOpen}
              onClose={this.handleCloseModal}
              header={i18n.t('modal>title')}
              size={SIZE.MIDDLE}
      >
              <Wizard
              steps={[
                {
                  component: <Step1 />,
                  label: i18n.t('firstStep>title'),
                  name: 'options'
                },
                {
                  component: <Step2 />,
                  label: i18n.t('secondStep>title'),
                  name: 'prepation'
                },
                {
                  component: <Step3 store={customStore}/>,
                  label: i18n.t('thirdStep>title'),
                  name: 'import'
                }
              ]}
              onSubmit={importData}
            />
          </Modal>
      </>
    );
  }
}