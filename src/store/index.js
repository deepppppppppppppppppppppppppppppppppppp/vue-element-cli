import Vue from 'vue';
import Vuex from 'vuex';

// ------------------------------
import createLogger from 'vuex/dist/logger'
import demoStore from '@/pages/demo/store.js';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
    strict: debug,
    plugins: debug ? [createLogger()] : [],
    state: {},
    mutations: {},
    actions: {},
    modules: {
        demoStore: demoStore
    },
});