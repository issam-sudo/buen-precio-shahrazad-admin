import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { ShahrazadAdminsComponent } from 'src/app/pages/shahrazad-admins/shahrazad-admins.component';
import { ShahrazadUsersComponent } from 'src/app/pages/shahrazad-users/shahrazad-users.component';
import { ShahrazadCategoryComponent } from 'src/app/pages/shahrazad-category/shahrazad-category.component';
import { ShahrazadSubCategoryComponent } from 'src/app/pages/shahrazad-sub-category/shahrazad-sub-category.component';
import { ShahrazadTagsComponent } from 'src/app/pages/shahrazad-tags/shahrazad-tags.component';
import { ShahrazadBrandsComponent } from 'src/app/pages/shahrazad-brands/shahrazad-brands.component';
import { ShahrazadShopComponent } from 'src/app/pages/shahrazad-shop/shahrazad-shop.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'admin',          component: ShahrazadAdminsComponent },
    { path: 'user',           component: ShahrazadUsersComponent },
    { path: 'category',          component: ShahrazadCategoryComponent },
    { path: 'subcategory',           component: ShahrazadSubCategoryComponent },
    { path: 'tag',          component: ShahrazadTagsComponent },
    { path: 'marque',           component: ShahrazadBrandsComponent },
    { path: 'achat',           component: ShahrazadShopComponent }

];
