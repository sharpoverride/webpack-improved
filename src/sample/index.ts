import Context, {prop} from '../context';
import * as access from './context-accessors';
import EntryPage from './entry-page';

/**
 * This is a immediately invoked function declaration.
 * I use it to bootstrap the sample application with count 0
 *
 * Our context as a javascript object would be represented as
 * {
 *  count: 0
 * }
 * 
 * You could save and load the counter in sessionStorage
 * So if you refresh the page the state is kept.
 */
(function bootstrapSample(){
    Context.cursor.set(
        prop(access.count),
        0
    );
})();

export default EntryPage;
