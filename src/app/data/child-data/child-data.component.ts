import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';

@Component({
  selector: 'app-child-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-data.component.html',
  styleUrl: './child-data.component.sass'
})
export class ChildDataComponent  {
  @Input() parentData:any;
  @Output() newData= new EventEmitter<string>();
 
 
}
