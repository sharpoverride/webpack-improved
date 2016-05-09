import {Cursor} from "immutable/contrib/cursor";

const pages = (cursor: Cursor) => cursor.get('pages');

export default pages;