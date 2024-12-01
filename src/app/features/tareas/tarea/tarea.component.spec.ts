import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaComponent } from './tarea.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MenuComponent } from '../../../shared/components/menu/menu/menu.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../../env/environment';
import { AuthService } from '../../../core/services/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { RouterModule } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';

describe('TareaComponent', () => {
  let component: TareaComponent;
  let fixture: ComponentFixture<TareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(environment.firebasase), ToastModule, ToolbarModule, AvatarModule, RouterModule.forRoot([])],
      declarations: [TareaComponent, MenuComponent],
      providers: [MessageService, AuthService, AngularFireAuth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
