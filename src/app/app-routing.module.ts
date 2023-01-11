import { NewThoughtComponent } from './components/thoughts/new-thought/new-thought.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThoughtsListComponent } from './components/thoughts/thoughts-list/thoughts-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },
  {
    path: 'criarPensamento',
    component: NewThoughtComponent
  },
  {
    path: 'listarPensamento',
    component: ThoughtsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
