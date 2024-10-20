import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  correo: string = '';
  contrasena: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertController: AlertController
  ) {}

  async onLogin() {
    const credentials = {
      correo: this.correo,
      contrasena: this.contrasena,
    };

    this.http.post('http://localhost:3000/api/login', credentials).subscribe(
      async (response: any) => {
        console.log('Respuesta del servidor:', response);

        // Guardar el nombre del usuario en localStorage o en una variable
        localStorage.setItem('nombreUsuario', response.nombre);

        // Mostrar mensaje de bienvenida
        const alert = await this.alertController.create({
          header: 'Bienvenido',
          message: `¡Bienvenido, ${response.nombre}!`,
          buttons: ['OK'],
        });
        await alert.present();

        // Redirigir a la página de inicio o dashboard
        this.router.navigate(['/home']);
      },
      async (error) => {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Correo o contraseña incorrectos.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    );
  }
}
