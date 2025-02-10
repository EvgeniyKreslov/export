import { RouterStore } from '@universe-platform/sdk';

import { SearchStore } from '../../../lib/types';

export type ResponseCustom = {
	details: {
		'info': string[],
		'warning': string[],
		'error': string[],
	},
	success: boolean,
	content: {
		id: number,
		jobDefinitionId: null | string,
		jobName: string,
		startTime: string,
		endTime: string | null,
		state: {
			status: string,
			exitCode: string,
			exitDescription: string
		},
		restartable: boolean,
		stepExecutions: string[]
	}
}

export type CustomEnrichmentModalProps = {
	routerStore: RouterStore;
	searchStore: SearchStore;
}

export enum SnackbarStatus {
	SUCCESS = 'success',
	FAILED = 'failed',
	NO_RESPONSE = 'noResponse'
}
