import React from 'react';
import { action, computed, observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import { i18n } from '@universe-platform/sdk';
import { Modal, SIZE, Wizard } from '@universe-platform/uikit';

import { importData } from '../../api/api';
import customStore from '../../entities/CustomExportStore';
import { importObserver } from '../../lib/importObserver';
import { DropDown } from '../../ui';
import Step1 from '../Steps/Step1/Step1';
import Step2 from '../Steps/Step2/Step2';
import Step3 from '../Steps/Step3/Step3';

@inject((stores: any) => {
	return {
		...stores,
		customStore
	};
})
@observer
export class CustomImportODS extends React.Component<any> {
	@observable isOpenModal: boolean = false;
	@observable anchorEl: HTMLElement | null = null;

	@computed
	get canBeMount() {
		return Boolean(this.anchorEl);
	}

	@computed
	get isDisabled(): boolean {
		 return !this.props.routerStore?.currentPageComponent?.searchStore?.innerColumnsStore?.entity?.displayName?.value?.value;
	}

	@action.bound
	handleClick = async (value: string): Promise<void> => {
		const { customStore } = this.props;
		const { setIsModalOpen, setIsDropDownOpen, setFileType } = customStore;

		await setFileType(value);

		if (value === 'xlxs') {
				this.anchorEl?.click();
		} else {
				setIsModalOpen(true);
		}

		setIsDropDownOpen(false);
	};

	@action.bound
	handleCloseModal = (): void => {
		const { customStore } = this.props;
		const { setIsModalOpen } = customStore;

		setIsModalOpen(false);
	};

	@action.bound
	setAnchor = (element: HTMLElement): void => {
		this.anchorEl = element;
	};

	override componentDidMount() {
		if (this.anchorEl) {
				return;
		}

		setTimeout(() => importObserver(this.setAnchor), 100);
	}

	override render() {
		const { customStore } = this.props;
		const { isModalOpen } = customStore;

		return (
			<>
				<DropDown
					disabled={this.isDisabled}
					onClickXLXS={async () => {
						await this.handleClick('xlxs');
					}}
					onClickODS={async () => {
					await	this.handleClick('ods');
					}}
				/>
				<Modal
					isOpen={isModalOpen as boolean}
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
								component: <Step3 store={customStore} />,
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
