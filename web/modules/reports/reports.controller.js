(function(){
	'use strict';

	angular.module('app.reports')
		.controller('ReportsCtrl', reportsCtrl);

	reportsCtrl.$inject = ['reports'];

	function reportsCtrl(reports) {
		var vm = this;

		var productChart = {};
		var vendorChart = {};

		productChart.type = "ColumnChart";
		vendorChart.type = "ColumnChart";

		productChart.data = [];
		productChart.data.push(['Produto', 'Vendas']);

        vendorChart.data = []; 
        vendorChart.data.push(['Vendedor', 'Vendas']);

		reports.getProductReport(function (loadedData) {
			productChart.data.splice(1);

			loadedData.forEach(function (item) {
				productChart.data.push([item.$id, item.$value]);
			});
		});

		reports.getVendorReport(function (loadedData) {
            vendorChart.data.splice(1);

            loadedData.forEach(function (item) {
				vendorChart.data.push([item.$id, item.$value]);
			});
		});

		productChart.options = {
			animation: {
                duration: '1000',
                easing: 'out',
                startup: 'true'
            },
			vAxis: {
				title: "Quantidade de Vendas"
			},
			hAxis: {
				title: "Produto"
			}
		};

		vendorChart.options = {
			animation: {
                duration: '1000',
                easing: 'out',
                startup: 'true'
            },
			vAxis: {
				title: "Quantidade de Vendas"
			},
			hAxis: {
				title: "Vendedor"
			}
		};		

		vm.productChart = productChart;
		vm.vendorChart = vendorChart;
	}

})();