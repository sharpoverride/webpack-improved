import {IPropAccessor} from "../../context";

const Prop = 'allChecked';
const todoListAllChecked = <IPropAccessor>function todoListAllChecked(cursor) {
    return cursor.get(Prop);
}

todoListAllChecked.Prop = Prop;
export default todoListAllChecked;