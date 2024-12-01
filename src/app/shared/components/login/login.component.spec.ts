import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../../env/environment';
import { AuthService } from '../../../core/services/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(environment.firebasase), ButtonModule, ToastModule, CardModule, FloatLabelModule, ReactiveFormsModule],
      declarations: [LoginComponent],
      providers: [AuthService, AngularFireAuth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
