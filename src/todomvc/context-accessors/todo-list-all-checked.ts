import {IPropAccessor} from "../../context/prop-accessor";

const Prop = 'allChecked';
function todoListAllChecked(cursor) {
    return cursor.get(Prop);
}

todoListAllChecked.prototype.Prop = Prop;
export default todoListAllChecked as IPropAccessor;