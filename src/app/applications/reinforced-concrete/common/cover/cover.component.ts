import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

  constructor() { }
  @Input() cnom!: number;
  @Input() public cover: "Nominal cover" | "Reinfocement cover" = 'Nominal cover'
  @Output() public cnomChange = new EventEmitter<number>();
  ngOnInit(): void {
  }

}
