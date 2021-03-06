import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/admin', title: 'Admin',  icon:'ni-circle-08 text-yellow', class: '' },
    { path: '/user', title: 'User',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/category', title: 'Category',  icon:'ni-collection text-blue', class: '' },
    { path: '/subcategory', title: 'Sous Category',  icon:'ni-single-copy-04 text-red', class: '' },
    { path: '/stock', title: 'Stock',  icon:'ni-archive-2 text-orange', class: '' },
    { path: '/blog', title: 'Blog',  icon:'ni-books text-pink', class: '' },
    { path: '/tag', title: 'Tag',  icon:'ni-tag text-info', class: '' },
    { path: '/marque', title: 'Marque',  icon:'ni-tie-bow text-orange', class: '' },
    { path: '/achat', title: 'Achat',  icon:'ni-shop text-primary', class: '' },
/*     { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' }, */
    { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    // { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/faq', title: 'faq',  icon:'ni-chat-round text-primary', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
