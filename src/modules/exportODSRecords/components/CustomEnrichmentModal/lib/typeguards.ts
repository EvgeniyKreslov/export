import { CheckBoxes } from '../../../lib/types';

const checkBoxesKeys = new Set(['exportPublishedOnly', 'includeRelations', 'exportClassifications', 'exportActiveVersionClassifications', 'exportVisibleOnly']);

export function isKeyofCheckboxes(value: unknown): value is keyof CheckBoxes {
	return !!value && typeof value === 'string' && checkBoxesKeys.has(value);
}
