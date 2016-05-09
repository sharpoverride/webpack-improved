import {Cursor} from "immutable/contrib/cursor";

export interface IPropAccessor {
    (model:Cursor):any;
    Prop:string;
}
