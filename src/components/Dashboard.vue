<template>
	<div class="grid">
		<div class="col-12 lg:col-6 xl:col-3">
			<div class="card mb-0">
				<div class="flex justify-content-between mb-3">
					<div>
						<span class="block text-500 font-medium mb-3">Shipments</span>
						<div class="text-900 font-medium text-7xl">152</div>
					</div>
					<div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
						<i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
					</div>
				</div>
				<span class="text-green-500 font-medium">24 new </span>
				<span class="text-500">since last visit</span>
			</div>
		</div>
		<div class="col-12 lg:col-6 xl:col-3">
			<div class="card mb-0">
				<div class="flex justify-content-between mb-3">
					<div>
						<span class="block text-500 font-medium mb-3">HBLs</span>
						<div class="text-900 font-medium text-7xl">$2.100</div>
					</div>
					<div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
						<i class="pi pi-map-marker text-orange-500 text-xl"></i>
					</div>
				</div>
				<span class="text-green-500 font-medium">%52+ </span>
				<span class="text-500">since last week</span>
			</div>
		</div>
		<div class="col-12 lg:col-6 xl:col-3">
			<div class="card mb-0">
				<div class="flex justify-content-between mb-3">
					<div>
						<span class="block text-500 font-medium mb-3">Customers Served</span>
						<div class="text-900 font-medium text-7xl">28441</div>
					</div>
					<div class="flex align-items-center justify-content-center bg-cyan-100 border-round" style="width:2.5rem;height:2.5rem">
						<i class="pi pi-inbox text-cyan-500 text-xl"></i>
					</div>
				</div>
				<span class="text-green-500 font-medium">520  </span>
				<span class="text-500">newly registered</span>
			</div>
		</div>
		<div class="col-12 lg:col-6 xl:col-3">
			<div class="card mb-0">
				<div class="flex justify-content-between mb-3">
					<div>
						<span class="block text-500 font-medium mb-3">Create Letter</span>
						<div class="text-900 font-medium text-xl">&nbsp;</div>
					</div>
					<div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width:8rem;height:7.1rem">
						<i class="pi pi-comment text-purple-500 text-7xl"></i>
					</div>
				</div>
				<span class="text-green-500 font-medium">85 </span>
				<span class="text-500">responded</span>
			</div>
		</div>
	</div>
</template>

<script>
import ProductService from '../service/ProductService';

export default {
	data() {
		return {
			products: null,
			lineData: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [
					{
						label: 'Revenue',
						data: [65, 59, 80, 81, 56, 55, 40],
						fill: false,
						backgroundColor: '#2f4860',
						borderColor: '#2f4860',
						tension: 0.4
					},
					{
						label: 'Sales',
						data: [28, 48, 40, 19, 86, 27, 90],
						fill: false,
						backgroundColor: '#00bb7e',
						borderColor: '#00bb7e',
						tension: 0.4
					}
				]
			},
			items: [
                {label: 'Add New', icon: 'pi pi-fw pi-plus'},
                {label: 'Remove', icon: 'pi pi-fw pi-minus'}
            ],
			lineOptions: null,
		}
	},
	productService: null,
	mounted() {
		this.productService.getProductsSmall().then(data => this.products = data);
		
	},
	beforeUnmount() {
    },
	created() {
		this.productService = new ProductService();
	},
	methods: {
		formatCurrency(value) {
			return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
		}
	}
}
</script>