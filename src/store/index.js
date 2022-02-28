import { createStore } from 'vuex';

import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

import shipment from './modules/shipment';

const store = createStore({

    state,

    getters,

    mutations,

    actions,

    modules:{

        shipment

    }

});

export default store;