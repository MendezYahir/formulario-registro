import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class RegistroComponent {
  usuario = {
    nombre: '',
    email: '',
    telefono: '',
    edad: null,
    password: '',
    confirmPassword: ''
  };

  datosRegistrados: any = null;

  registrar(): void {
    this.datosRegistrados = { ...this.usuario };
  }
}