// ./interfaces.ts

interface IFlyVehicles {
    fly(): void;
}

interface IDriveVehicles {
    drive(): void;
}


interface IVehicle extends IFlyVehicles, IDriveVehicles {}

export {
 IVehicle,
 IDriveVehicles,
 IFlyVehicles,
}