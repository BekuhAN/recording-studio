import {BaseModel} from './base-model';

export interface Room extends BaseModel {
    name: string;
    img: string;
    price: number;
    description: string;
    equipment: Array<string>;
}