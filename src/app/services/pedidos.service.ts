import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private apiUrl = 'http://localhost:3000/api/pedidos'; // Cambia esta URL si tu API tiene otra ruta

  constructor(private http: HttpClient) {}

  // Obtener todos los pedidos
  getPedidos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Crear un nuevo pedido
  createPedido(pedido: any): Observable<any> {
    return this.http.post(this.apiUrl, pedido);
  }
}
