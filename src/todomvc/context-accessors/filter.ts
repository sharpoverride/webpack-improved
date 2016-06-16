import {IPropAccessor} from "../../context";

const Prop = 'filter';
const filter = <IPropAccessor>function filter(cursor) {
    return cursor.get(Prop);
}

filter.Prop = Prop;
export default filter;

