import { Routes, RouterModule } from '@angular/router';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    // canActivate: [AuthorizeGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('./modules/cart/cart.module').then(m => m.CartModule)
      },
      {
        path: 'payment',
        loadChildren: () =>
          import('./modules/payment/payment.module').then(m => m.PaymentModule)
      },
      {
        path: 'blog-topic',
        loadChildren: () =>
          import('./modules/blog-topic/blog-topic.module').then(m => m.BlogTopicModule)
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./modules/products-site/products-site.module').then(m => m.ProductsSiteModule)
      },
      {
        path: 'product-view',
        loadChildren: () =>
          import('./modules/product-view/product-view.module').then(m => m.ProductViewModule)
      },
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./modules/auth/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'sign-up',
        loadChildren: () =>
          import('./modules/auth/sign-up/sign-up.module').then(m => m.SignUpModule)
      },
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      // { path: '', redirectTo: 'products', pathMatch: 'full' },
      {
        path: 'addresses',
        loadChildren: () =>
          import('./modules/tables/addresses/addresses.module').then(m => m.AddressesModule)
      },
      {
        path: 'carts',
        loadChildren: () =>
          import('./modules/tables/carts/carts.module').then(m => m.CartsModule)
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('./modules/tables/categories/categories.module').then(m => m.CategoriesModule)
      },
      {
        path: 'languages',
        loadChildren: () =>
          import('./modules/tables/languages/languages.module').then(m => m.LanguagesModule)
      },
      {
        path: 'order-products',
        loadChildren: () =>
          import('./modules/tables/order-products/order-products.module').then(m => m.OrderProductsModule)
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('./modules/tables/orders/orders.module').then(m => m.OrdersModule)
      },
      {
        path: 'products-table',
        loadChildren: () =>
          import('./modules/tables/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'publishers',
        loadChildren: () =>
          import('./modules/tables/publishers/publishers.module').then(m => m.PublishersModule)
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./modules/tables/users/users.module').then(m => m.UsersModule)
      }
    ]
    // children: [
    //   {
    //     path: 'dashboard',
    //     component: DashboardComponent
    //   },
    //   {
    //     path: 'table',
    //     component: TablesComponent
    //   },
    // ]
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
