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
        descripcion: 'Av. Nacional S/N “El Paraje” \nSanta María Coapan, Tehuacán Pue.' ,
        url: 'https://www.google.com/maps/place/ESCUELA+NORMAL+SUPERIOR+DE+TEHUACAN/@18.4200858,-97.4097719,371m/data=!3m1!1e3!4m13!1m7!3m6!1s0x85c5bda612ed8c1b:0xd82c8ededd29c301!2sNacional+Sur,+Sta+Mar%C3%ADa+Coapan,+Tehuac%C3%A1n,+Pue.!3b1!8m2!3d18.4223903!4d-97.4075494!3m4!1s0x85c5bda6a4c53a33:0x6f8831da6bc2a3e4!8m2!3d18.4202698!4d-97.4102086'
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
