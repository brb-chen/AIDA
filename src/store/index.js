// Using Vuex paradigm to build a central store of application state.
import Vue from 'vue'
import Vuex from 'vuex'

// Import the Vuex logic that has been modularized and seperated into different
// files.
import image from './modules/image'
import annotation from './modules/annotation'
import config from './modules/config'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    image,
    annotation,
    config
  }
})
