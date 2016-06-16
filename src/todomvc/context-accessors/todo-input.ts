import {IPropAccessor} from "../../context";

const Prop = 'todoInput';
const todoInput = <IPropAccessor>function todoInput(cursor) {
    return cursor.get(Prop);
}

todoInput.Prop = Prop;
export default todoInput;
