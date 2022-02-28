import Shipment from '../../../apis/Shipment';

export const getShipments = ({commit}) => {

    Shipment.all().then(response => {
        commit('SET_SHIPMENTS', response.data);
        commit('SET_LOADING', false);
    });
}

export const createShipment = ({commit, dispatch}, payload) => {

    Shipment.createShipment(payload).then(response => {
        
        if(response.statusText === 'OK' && response.data.success){
            commit('SET_SHIPMENT', null);
            dispatch('getShipments');
        }
        
    })
}

export const updateShipment = ({commit}, {id, payload}) => {
    
    Shipment.updateShipment(id, payload).then( response => {

        console.log(payload);

        if(response.statusText === 'OK' && response.data.success){
            commit('SET_SHIPMENT', null);
            // dispatch('getShipments');
        }

    })
}