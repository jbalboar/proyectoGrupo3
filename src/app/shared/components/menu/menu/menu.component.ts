import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  providers: [MessageService]
})
export class MenuComponent {


  constructor(private messageService: MessageService, private authService: AuthService, private router: Router) {}

  userId: string = localStorage?.getItem('userId') as string;

  async onLogout() {
    await this.authService.logout();
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }

  mostrarLista() {
    this.router.navigate(['/tarea/lista']);
  }
}
