import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ToDoComponent } from './components/pages/to-do-page/to-do-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'to-do', component: ToDoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
