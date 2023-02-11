import { Examen } from './exemen';


export interface Lista {
    id ?: number
    name : string;
    examen: Examen[]
}