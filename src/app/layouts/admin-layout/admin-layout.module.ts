import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';

import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShahrazadHeaderComponent } from 'src/app/pages/shahrazad-header/shahrazad-header.component';
import { ShahrazadAdminsComponent } from 'src/app/pages/shahrazad-admins/shahrazad-admins.component';
import { ShahrazadBrandsComponent } from 'src/app/pages/shahrazad-brands/shahrazad-brands.component';
import { ShahrazadCategoryComponent } from 'src/app/pages/shahrazad-category/shahrazad-category.component';
import { ShahrazadHomeComponent } from 'src/app/pages/shahrazad-home/shahrazad-home.component';
import { ShahrazadShopComponent } from 'src/app/pages/shahrazad-shop/shahrazad-shop.component';
import { ShahrazadSubCategoryComponent } from 'src/app/pages/shahrazad-sub-category/shahrazad-sub-category.component';
import { ShahrazadTagsComponent } from 'src/app/pages/shahrazad-tags/shahrazad-tags.component';
import { ShahrazadUsersComponent } from 'src/app/pages/shahrazad-users/shahrazad-users.component';
// import { ToastrModule } from 'ngx-toastr';
import {NgApexchartsModule} from 'ng-apexcharts'
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ShahrazadStocksComponent } from 'src/app/pages/shahrazad-stocks/shahrazad-stocks.component';
import { ShahrazadBlogsComponent } from 'src/app/pages/shahrazad-blogs/shahrazad-blogs.component';
import { ShahrazadFaqsComponent } from 'src/app/pages/shahrazad-faqs/shahrazad-faqs.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    ShahrazadHeaderComponent,
    ShahrazadUsersComponent,
    ShahrazadAdminsComponent,
    ShahrazadCategoryComponent,
    ShahrazadSubCategoryComponent,
    ShahrazadTagsComponent,
    ShahrazadBrandsComponent,
    ShahrazadHomeComponent,
    ShahrazadShopComponent,
    ShahrazadBlogsComponent,
    ShahrazadStocksComponent,
    ShahrazadFaqsComponent,
  ]
})

export class AdminLayoutModule {}
