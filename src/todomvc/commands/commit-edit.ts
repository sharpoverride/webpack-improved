import {Cursor} from 'immutable/contrib/cursor';
import {prop} from '../../context';
import * as access from '../context-accessors';

export default function commitEdit(item: Cursor) {
    item.update(v => {
       const newState = v.set(prop(access.text), access.editText(item))
           .set(prop(access.editText), '')
           .set(prop(access.editing), false);
        
        return newState;
    });
}