import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AuthGuardService } from '../../services/auth-guard/auth-guard.service';

export const AdminLayoutRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_EDITOR']
    }
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    canActivate: [AuthGuardService],
    data: {
      roles: ['ROLE_ADMIN']
    }
  },
  {
    path: 'tables',
    component: TablesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'icons',
    component: IconsComponent,
    canActivate: [AuthGuardService],
    data: {
      roles: ['ROLE_ADMIN']
    }
  },
  {
    path: 'maps',
    component: MapsComponent,
    canActivate: [AuthGuardService],
    data: {
      roles: ['ROLE_ADMIN']
    }
  }
];
