import {BaseModel} from './base-model';

export interface Equipment extends BaseModel {
    name: string;
    list: Array<string>
}