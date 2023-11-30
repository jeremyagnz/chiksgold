import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {


  mostrarIconoCurrency: boolean = false;
  mostrarIconoItems: boolean = false;
  mostrarIconoAccount: boolean = false;
  mostrarIconoServices: boolean = false;
  mostrarIconoSwap: boolean = false;
  mostrarIconoSell: boolean = false;
  mostrarIconoUsd: boolean = false;

  isScrolled = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

}
