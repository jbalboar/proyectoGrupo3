import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../../../env/environment';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(environment.firebasase), ToolbarModule, AvatarModule],
      declarations: [MenuComponent],
      providers: [AuthService, AngularFireAuth]

    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
