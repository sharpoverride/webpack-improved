# webpack-improved
Improved webpack build.

I'm trying to get a base project on which to build projects out of.

It represents the bare minimum needed to be productive with the approach I have in mind.

I would add RxJs to the mix, but I need to experiment with it and see if I can get it to compile properly.

You build the UI from React components. 
You try to keep a single immutable application context. You only ever pass a cursor to the top level components.
All components receive a cursor and access the data they need through context/accessors. 
Any change on the cursor is automatically propagated to all subscribing components. 
Because you have a cursor you can batch update or do multiple update requests at any depth level.

..To be continued...
