import { Component, OnInit } from '@angular/core';
import { Maravilla } from '../Maravilla';
import { MaravillaService } from '../maravilla.service';

@Component({
  selector: 'app-maravilla-list',
  templateUrl: './maravilla-list.component.html',
  styleUrls: ['./maravilla-list.component.css']
})
export class MaravillaListComponent implements OnInit {

  selected: Boolean = false;
  maravillas: Array<Maravilla> = [];
  selectedMaravilla !: Maravilla;
  constructor(private maravillaService: MaravillaService) { }

  getMaravillas(): void {
    this.maravillaService.getMaravillas().subscribe((maravillas) => {
      this.maravillas = maravillas;
      console.log("El tamaño es: " + maravillas.length);
    });
  }
  onSelected(maravilla: Maravilla): void{
    this.selected = true;
    this.selectedMaravilla = maravilla;
  }

  ngOnInit() {
    this.getMaravillas();
  }

}
