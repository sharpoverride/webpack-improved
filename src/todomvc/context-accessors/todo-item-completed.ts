import {IPropAccessor} from "../../context";

const Prop = 'completed';
const completed = <IPropAccessor>function completed(cursor) {
    return cursor.get(Prop);
}

completed.Prop = Prop;
export default completed as IPropAccessor;
