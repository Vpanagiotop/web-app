export const concreteTypeList = [
    'C16/20', 'C20/25', 'C25/30', 'C30/37', 'C35/40', 'other'
];
export const steelTypeList = [
    'B500c', 'B500a', 'B500b', 'S220', 'S400', 'S500', 'S400s', 'S500s', 'other'
];

export enum ConcreteType {
    C16_20 = 'C16/20',
    C20_25 = 'C20/25'
}

export const concreteTypes = Object.values(ConcreteType);

export interface IConcreteProperties {
    fck: number;
    fcm: number;
}

export const concreteTypeProperties: {
    [type in ConcreteType]: IConcreteProperties
} = {
    [ConcreteType.C16_20]: {
        fck: 5,
        fcm: 3
    },
    [ConcreteType.C20_25]: {
        fck: 10,
        fcm: 1
    }
}
