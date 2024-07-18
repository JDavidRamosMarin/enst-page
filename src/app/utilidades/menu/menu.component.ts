import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Noticias',
        routerLink: 'noticias'
      },
      {
        label: 'Nosotros',
        routerLink: 'nosotros'
      },
      {
        label: 'Oferta Educativa',
        routerLink: 'oferta-educativa'
      },
      {
        label: 'Difusion Cultural',
        routerLink: 'difusion-cultural'
      },
      {
        label: 'Instalaciones',
        routerLink: 'instalaciones'
      },
      {
        label: 'Accesos',
        routerLink: 'accesos'
      },
      {
        label: 'Transparencia',
        routerLink: 'transparencia'
      },
      {
        label: 'Normatividad',
        routerLink: 'normatividad'
      },
    ]
  }
  
}
