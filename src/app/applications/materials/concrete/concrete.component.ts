import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-concrete',
  templateUrl: './concrete.component.html',
  styleUrls: ['./concrete.component.scss']
})
export class ConcreteComponent implements OnInit {
  public title = "Concrete"
  @Input() public Name: string = '';
  @Input() public WeightperUnit: number = 25;
  @Input() public fck!: number;
  @Input() public fcm!: number;
  @Input() public Ecm!: number;
  @Input() public v: number = 0.2;
  @Input() public dc1!: number;
  @Input() public dcu1!: number;
  @Input() public dc2!: number;
  @Input() public dcu2!: number;
  @Input() public dc3!: number;
  @Input() public dcu3!: number;
  @Input() public partialFactor: number = 1.5;
  @Input() public longTermFactor: number = 0.85;
  public shearModulus() {
    return Math.round(+this.concreteProperties.Ecm / (2 * (+this.concreteProperties.v + 1)));
  }
  public units = 'kN, m';
  public unitsOptions: string[] = ['kN, m', 'N, mm'];
  public strain = '‰';
  public strainButtom = {
    text: this.strain,
    stylingMode: 'text',
    width: 30,

  }


  constructor() { }

  // public ngOnInit() {
  //   // this.concreteProperties.fck = 20
  // }
  public concreteProperties: {
    type: string;
    name: string;
    weight: number;
    fck: number;
    fcm: number;
    Ecm: number;
    v: number;
    G: number;
    partialFactor: number;
    dc1: number;
    dcu1: number;
    dc2: number;
    dcu2: number;
    dc3: number;
    dcu3: number;
  } = {
      type: 'Concrete',
      name: this.Name,
      weight: this.WeightperUnit,
      fck: this.fck,
      fcm: this.fcm,
      Ecm: this.Ecm,
      v: this.v,
      G: 20,
      partialFactor: this.partialFactor,
      dc1: this.dc1,
      dcu1: this.dcu1,
      dc2: this.dc2,
      dcu2: this.dcu2,
      dc3: this.dc3,
      dcu3: this.dcu3
    }

  public ngOnInit() {

    // this.concreteProperties.fck = 20
  }
  public strainRelations = [
    {
      title: 'Schematic',
      subscript: '1',
      ec: [
        { label: 'dc1', value: this.dc1 },
        { label: 'dcu1', value: this.dcu1 }
      ]
    },
    {
      title: 'Parabola-Rectangle',
      subscript: '2',
      ec: [
        { label: 'dc2', value: this.dc2 },
        { label: 'dcu2', value: this.dcu2 }
      ]
    },
    {
      title: 'Bi-linear',
      subscript: '3',
      ec: [
        { label: 'dc3', value: this.dc3 },
        { label: 'dcu3', value: this.dcu3 }
      ]
    }
  ]

  public test() {
    console.log(this.concreteProperties)
    console.log(this.strainRelations)
  }
  public modulusofElasticity() {
    this.concreteProperties.Ecm = Math.round(22000 * Math.pow(+this.concreteProperties.fcm / 10, 0.3));
  }
  public assignCompresiveStrain() {
    this.strainRelations[0].ec[0].value = this.concreteProperties.dc1
    this.strainRelations[0].ec[1].value = this.concreteProperties.dcu1
    this.strainRelations[1].ec[0].value = this.concreteProperties.dc2
    this.strainRelations[1].ec[1].value = this.concreteProperties.dcu2
    this.strainRelations[2].ec[0].value = this.concreteProperties.dc3
    this.strainRelations[2].ec[1].value = this.concreteProperties.dcu3
  }
  public compresiveStrain() {
    this.concreteProperties.dc1 = Math.min(0.7 * Math.pow(this.concreteProperties.fcm, 0.31), 2.8);
    if (this.concreteProperties.fck > 50) {
      this.concreteProperties.dcu1 = 2.8 + 27 * Math.pow((98 - this.concreteProperties.fcm) / 100, 4)
      this.concreteProperties.dc2 = 2.0 + 0.085 * Math.pow(this.concreteProperties.fck - 50, 0.53)
      this.concreteProperties.dcu2 = 2.6 + 35 * Math.pow((90 - this.concreteProperties.fck) / 100, 4)
      this.concreteProperties.dc3 = 1.75 + 0.55 * (this.concreteProperties.fck - 50 / 40)
      this.concreteProperties.dcu2 = 2.6 + 35 * Math.pow((90 - this.concreteProperties.fck) / 100, 4)
    }
    else {
      this.concreteProperties.dcu1 = 3.5;
      this.concreteProperties.dc2 = 2.0;
      this.concreteProperties.dcu2 = 3.5;
      this.concreteProperties.dc3 = 1.75;
      this.concreteProperties.dcu3 = 3.5;
    }
    this.assignCompresiveStrain();

  }
  public defaultValues() {
    this.modulusofElasticity();
    this.compresiveStrain();
  }
}
