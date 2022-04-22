import { Component, Input } from "@angular/core";

export const concreteProperties1 = [
    {
        title: 'General:',
        contents: [
            { title: 'Material Type:', type: 'fixed' },
            { title: 'Material Name:', type: 'text-input', value: Input() == "Name" },
            { title: 'Units:', type: 'select-options', value: 'units' }
        ]
    },
    {
        title: 'Properties',
        contents: [
            { title: 'Compresive Strength of Concrete:', link: '/kapou' },
            { title: 'Mean Concrete Cylinder Compresive Strength:', link: '/home' },
            { title: 'Modulus of Elasticity:', link: '/home' },
            { title: 'Poison:', link: '/home' },
            { title: 'Shear Modulus:', link: '/home' },
            { title: 'Weight per Unit Volume:', link: '/home' }
        ]
    },
    {
        title: 'More Info:', link: '/home',
        contents: [
            { title: 'Stress - Strain Relations:', link: '/applications/RC/SpreadFooting' },
        ]
    },
]
@Component({
    template: ''
})
export class concreteProperties {
    @Input() Name: string = "Name"
    public General: Array<{
        title: string;
        contents: Array<{
            title: string;
            class: 'fixed' | 'input';
            type: "text" | "number";
            value: string | number;
        } | {
            title: string;
            class: 'select';
            value: string | number;
            options: string[];
        }>
    }> = [
            {
                title: 'General:',
                contents: [
                    { title: 'Material Type:', class: 'fixed', type: 'text', value: 'Concrete' },
                    { title: 'Material Name:', class: 'input', type: 'text', value: this.Name },
                    { title: 'Units:', class: 'select', value: 5, options: ['kN, m', 'N, mm'] },
                ]

            }
        ]
}