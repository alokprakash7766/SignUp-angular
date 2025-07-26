import { Component } from '@angular/core';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { RouterOutlet } from '@angular/router';
import { AdminHeaderComponent } from './admin-header/admin-header.component';

@Component({
  selector: 'app-admin-layout',
  imports: [AdminHeaderComponent , AdminFooterComponent , RouterOutlet],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

}
