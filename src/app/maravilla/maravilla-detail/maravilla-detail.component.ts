import { Component, OnInit, Input} from '@angular/core';
import { Maravilla } from '../Maravilla';

@Component({
  selector: 'app-maravilla-detail',
  templateUrl: './maravilla-detail.component.html',
  styleUrls: ['./maravilla-detail.component.css']
})
export class MaravillaDetailComponent implements OnInit {

  @Input() maravillaDetail!: Maravilla;

  constructor() { }

  ngOnInit() {
  }

}
