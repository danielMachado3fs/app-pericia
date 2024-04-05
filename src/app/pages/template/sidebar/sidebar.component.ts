import { Component, OnInit } from '@angular/core';
import { SidebarMenuItens, menuItensSidbar } from '../../../shared/types/sidebar-menu-itens';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  itensMenu: SidebarMenuItens[] = menuItensSidbar;
  constructor() { }

  ngOnInit() {
  }

}
