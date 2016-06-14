import {IPropAccessor} from "../../context/prop-accessor";

const Prop = 'completed';
function completed(cursor) {
    return cursor.get(Prop);
}

completed.prototype.Prop = Prop;
export default completed as IPropAccessor;
