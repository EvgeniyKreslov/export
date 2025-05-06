// import customImportUE from './modules/ODSimport';

import Ratings from './FakeComponent';
import StockHolders from './modules/ODSimport/components/StockHolders/Stockholders';
import './modules/ODSimport/lib/locales';

console.log('DataCardTabItem')

export default {
  userExits: [
    // { ...customImportUE },
    {
      moduleId: 'stakeHolder',
      type: 'DataCardTabItem',
      active: true,
      system: false,
      meta: {
        tab: {
            key: 'stakeHolder',
            tab: () => 'Ответственные лица',
            order: 30
        },
        position: 'left'
    },
      resolver: (store: any) => {
        console.log('stakeHolder store --- ', store)
          // return !Boolean(store.entityName);
          return true;
      },
      component: StockHolders
    },
    {
      moduleId: 'rating',
      type: 'DataCardTabItem',
      active: true,
      system: false,
      meta: {
        tab: {
            key: 'rating',
            tab: () => '5 звёзд',
            order: 30
        },
        position: 'right'
      },
      resolver: (store: any) => {
        console.log('rating store --- ', store)
          // return !Boolean(store.entityName);
          return true;
      },
      component: Ratings
    }
  ]
};
