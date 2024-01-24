import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './modules/login-module/login-page/login-page.component';
import { DefaultLayoutComponent } from './Containers/default-layout/default-layout.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: LoginPageComponent,
      },
      {
        path: 'dashboard',
        component: DefaultLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./modules/Home/home-page/home-page.module').then(
                (m) => m.HomePageModule
              ),
          },
          {
            pathMatch: 'full',
            path: 'home',
            loadChildren: () =>
              import('./modules/Complaints/complaints.module').then(
                (m) => m.ComplaintsModule
              ),
          },
        ],
        //   //     {
        //   //       path: '',
        //   //       loadChildren: () =>
        //   //         import('./modules/Complaints/complaints.module').then(
        //   //           (m) => m.ComplaintsModule
        //   //         ),
        //   //     },
        //   //   ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
