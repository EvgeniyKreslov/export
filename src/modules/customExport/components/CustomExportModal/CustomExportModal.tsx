import React from "react";
import { inject, observer } from "mobx-react";
import customStore from "../../entities/CustomExportStore";
// import { i18n } from "@universe-platform/sdk";
import { Button, DropDown, Modal, SIZE, Wizard } from "@universe-platform/uikit";
import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";

const { Item } = DropDown;

@inject((stores: any) => {
  return {
    ...stores,
    customStore,
  }
})
@observer
export class MyComponent extends React.Component<any> {
  //  get dataRecord () {
  //     return this.props.dataCardStore.dataRecordStore.getDataEntity();
  //  }

  //  get metaRecord () {
  //     return this.props.dataCardStore.metaRecordStore.getMetaEntity();
  //  }

  //  handleDelete = (wipe: boolean) => {
  //    return this.props.dataCardStore.handleDelete(wipe);
  //   };

  handleClick = async (value: string) => {

    const { customStore } = this.props;
    const { setIsModalOpen, setFileType } = customStore;

    await setFileType(value)

    if(value === 'xlxs') {
      console.log('click XLXS and open old Modal')
    } else {
      setIsModalOpen(true)
    }
  };

  handleCloseModal = () => {
    const { customStore } = this.props;
    const { setIsModalOpen } = customStore;

    setIsModalOpen(false)
  };

  onSubmit = () => {}

   override render () {
    const { customStore } = this.props;

    const { something, isModalOpen } = customStore;

      return (
        <>
          <DropDown target={<div><Button>Выберите формат</Button></div>}>
            <Item onClick={() => {this.handleClick('xlxs')}}>XLSX</Item>
            <Item onClick={() => {this.handleClick('ods')}}>ODS</Item>
          </DropDown>
          <Modal
            isOpen={isModalOpen}
            onClose={this.handleCloseModal}
            header={something}
            size={SIZE.MIDDLE}
          >
            <Wizard
              steps={[
                {
                  component: <Step1
                    // checkboxes={customEnrichmentModalStore.checkboxes} onChange={onChange}
                    // hasRelations={hasRelations}
                     />,
                  // label: i18n.t('customEnrichmentModal>firstStep'),
                  label: 'Параметры экспорта',
                  name: 'options'
                },
                {
                  component: <Step2 />,
                  label: 'Подтверждение',
                  name: 'confirm'
                }
              ]}
              onSubmit={this.onSubmit}
            />
          </Modal>
          {/* <CustomEnrichmentModal /> */}
        </>
      );
   }
}