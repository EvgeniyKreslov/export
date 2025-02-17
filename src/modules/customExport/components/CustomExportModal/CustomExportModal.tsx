import React from "react";
import { inject, observer } from "mobx-react";
import customStore from "../../entities/CustomExportStore";
import { i18n } from "@universe-platform/sdk";
import { Button, DropDown, Modal, SIZE, Wizard } from "@universe-platform/uikit";
import Step1 from "../Steps/Step1/Step1";
import Step2 from "../Steps/Step2/Step2";
import Step3 from "../Steps/Step3/Step3";
import { importData } from "../../api/api";

const { Item } = DropDown;

@inject((stores: any) => {
  return {
    ...stores,
    customStore,
  }
})
@observer
export class ImportODS extends React.Component<any> {

  handleClick = async (value: string) => {

    const { customStore } = this.props;
    const { setIsModalOpen, setFileType } = customStore;

    await setFileType(value)

    if(value === 'xlxs') {
      console.log('click XLXS and open old Modal') // здесь дёргаем вызов "старой" модалки
    } else {
      setIsModalOpen(true)
    }
  };

  handleCloseModal = () => {
    const { customStore } = this.props;
    const { setIsModalOpen } = customStore;

    setIsModalOpen(false)
  };

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