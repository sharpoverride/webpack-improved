import {Cursor} from "immutable/contrib/cursor";

const pages = (cursor: Cursor) => cursor.get('validation');

export default pages;