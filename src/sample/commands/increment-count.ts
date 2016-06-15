/**
 * This is a command, it applies a change on the context
 *
 * Components should only invoke commands, they should not execute
 * actions directly on the context other than subscribe.
 * This will make the development process easier.
 */
import Context, {prop} from '../../context';
import * as access from '../context-accessors';

export default function incrementCount() {
    const appState = Context.cursor;

    const count = access.count(appState);

    appState.set(
       prop(access.count),
        count + 1
    );
}