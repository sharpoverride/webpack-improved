import {IPropAccessor} from "../../context/prop-accessor";

const Prop = 'todoApp';
function todoApp(cursor) {
    return cursor.get(Prop);
}

todoApp.prototype.Prop = Prop;
export default todoApp as IPropAccessor;
