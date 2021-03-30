import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-x-cables-fact',
  templateUrl: './x-cables-fact.component.html',
  styleUrls: ['./x-cables-fact.component.css']
})
export class XCablesFactComponent implements OnInit {

  filtro = 'cables'

  constructor() { }

  ngOnInit(): void {
  }

}
