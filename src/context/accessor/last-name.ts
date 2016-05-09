import {Cursor} from "immutable/contrib/cursor";
import {IPropAccessor} from "./prop-accessor";

const Prop = 'lastName';
function lastName(model:Cursor) {
    return model.get(Prop) || '';
}

lastName.prototype.Prop = Prop;

export default lastName as IPropAccessor