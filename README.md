# Webpack based project skeleton

I defined a base project development skeleton.

It represents the bare minimum needed to be productive with the approach I have in mind.

* You build the UI from React components.
* You try to keep a single immutable application context. You only ever pass a cursor to the top level components.
* All components receive a cursor and access the data they need through context accessors.
* An accessor hides the data structure found in the context in order to simplify property name refactoring as the app evolves.
* Any change on the cursor is automatically propagated to all subscribing components.
* Because you have a cursor you can batch update or do single update requests at any depth level.



## Start development

*Note:* You need to delete `index.d.ts` from `node_modules/immutable/contrib/cursor/` folder in order for `node run dev` to work

You run the `npm run dev` command. Build should succeed if you removed the faulty index.d.ts from immutable/contrib/cursor.
