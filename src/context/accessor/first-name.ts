import {Cursor} from "immutable/contrib/cursor";
import {IPropAccessor} from './prop-accessor';

const Prop = 'firstName';
function firstName(model:Cursor) {
    return model.get(Prop) || '';
}

firstName.prototype.Prop = Prop;

export default <IPropAccessor>firstName;
