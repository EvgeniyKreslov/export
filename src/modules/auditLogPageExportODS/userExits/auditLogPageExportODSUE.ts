import {inject} from 'mobx-react';
import {RouteItem} from '@universe-platform/router';
import {RouterStore} from '@universe-platform/sdk';

import {getOverridenAuditLogPage} from '../hoc/getOverridenAuditLogPage';


function routeFunc () {
	return {
			pathname: '/fake'
	};
}


declare global {
		// @ts-ignore
		const Universe: {
				RouterStore: RouterStore;
		};

		namespace UniverseRouter {
				export interface IRouteMeta {
						ImageSearchPage: RouteItem<typeof routeFunc>;
						AuditLogPage: RouteItem<any>;
						DataSearchStores: RouteItem<typeof routeFunc>
				}
		}

}



const routerStore = Universe.RouterStore;

// @ts-ignore
const AuditLogPageLazyLoader = routerStore.registeredRoutesMap.AuditLogPage.lazyComponent;

routerStore.overrideRoute('AuditLogPage', {
		lazyComponent: async () => {
				const AuditLogPageCtor = await AuditLogPageLazyLoader();

				return {
						// @ts-ignore
						default: inject('routerStore')(getOverridenAuditLogPage(AuditLogPageCtor.default))
				};
		}
});
