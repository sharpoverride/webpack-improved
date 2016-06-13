import {IPropAccessor} from "../../context/prop-accessor";

const Prop = 'todoInput';
function todoInput(cursor) {
    return cursor.get(Prop);
}

todoInput.prototype.Prop = Prop;
export default todoInput as IPropAccessor;
