import { Component } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent {
  producto = {
    id: 2,
    nombre: 'Smartphone Samsung',
    descripcion: 'Un smartphone con pantalla AMOLED, cámara triple y batería de larga duración.',
    precio: 9999
  };

  agregarAlCarrito() {
    alert('Producto agregado al carrito')
  }
}
