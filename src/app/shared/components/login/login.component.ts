import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SharedMessageService } from '../../../core/services/message/shared-message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MessageService, SharedMessageService],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private messageService: MessageService,
    private sharedMessageService: SharedMessageService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  async onLogin() {
    if (this.loginForm.valid) {
      const { usuario, password } = this.loginForm.value;
      try {
        const datosUsuario = await this.authService.login(usuario, password);

        if(datosUsuario == null){
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Error al iniciar sesión',
          });
        }else{
          console.log('pruebas');
          const token = await datosUsuario.user?.getIdToken();
          const email = await datosUsuario.user?.email;
  
          localStorage.setItem('token', token || '');
          localStorage.setItem('userId', email);
          console.log('Inicio de sesión exitoso. Token:', datosUsuario);
          this.sharedMessageService.setMessage('success', 'Ok', 'Autenticación correcta');
          this.router.navigate(['/tarea']);
        }
      } catch (error) {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error as string,
        });
        console.error('Error al iniciar sesión:', error);
      }
    }
  }
}
