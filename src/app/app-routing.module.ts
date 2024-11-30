import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { TareaComponent } from './features/tareas/tarea/tarea.component';
import { AuthGuard } from './core/guardians/auth.guard';
import { TareaListComponent } from './features/tareas/tarea-list/tarea-list.component';
import { TareaCreateComponent } from './features/tareas/tarea-create/tarea-create.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'tarea', component: TareaComponent, 
    canActivate: [AuthGuard],
    children:[
      {path: "lista", component: TareaListComponent},
      {path: "crear", component: TareaCreateComponent}
    ]
  },
  // Agrega verificacion de enrutamiento de pagina no encontrada para cualquier otra ruta
  { path: '**', component: NotFoundComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }