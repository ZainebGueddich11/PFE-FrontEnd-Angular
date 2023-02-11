import { ModuleQHSE } from './moduleQHSE';
import {Questionschemas} from './questionschemas'
import { User_examen } from './user_examen';

export interface Examen {
    id ?: number
    name : string;
    note : number ;
    duration :number;
    date :Date;
    questionschemas : Questionschemas[] ;
    moduleQHSE: ModuleQHSE[] ;
    user_examen: User_examen[];}