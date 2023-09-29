import { PresentationComponent } from './components/main/presentation/presentation.component';

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './components/main/form/form.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'presentation',
    pathMatch: 'full'
  },

  {
    path: 'presentation',
    component: PresentationComponent
  },

  {
    path: 'formComponent',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
