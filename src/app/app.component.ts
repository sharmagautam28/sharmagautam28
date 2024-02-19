import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataComponent } from './data/data.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DataComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'demo';
  constructor(){
    console.log(this.title)
    console.log(typeof this.title)
  }
}
