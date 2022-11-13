import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';

const routes: Routes = [
  {
    path:"inicio",
    component: InicioComponent  
    
  },
  { path:"",
    component : InicioComponent

  },
  {
    path: "nosotros",

    component: NosotrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
