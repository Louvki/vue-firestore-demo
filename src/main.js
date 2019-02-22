import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import 'nprogress/nprogress.css';
import Vuelidate from 'vuelidate';
import DateFilter from './filters/date';

Vue.filter('date', DateFilter);

Vue.use(Vuelidate); 

/* Global mixin example
Mixins are little parts of reusable code that can be hooked into components. In short they help to encapsulate repeatable code. 
(Example:. You need to have a method that makes some calculations and created a computed variable in 5 different components. In this case you could use a mixin. )
They run before the component does so any variables or methods that have the same name will be overwritten by the component.
*/
// Vue.mixin({
//   mounted() {
//     console.log('I am mixed into every component');
//   },
// });

const requireComponent = require.context(
    './components',
    false,
    /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
      camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
