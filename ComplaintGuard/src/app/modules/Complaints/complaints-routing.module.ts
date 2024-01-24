import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComplaintsComponent } from './create-complaints/create-complaints.component';

//const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'createcomplaint',
        component: CreateComplaintsComponent,
        // loadChildren: () =>
        //   import('./create-complaints/create-complaints.module').then(
        //     (m) => m.CreateComplaintsModule
        //   ),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class ComplaintsRoutingModule {}
