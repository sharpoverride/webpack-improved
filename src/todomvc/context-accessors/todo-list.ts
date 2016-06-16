import {IPropAccessor} from "../../context";

const Prop = 'todoList';
const todoList = <IPropAccessor>function todoList(cursor) {
    return cursor.get(Prop);
}

todoList.Prop = Prop;
export default todoList;