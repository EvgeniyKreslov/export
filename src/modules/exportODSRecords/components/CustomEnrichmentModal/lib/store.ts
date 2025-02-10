import { action, observable } from 'mobx';

import { CheckBoxes } from '../../../lib/types';
import { SnackbarStatus } from './types';

class CustomEnrichmentModalStore {
	@observable isOpen: boolean = false;
	@observable snackbarStatus: SnackbarStatus | null = null;
	@observable isLoading: boolean = false;
	@observable checkboxes: CheckBoxes = {
		exportPublishedOnly: true,
		includeRelations: false,
		exportClassifications: false,
		exportActiveVersionClassifications: false,
		exportVisibleOnly: false
	};

	@action setLoading(isLoading: boolean): void {
		this.isLoading = isLoading;
	}

	@action
	openModal(): void {
		this.isOpen = true;
	}

	@action
	setSnackbarStatus(status: SnackbarStatus): void {
		this.snackbarStatus = status;
	}

	@action
	closeModal(): void {
		this.isOpen = false;
	}

	@action

	@action
	handleChangeCheckBoxes(name: keyof CheckBoxes): void {
		this.checkboxes[name] = !this.checkboxes[name];
	}

	@action
	setDefaultState(): void {
		this.isOpen = false;
		this.isLoading = false;
		this.checkboxes = {
			exportPublishedOnly: true,
			includeRelations: false,
			exportClassifications: false,
			exportActiveVersionClassifications: false,
			exportVisibleOnly: false
		};
	}
}

export const customEnrichmentModalStore = new CustomEnrichmentModalStore();
