import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-customer-layout',
  imports: [HeaderComponent , FooterComponent , RouterOutlet],
  templateUrl: './customer-layout.component.html',
  styleUrl: './customer-layout.component.css'
})
export class CustomerLayoutComponent {

}
