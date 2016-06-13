import {IPropAccessor} from "../../context/prop-accessor";

const Prop = 'todoList';
function todoList(cursor) {
    return cursor.get(Prop);
}

todoList.prototype.Prop = Prop;
export default todoList as IPropAccessor;