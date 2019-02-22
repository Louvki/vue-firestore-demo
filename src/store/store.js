import Vue from 'vue';
import Vuex from 'vuex';
import * as user from './modules/user-store.js';
import * as event from './modules/event-store.js';
import * as notification from './modules/notification-store.js';

Vue.use(Vuex);

/*
Actions, getters and mutations are under the global namespace.
That's why you don't need to reference the module when calling $store.dispatch()
It is so you could have certain actions with the same name which would run from multiple modules.
Example: You have a website that handles sales. There are 10 modules. Each of those modules needs to log out something
when a sale is made so you could have a backlog. In this case all of them could share an action with the same name of log()
which does different things depending on the module.

However this might cause naming collisions. To avoid that we can use namespacing within our modules.
export const namespaced = true;
*/
export default new Vuex.Store({
  modules: {
    user,
    event,
    notification,
  },
  state: {
    categories: ['Outdoor', 'Indoor', 'Collaborative'],
  },
});
