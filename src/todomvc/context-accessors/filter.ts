import {IPropAccessor} from "../../context/prop-accessor";

const Prop = 'filter';
function filter(cursor) {
    return cursor.get(Prop);
}

filter.prototype.Prop = Prop;
export default filter as IPropAccessor;

