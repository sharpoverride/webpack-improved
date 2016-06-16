import {IPropAccessor, Cursor} from "../../context";

const Prop = 'editText';

const todoItemEditing = <IPropAccessor>function todoItemEditing(item: Cursor) {
    return item.get(Prop);
}

todoItemEditing.Prop = Prop;

export default todoItemEditing;