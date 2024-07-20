import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  
  constructor(private ruta: Router) {}
  
  items?: any[];
  itemsCont?: any[];
  mensajes?: any[];

  ngOnInit(): void {
    this.items = [
      {
        icon: PrimeIcons.MAP_MARKER,
        titulo: 'Ubicación',
        descripcion: 'Av. Nacional S/N “El Paraje” \nSanta María Coapan, Tehuacán Pue.' 
      },
      {
        icon: PrimeIcons.PHONE,
        titulo: 'Telefono',
        descripcion: '238 382 5073' 
      },
    ];

    this.mensajes = [
      {
        titulo: 'Aviso de privacidad'
      },
      {
        titulo: 'Buzón de quejas y sugerencias'
      }
    ];

    this.itemsCont = [
      {
        icon: PrimeIcons.ENVELOPE,
        titulo: 'correo@enst.edu.mx'
      },
      {
        icon: PrimeIcons.FACEBOOK,
        titulo: 'Escuela Normal Superior de Tehuacán Oficial'
      },
      {
        icon: PrimeIcons.INSTAGRAM,
        titulo: 'Instagram'
      },
      {
        icon: PrimeIcons.YOUTUBE,
        titulo: 'Youtube'
      },
    ]
  }

  Ruta() {
    this.ruta.navigate(['/noticias']);
  }

}
