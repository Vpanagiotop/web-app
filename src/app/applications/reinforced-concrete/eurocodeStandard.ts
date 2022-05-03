export const concreteTypeList = [
    'C16/20', 'C20/25', 'C25/30', 'C30/37', 'C35/40', 'other'
];
export const steelTypeList = [
    'B500c', 'B500a', 'B500b', 'S220', 'S400', 'S500', 'S400s', 'S500s', 'other'
];

export enum ConcreteType {
    C16_20 = 'C16/20',
    C20_25 = 'C20/25',
    C25_30 = 'C25/30',
    C30_37 = 'C30/37',
    C35_40 = 'C35/40',
    C40_50 = 'C40/50',
    C45_55 = 'C45/55',
    C50_60 = 'C50/60',
    C55_67 = 'C55/67',
}

export const concreteTypes = Object.values(ConcreteType);

export interface IConcreteProperties {
    fck: number;
    fcm: number;
    dc1: number;
    dcu1: number;
    dc2: number;
    dcu2: number;
}

export const concreteTypeProperties: {
    [type in ConcreteType]: IConcreteProperties
} = {
    [ConcreteType.C16_20]: {
        fck: 16,
        fcm: 3,
        dc1: 0.0019,
        dcu1: 0.0035,
        dc2: 0.002,
        dcu2: 0.0035
    },
    [ConcreteType.C20_25]: {
        fck: 20,
        fcm: 1,
        dc1: 0.002,
        dcu1: 0.0035,
        dc2: 0.002,
        dcu2: 0.0035
    },
    [ConcreteType.C25_30]: {
        fck: 25,
        fcm: 1,
        dc1: 0.0021,
        dcu1: 0.0035,
        dc2: 0.002,
        dcu2: 0.0035
    },
    [ConcreteType.C30_37]: {
        fck: 30,
        fcm: 1,
        dc1: 0.0022,
        dcu1: 0.0035,
        dc2: 0.002,
        dcu2: 0.0035
    },
    [ConcreteType.C35_40]: {
        fck: 35,
        fcm: 1,
        dc1: 0.00225,
        dcu1: 0.0035,
        dc2: 0.002,
        dcu2: 0.0035
    },
    [ConcreteType.C40_50]: {
        fck: 40,
        fcm: 1,
        dc1: 0.0023,
        dcu1: 0.0035,
        dc2: 0.002,
        dcu2: 0.0035
    },
    [ConcreteType.C45_55]: {
        fck: 45,
        fcm: 1,
        dc1: 0.0024,
        dcu1: 0.0035,
        dc2: 0.002,
        dcu2: 0.0035
    },
    [ConcreteType.C50_60]: {
        fck: 50,
        fcm: 1,
        dc1: 0.00245,
        dcu1: 0.0035,
        dc2: 0.002,
        dcu2: 0.0035
    },
    [ConcreteType.C55_67]: {
        fck: 55,
        fcm: 1,
        dc1: 0.0025,
        dcu1: 0.0032,
        dc2: 0.0022,
        dcu2: 0.0031
    }
}
