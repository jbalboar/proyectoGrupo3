import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaComponent } from './tarea/tarea.component';
import { TareaListComponent } from './tarea-list/tarea-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../../shared/components/menu/menu/menu.component';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MessageService } from 'primeng/api';
import { SharedMessageService } from '../../core/services/message/shared-message.service';


@NgModule({
  declarations: [
    TareaComponent,
    TareaListComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    ToolbarModule,
    AvatarModule,
    AvatarGroupModule,
    ToastModule,
    BrowserAnimationsModule,
    FloatLabelModule,
  ],
  exports: [
    TareaComponent,
    TareaListComponent
  ]
})
export class TareasModule { }
