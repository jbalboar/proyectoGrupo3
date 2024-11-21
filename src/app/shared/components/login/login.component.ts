import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from  '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MessageService] 
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private messageService: MessageService, private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  async onLogin() {
    if (this.loginForm.valid) {
      const { usuario, password } = this.loginForm.value;
      try {
        const token = await this.authService.login(usuario, password);
        localStorage.setItem('token', token || '');
        console.log('Inicio de sesión exitoso. Token:', token);
        this.messageService.add({ severity: 'success', summary: 'Ok', detail: "Autenticación correcta" });
        //this.router.navigate(['/home']);
      } catch (error) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error as string });
        console.error('Error al iniciar sesión:', error);
      }
    }
  }
}
