import {ICoordinatse} from "./ICoordinatse";

export interface IAddress{
    address: string,
    city: string,
    state: string,
    stateCode: string,
    postalCode: string,
    coordinates: ICoordinatse
    country: string
}