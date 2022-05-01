import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { AppRoutes } from './app.routing';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { SharedModule } from './_shared/shared.module';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { API_BASE_URL } from './_shared/components/services/identity-api';
import { environment } from 'src/environments/environment';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminNavbarComponent } from './components/navbars/admin-navbar/admin-navbar.component';
import { CardStatsComponent } from './components/card/card-stats/card-stats.component';
import { HeaderStatsComponent } from './components/headers/header-stats/header-stats.component';
import { FooterAdminComponent } from './components/footers/footer-admin/footer-admin.component';
import { TableDropdownComponent } from './components/dropdown/table-dropdown/table-dropdown.component';
import { CardLineChartComponent } from './components/card/card-line-chart/card-line-chart.component';
import { CardBarChartComponent } from './components/card/card-bar-chart/card-bar-chart.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AddressesComponent } from './modules/tables/addresses/addresses.component';
import { CartsComponent } from './modules/tables/carts/carts.component';
import { CategoriesComponent } from './modules/tables/categories/categories.component';
import { LanguagesComponent } from './modules/tables/languages/languages.component';
import { OrderProductsComponent } from './modules/tables/order-products/order-products.component';
import { OrdersComponent } from './modules/tables/orders/orders.component';
import { PublishersComponent } from './modules/tables/publishers/publishers.component';
import { UsersComponent } from './modules/tables/users/users.component';
import { ProductsComponent } from './modules/tables/products/products.component';
import { ApiService } from './_shared/components/services/api.service';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    AuthLayoutComponent,
    SidebarComponent,
    AdminNavbarComponent,
    CardStatsComponent,
    HeaderStatsComponent,
    FooterAdminComponent,
    TableDropdownComponent,
    CardLineChartComponent,
    CardBarChartComponent,
    AdminLayoutComponent,
    // AddressesComponent,
    // CartsComponent,
    // CategoriesComponent,
    // LanguagesComponent,
    // OrderProductsComponent,
    // OrdersComponent,
    // PublishersComponent,
    // UsersComponent,
    // ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ApiAuthorizationModule,
    AppRoutes,
    SharedModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    // { provide: API_BASE_URL, useValue: environment.apiUrl },
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
