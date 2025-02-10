import { CheckBoxes } from '../../../lib/types.ts';
import { customEnrichmentModalStore } from './store';
import { SnackbarStatus } from './types.ts';

export function openExportDrawer(): void {
	customEnrichmentModalStore.openModal();
}

export function setDefaultState(): void {
	customEnrichmentModalStore.setDefaultState();
}

export function handleChangeCheckboxes(name: keyof CheckBoxes): void {
	customEnrichmentModalStore.handleChangeCheckBoxes(name);
}

export function handleCloseModal(): void {
	customEnrichmentModalStore.closeModal();
}

export function setSnackbarStatus(status: SnackbarStatus): void {
	customEnrichmentModalStore.setSnackbarStatus(status);
}
