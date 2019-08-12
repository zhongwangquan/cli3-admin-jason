import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from "./modules/user"
import setting from "./modules/settings"
import getters from "./getters"

export default new Vuex.Store({
    modules: {
        user: user,
        setting: setting,
    },
    getters

})
