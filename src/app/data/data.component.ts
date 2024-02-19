import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { dataArray } from '../mock-data';
import { data } from '../data';
import { ChildDataComponent } from './child-data/child-data.component';

@Component({
  selector: 'app-data',
  standalone: true,
  imports:[CommonModule,ChildDataComponent],
  templateUrl: './data.component.html',
  styleUrl: './data.component.sass'
})
export class DataComponent {
  data:data[]=dataArray

}
