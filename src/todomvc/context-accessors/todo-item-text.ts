import {IPropAccessor} from "../../context/prop-accessor";

const Prop = 'text';
function text(cursor) {
    return cursor.get(Prop);
}

text.prototype.Prop = Prop;
export default text as IPropAccessor;
