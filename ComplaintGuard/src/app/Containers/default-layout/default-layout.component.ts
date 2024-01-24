import { Component, OnDestroy, ViewChild } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnDestroy {
  @ViewChild(TopBarComponent) appTopbar!: TopBarComponent;
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
