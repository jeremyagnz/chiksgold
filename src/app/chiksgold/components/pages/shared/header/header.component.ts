import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


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
