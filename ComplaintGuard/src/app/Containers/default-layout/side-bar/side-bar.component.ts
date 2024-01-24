import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  model: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.model = [
      {
        label: 'Home',
        items: [
          {
            label: 'Create Complaint',
            icon: '',
            routerLink: ['dashboard/home/createcomplaint'],
          },
        ],
      },
    ];
  }
}
