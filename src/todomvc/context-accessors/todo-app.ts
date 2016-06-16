import {IPropAccessor} from "../../context";

const Prop = 'todoApp';
const todoApp = <IPropAccessor>function todoApp(cursor) {
    return cursor.get(Prop);
}

todoApp.Prop = Prop;
export default todoApp;
