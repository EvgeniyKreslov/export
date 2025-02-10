import { SearchStore } from './types';

export function getColumnsIdsBySearchStore(searchStore: SearchStore): string[] {
	return searchStore.tableColumns
		.map(column => column.id)
		// первый это колонка с checkboxes и она нам не нужна в запросе
		.slice(1);
}

export function getSelectedHitsIds(searchStore: SearchStore): string[] {
	const searchHits = searchStore.searchResult.checkedSearchHits.values();
	const selectedHitsIds: string[] = [];

	for (const hit of searchHits) {
		// отрезаем неопределенное и одинаковое у всех объектов окончание от id
		const id = hit.id.getOriginalValue().slice(0, 36);

		selectedHitsIds.push(id);
	}

	return selectedHitsIds;
}

export function sortOrderByContent({ spans, content, order, enclosure }: {
	spans: HTMLSpanElement[],
	content: string[],
	order: string,
	enclosure: 1 | 2
}): void {
	const span = spans.find(span => span.textContent && content.includes(span.textContent));

	if (!span) {
		return;
	}

	const spanParent = enclosure > 1 ? span.parentElement?.parentElement : span.parentElement;

	if (!spanParent) {
		return;
	}

	spanParent.style.order = order;
}
