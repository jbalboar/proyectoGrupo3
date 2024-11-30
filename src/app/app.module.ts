import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/components/login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { provideHttpClient } from '@angular/common/http';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './env/environment';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TareasModule } from './features/tareas/tareas.module';
import { SharedMessageService } from './core/services/message/shared-message.service';
import { ConvertirBooleanPipe } from './core/pipes/convertir-boolean.pipe';
import { ResaltarTareaPendienteDirective } from './core/directives/resaltar-tarea-pendiente.directive';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    ButtonModule,
    CardModule,
    CommonModule,
    ToastModule,
    BrowserAnimationsModule,
    FloatLabelModule,
    FormsModule,
    TareasModule,
    AngularFireModule.initializeApp(environment.firebasase),
    AngularFireAuthModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    MessageService,
    SharedMessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
