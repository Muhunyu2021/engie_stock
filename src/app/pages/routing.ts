import { Routes } from '@angular/router';
import {ConsignmentsTransitComponent} from "./consignments-transit/consignments-transit.component";
import {InventorizationComponent} from "./inventorization/inventorization.component";
import {StockOrderingComponent} from "./stock-ordering/stock-ordering.component";
import {StockDispatchComponent} from "./stock-dispatch/stock-dispatch.component";
import {InventorizationManagerComponent} from "./inventorization-manager/inventorization-manager.component";

const Routing: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'builder',
    loadChildren: () =>
      import('./builder/builder.module').then((m) => m.BuilderModule),
  },
  {
    path: 'crafted/pages/profile',
    loadChildren: () =>
      import('../modules/profile/profile.module').then((m) => m.ProfileModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'crafted/account',
    loadChildren: () =>
      import('../modules/account/account.module').then((m) => m.AccountModule),
    data: { layout: 'dark-header' },
  },
  //custom pages
  {
    path: 'git',
     component: ConsignmentsTransitComponent
},
  {
    path: 'inventorization',
    component: InventorizationComponent
  },
  {
    path: 'stock_ordering',
    component: StockOrderingComponent
  },
  {
    path: 'stock_dispatch',
    component: StockDispatchComponent
  },
  {
    path: 'inventorization_manager',
    component: InventorizationManagerComponent
  },

  //end custom pages
  {
    path: 'crafted/pages/wizards',
    loadChildren: () =>
      import('../modules/wizards/wizards.module').then((m) => m.WizardsModule),
    data: { layout: 'light-header' },
  },
  {
    path: 'crafted/widgets',
    loadChildren: () =>
      import('../modules/widgets-examples/widgets-examples.module').then(
        (m) => m.WidgetsExamplesModule
      ),
    data: { layout: 'light-header' },
  },
  {
    path: 'apps/chat',
    loadChildren: () =>
      import('../modules/apps/chat/chat.module').then((m) => m.ChatModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
