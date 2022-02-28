<template>
	<div class="grid">
		<div class="col-12">
			<div class="card">
				<h5>GEC Shipments</h5>

                <Toast/>

                <Toolbar class="mb-4">
					<template v-slot:end>
						<Button label="New Shipment" icon="pi pi-plus" class="p-button-success mr-2" @click="openNew" />
					</template>
				</Toolbar>

				<DataTable :value="shipments" :paginator="true" class="p-datatable-gridlines" :rows="20" dataKey="id" :rowHover="true" 
							v-model:filters="filters" filterDisplay="menu" :loading="loading" :filters="filters" responsiveLayout="scroll"
							:globalFilterFields="['shipment_no','container_no','vessel_name']" >
					
					<template #header>
                        <div class="flex justify-content-between flex-column sm:flex-row">
                            <Button type="button" icon="pi pi-filter-slash" label="Clear" class="p-button-outlined mb-2" @click="clearFilter()"/>
                            <span class="p-input-icon-left mb-2">
                                <i class="pi pi-search" />
                                <InputText v-model="filters['global'].value" placeholder="Keyword Search" style="width: 100%"/>
                            </span>
                        </div>
                    </template>
                    <template #empty>
                        No customers found.
                    </template>
                    <template #loading>
                        Loading shipment data. Please wait.
                    </template>
                    <Column headerStyle="min-width:5rem;">
						<template #body="slotProps">
							<Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="editShipment(slotProps.data)" />
						</template>
					</Column>
                    <Column header="Shipment ID" filterField="shipment_no" style="min-width:12rem">
                        <template #body="{data}">
                            {{data.shipment_no}}
                        </template>
                        <template #filter="{filterModel}">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by country"/>
                        </template>
                        <template #filterclear="{filterCallback}">
                            <Button type="button" icon="pi pi-times" @click="filterCallback()" class="p-button-secondary"></Button>
                        </template>
                        <template #filterapply="{filterCallback}">
                            <Button type="button" icon="pi pi-check" @click="filterCallback()" class="p-button-success"></Button>
                        </template>
                    </Column>
                    <Column header="Container ID" filterField="container_no" style="min-width:14rem">
                        <template #body="{data}">
                            {{data.container_no}}
                        </template>
                        <template #filter="{filterModel}">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by country"/>
                        </template>
                        <template #filterclear="{filterCallback}">
                            <Button type="button" icon="pi pi-times" @click="filterCallback()" class="p-button-secondary"></Button>
                        </template>
                        <template #filterapply="{filterCallback}">
                            <Button type="button" icon="pi pi-check" @click="filterCallback()" class="p-button-success"></Button>
                        </template>
                    </Column>
                    <Column header="Vessel" filterField="vessel_name" style="min-width:10rem">
                        <template #body="{data}">
                            {{data.vessel_name}}
                        </template>
                        <template #filter="{filterModel}">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by country"/>
                        </template>
                        <template #filterclear="{filterCallback}">
                            <Button type="button" icon="pi pi-times" @click="filterCallback()" class="p-button-secondary"></Button>
                        </template>
                        <template #filterapply="{filterCallback}">
                            <Button type="button" icon="pi pi-check" @click="filterCallback()" class="p-button-success"></Button>
                        </template>
                    </Column>
                    <Column header="Date" filterField="shipment_date" dataType="date" style="min-width:10rem">
                        <template #body="{data}">
                            {{ ( (data.shipment_date)) }}
                        </template>
                        <template #filter="{filterModel}">
                            <Calendar v-model="filterModel.value" dateFormat="yy-mm-dd" placeholder="yyyy-mm-dd" />
                        </template>
                    </Column>
				</DataTable>

                <Dialog v-model:visible="shipmentDialog" :style="{width: '350px'}" header="New Shipment" :modal="true" class="p-fluid">

                    <div class="field">
						<label for="loadingPort" class="mb-3">Loading Port</label>
						<Dropdown id="loadingPort" v-model="shipment.loading_port" :options="loadingPorts" optionLabel="name" placeholder="Select">
                            <template #value="slotProps">
								<div v-if="slotProps.value && slotProps.value.code">
									<span :class="'product-badge status-' +slotProps.value.code">{{slotProps.value.label}}</span>
								</div>
								<div v-else-if="slotProps.value && !slotProps.value.code">
									<span :class="'product-badge status-' +slotProps.value.toLowerCase()">{{slotProps.value}}</span>
								</div>
								<span v-else>
									{{slotProps.placeholder}}
								</span>
							</template>
                        </Dropdown>
					</div>

					<div class="field">
						<label for="shipment">Shipment #</label>
						<InputText id="shipment_id" v-model.trim="shipment.shipment_no" required="true" :disabled="isShipmentFieldDisabled" autofocus :class="{'p-invalid': submitted && !shipment.shipment_no}" />
						<small class="p-error" v-if="submitted && !shipment.shipment_no">Shipment # is required.</small>
					</div>
					<div class="field">
						<label for="shipmentDate">Shipment Date</label>
						<Calendar :showIcon="true" :showButtonBar="true" required="true" v-model="shipment.shipment_date"></Calendar>
						<small class="p-error" v-if="submitted && !shipment.shipment_date">Shipment Date is required.</small>
					</div>
                    <div class="field">
						<label for="container">Container #</label>
						<InputText id="container_no" v-model.trim="shipment.container_no"/>
					</div>
                    <div class="field">
						<label for="vessel">Vessel Name</label>
						<InputText id="vessel_name" v-model.trim="shipment.vessel_name"/>
					</div>
                    <div class="field">
						<label for="country">Country Code</label>
						<InputText id="country" v-model.trim="shipment.country"/>
					</div>
                    
                    <template #footer>
						<Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
						<Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveShipment"/>
					</template>
				</Dialog>

			</div>
		</div>
        
	</div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
	import {FilterMatchMode,FilterOperator} from 'primevue/api';
    
	export default {

		data() {
			return {
                submitted: false,
				filters: null,
                loadingPorts: [
                    { name: 'JEDDAH', code: 'Jeddah' },
                    { name: 'DAMAM', code: 'Damam' },
                ],
                form: {
                    id: null,
                    shipment_no: null,
                    container_no: null,
                    vessel_name: null,
                    loading_port: null,
                    shipment_date: null,
                    country: 'KSA'
                }
			}
		},

		created() {

			this.initFilters();

		},

		mounted() {		

            this.getShipments();

		},

        computed: {

            ...mapState({
                loading: state => state.loading,
                shipments: state => state.shipment.shipments,
                shipment: state => state.shipment.shipment,
                shipmentDialog: state => state.shipment.shipmentDialog
            }),

            isShipmentFieldDisabled(){

                return this.shipment.id;
                
            }

        },

		methods: {

            ...mapActions(['getShipments', 'createShipment', 'updateShipment']),

            openNew() {
                this.$store.state.shipment.shipment = {};
                this.$store.state.shipment.shipmentDialog = true;
            },

            hideDialog() {
                this.$store.state.shipment.shipmentDialog = false;
                this.submitted = false;
            },

            saveShipment(){

                this.submitted = true;

                if(!this.shipment.id){
                    this.createShipment(this.shipment);
                    this.$toast.add({severity:'success', summary: 'Successful', detail: 'New Shipment Created', life: 3000});
                }
                else {
                    this.updateShipment({ id: this.shipment.id, payload: this.shipment});
                    this.$toast.add({severity:'success', summary: 'Successful', detail: 'Shipment Updated Successfully', life: 3000});
                }
                    
                this.submitted = false;
                this.$store.state.shipment.shipmentDialog = false;

            },

            editShipment(shipment){ 
                this.$store.state.shipment.shipment = shipment;
                // console.log(shipment); 
                this.$store.state.shipment.shipmentDialog = true;
            },

            // updateShipment(){

                
            //     // console.log(this.shipment); 

            //     this.submitted = true;
            //     this.updateShipment(this.shipment);
            //     this.$toast.add({severity:'success', summary: 'Successful', detail: 'Shipment Updated Successfully', life: 3000});
            //     this.submitted = false;
            //     this.$store.state.shipment.shipmentDialog = false;

            // },

			initFilters() {
				this.filters = {
					'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
					'shipment_no': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
					'container_no': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
					'vessel_name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
					'shipment_date': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.DATE_IS}]},
				}
			},

			clearFilter() {
				this.initFilters();
			},

			formatDate(value) {
				return new Date(value).toLocaleDateString('en-US', {
					day: '2-digit',
					month: '2-digit',
					year: 'numeric',
				});
			}
		}
	}
</script>

<style scoped lang="scss">
@import '../assets/demo/badges.scss';

::v-deep(.p-dialog-header-close) {
    visibility: hidden;
}
::v-deep(.p-datatable-frozen-tbody) {
    font-weight: bold;
}

::v-deep(.p-datatable-scrollable .p-frozen-column) {
    font-weight: bold;
}
</style>
