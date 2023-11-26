import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DockerComponent } from './docker/docker.component';

const routes: Routes = [
  {path: 'docker', component:DockerComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
