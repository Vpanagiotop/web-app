import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-concrete-options',
  templateUrl: './concrete-options.component.html',
  styleUrls: ['./concrete-options.component.scss']
})
//implements OnInit
export class ConcreteOptionsComponent {
  // public ngOnInit() {
  //   this.update();

  // }
  @Input() public Name: string = "Name"
  @Input() public fck: number = 35000
  @Input() public fcm: number = 30000;
  @Input() public v: number = 0.2
  public Ecm!: number;
  public units = ['kN, m'];
  public unitsOptions: string[] = ['kN, m', 'N, mm'];
  // public concreteProperties: Array<{
  //   title: string;
  //   contents: Array<{
  //     title: string;
  //     class: 'fixed' | 'input';
  //     value: string | number;
  //     type: "text" | "number";
  //   } | {
  //     title: string;
  //     class: 'select';
  //     value: string[];
  //     options: string[];
  //   }>
  // }> = [
  //     {
  //       title: 'General:',
  //       contents: [
  //         { title: 'Material Type:', class: 'fixed', type: "text", value: 'Concrete' },
  //         { title: 'Material Name:', class: 'input', type: "text", value: this.Name },
  //         { title: 'Units:', class: 'select', value: this.units, options: this.unitsOptions }
  //       ]
  //     },
  //     {
  //       title: 'Properties',
  //       contents: [
  //         { title: 'Compresive Strength of Concrete:', class: 'input', type: "number", value: this.fck },
  //         { title: 'Mean Concrete Cylinder Compresive Strength:', class: 'input', type: "number", value: this.fcm },
  //         { title: 'Modulus of Elasticity:', class: 'input', type: "number", value: this.Ecm },
  //         { title: 'Modulus of Elasticity:', class: 'input', type: "number", value: this.Ecm },
  //         { title: 'Poison:', class: 'input', type: "number", value: this.v },
  // { title: 'Shear Modulus:', class: 'input', type: "number", value: this.Ecm },
  // { title: 'Material Name:', class: 'input', type: "number", value: this.v },
  // { title: 'Compresive Strength of Concrete:', class: 'input', type: "text", value: this.fck },
  // { title: 'Modulus of Elasticity:', class: 'input', type: "number", value: this.Ecm },
  // { title: 'Poison:', link: '/home' },
  // { title: 'Shear Modulus:', link: '/home' },
  // { title: 'Weight per Unit Volume:', link: '/home' }
  //   ]
  // },
  // {
  //   title: 'More Info:', link: '/home',
  //   contents: [
  //     { title: 'Stress - Strain Relations:', link: '/applications/RC/SpreadFooting' },
  //   ]
  // },
  // ];
  // public stressStrainRelations = [
  //   {
  //     title: 'Schematic',
  //     contents: [
  //       { ec: this.Schematic()[0], label: 'εc1' },
  //       { ec: this.Schematic()[1], label: 'εcu1' },
  //     ]
  //   },
  //   {
  //     title: 'Parabola-rectangle',
  //     contents: [
  //       { ec: this.ParabolaRectangle()[0], label: 'εc2' },
  //       { ec: this.ParabolaRectangle()[1], label: 'εcu2' },
  //     ]
  //   }
  // ]

  // @Input() public value!: string;

  // @Output() public fcmChange = new EventEmitter<any>();
  // public sup3: string = "\u00B3";
  // public sup2: string = "\u00B2";

  // public stressStrain: string = 'Parabola-rectangle'

  // public ec: number = 0.0035
  // public ecu!: number
  // public update() {
  //   this.fcm = (this.fck / 1000 + 8) * 1000
  //   this.Ecm = Math.round(11000 * Math.pow(this.fcm / 1000, 0.3) / 1000) * 10.e6;
  //   console.log(this.fcm)
  // }
  // public MeanCompresiveStrength() {
  //   this.fcm = (this.fck / 1000 + 8) * 1000
  //   console.log(this.fcm)
  //   return this.fcm
  // }
  // public ModulusofElasticity() {
  //   this.Ecm = Math.round(11000 * Math.pow(this.fcm / 1000, 0.3) / 1000) * 10.e6;
  // }
  // public ShearModulus() {
  //   return Math.round(this.Ecm / (2 * this.v + 2) * 100) / 100
  // }
  // public Schematic() {
  //   const ec = Math.min(0.7 * Math.pow(this.fcm / 1000, 0.31), 2.8);
  //   this.ecu
  //   if (this.fck > 50000) {
  //     this.ecu = 2.8 + 27 * Math.pow((98 - this.fcm / 1000) / 100, 4)
  //   }
  //   else {
  //     this.ecu = 3.5
  //   };
  //   return [ec, this.ecu]
  // }
  // public ParabolaRectangle() {
  //   if (this.fck > 50000) {
  //     this.ec = 2 + 0.085 * Math.pow((this.fck - 50000) / 1000, 0.53)
  //     this.ecu = 2.6 + 35 * Math.pow((90 - this.fck / 1000) / 100, 4)
  //   }
  //   else {
  //     this.ec = 2
  //     this.ecu = 3.5
  //   };
  //   return [this.ec, this.ecu]
  // }
  // public options = ['C16/20', 'C20/25', 'C25/30', 'C30/37', 'C35/40', 'other'];

  // StressStrainOptions = ['Schematic', 'Parabola-rectangle', 'Bi-linear']
  // public optionss = [''];
  // public test() {
  //   for (let i in this.stressStrainRelations) {
  //     this.optionss.push(this.stressStrainRelations[i].title);
  //   };
  //   return this.optionss
  // };
}