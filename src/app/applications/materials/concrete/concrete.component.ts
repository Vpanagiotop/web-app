import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concrete',
  templateUrl: './concrete.component.html',
  styleUrls: ['./concrete.component.scss']
})
export class ConcreteComponent implements OnInit {
  public title = "Concrete"
  public Name = '';
  public WeightperUnit = 25;
  public v = 0.2;
  public longTermFactor = 0.85;
  public shearModulus() {
    return Math.round(+this.concreteProperties.Ecm / (2 * (+this.concreteProperties.v + 1)));
  }
  public units = 'kN, m';
  public unitsOptions = ['kN, m', 'N, mm'];
  public strain = '‰';
  public strainButtom = {
    text: this.strain,
    stylingMode: 'text',
    width: 30
  }
  public concreteProperties: IConcreteProperties = {
    name: this.Name,
    weight: this.WeightperUnit,
    fck: undefined as any as number,
    fcm: undefined as any as number,
    Ecm: undefined as any as number,
    v: this.v,
    G: 20,
    partialFactor: 1.5,
    dc1: undefined as any as number,
    dcu1: undefined as any as number,
    dc2: undefined as any as number,
    dcu2: undefined as any as number,
    dc3: undefined as any as number,
    dcu3: undefined as any as number
  }
  public ngOnInit() {
    // this.concreteProperties.fck = 20
  }
  public strainRelations = [
    {
      title: 'Schematic',
      subscript: '1',
      ec: [
        { label: 'dc1', value: undefined as any as number },
        { label: 'dcu1', value: undefined as any as number }
      ]
    },
    {
      title: 'Parabola-Rectangle',
      subscript: '2',
      ec: [
        { label: 'dc2', value: undefined as any as number },
        { label: 'dcu2', value: undefined as any as number }
      ]
    },
    {
      title: 'Bi-linear',
      subscript: '3',
      ec: [
        { label: 'dc3', value: undefined as any as number },
        { label: 'dcu3', value: undefined as any as number }
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

interface IConcreteProperties {
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
}