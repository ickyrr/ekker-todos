import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import authenticateModule from './modules/authenticate';
import todosModule from './modules/todos';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(authenticateModule);
app.loadModule(todosModule);
app.init();
