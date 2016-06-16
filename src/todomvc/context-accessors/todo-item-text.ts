import {IPropAccessor} from "../../context";

const Prop = 'text';
const text = <IPropAccessor>function text(cursor) {
    return cursor.get(Prop);
}

text.Prop = Prop;
export default text;
