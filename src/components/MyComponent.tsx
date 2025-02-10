// import * as React from "react";

// const MyComponent = (props: any) => {
//   console.log('props', props)

//   return <div>123123123123</div>
// }

// export default MyComponent;

import * as React from 'react';
// import {Button} from '@unidata/uikit';
import {
  i18n,
  // ueModuleManager
} from '@universe-platform/sdk';
import { inject, observer } from 'mobx-react';
import { Modal, SIZE } from '@universe-platform/uikit';
import { action, observable } from 'mobx';


// const t: any = ueModuleManager.getModuleById('data-ee.dataSearchStores')


// function extendClasses<T extends new (...args: any[]) => any>(Store: T) {

//   @inject((stores: any) => {
//     return {...stores}
//   })
//   class DataSearchStore extends Store {

// 		something: string = '123'

// 		// @ts-ignore
// 		constructor(...rest) {
// 			super(rest)
// 			console.log('this', this)
// 		}
//     // // @ts-ignore
//     // public override get ImportWizardButton() {
//     //   return (<div>qweqweqweqwe</div>);
//     // }
//   };

//   return DataSearchStore;
// }

// const { dataSearchStore } = t;
 
// const NewDataSearchStore = extendClasses<any>(dataSearchStore);


interface ICustomStore {
  something: string,
  isModalOpen: boolean,
  setSomething: Function,
  setIsModalOpen: Function
}

class CustomStore implements ICustomStore {
  something = 'something';
  @observable
  isModalOpen = false;

  setSomething = (value: string) => {
    this.something = value
  }

  @action
  setIsModalOpen = (value: boolean) => {
    this.isModalOpen = value
  };
}

const customStore = new CustomStore();
// const newDataSearchStore = new NewDataSearchStore()


@inject((stores: any) => {
  return {
    ...stores,
    customStore,
    // newDataSearchStore
  }
})
@observer
export class MyComponent extends React.Component<any> {
   get dataRecord () {
      return this.props.dataCardStore.dataRecordStore.getDataEntity();
   }

   get metaRecord () {
      return this.props.dataCardStore.metaRecordStore.getMetaEntity();
   }

   handleDelete = (wipe: boolean) => {
     return this.props.dataCardStore.handleDelete(wipe);
    };

    handleClick = () => {
      console.log('this.props', this.props);
    };

    handleCloseModal = () => {
      console.log('close Modal')
      const { customStore } = this.props;

      const { setIsModalOpen } = customStore;

      setIsModalOpen(false)
    }

   override render () {
    const { customStore } = this.props;

    const { something, isModalOpen } = customStore;

      return (
        <>
          {/* <button onClick={() => setIsModalOpen(true)}> */}
          <button onClick={this.handleClick}>
              {i18n.t('test button')}
          </button>
          <div>{isModalOpen}</div>
          <Modal
            isOpen={isModalOpen}
            onClose={this.handleCloseModal}
            header={something}
            size={SIZE.MIDDLE}
          >
            {/* <Wizard
										steps={[
												{
														component: <Step1
																checkboxes={customEnrichmentModalStore.checkboxes} onChange={onChange}
																hasRelations={hasRelations} />,
														label: i18n.t('customEnrichmentModal>firstStep'),
														name: 'options'
												},
												{
														component: <Step2 />,
														label: i18n.t('customEnrichmentModal>secondStep'),
														name: 'confirm'
												}
										]} onSubmit={onSubmit} /> */}
          </Modal>
          {/* <CustomEnrichmentModal /> */}
        </>
      );
   }
}