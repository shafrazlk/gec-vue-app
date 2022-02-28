import Api from './Api'

export default {

    all(){
        return Api.get('shipments');
    },

    createShipment(payload){
        
        return Api.put('/shipment', payload);

    },

    updateShipment(id, payload){
        
        return Api.post(`/shipment/${id}`, payload);
    }
}