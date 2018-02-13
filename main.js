var app = angular.module('app', ['ngRoute']);
app.controller('itemCtrl', function () {
	var vm = this;
	vm.items = [
		{
			id: 1
			, name: "Anna"
			, sname: "Tyryk"
			, number: "0977187957"
		}
		, {
			id: 2
			, name: "Marta"
			, sname: "Bok"
			, number: "0685241935"
		}
		, {
			id: 3
			, name: "Yura"
			, sname: "Hymyn"
			, number: "0502315486"
		}
		, {
			id: 4
			, name: "Galia"
			, sname: "Gut"
			, number: "0978961357"
		}
	];
	vm.currentItem = {};
	vm.id = 4;
	vm.search = '';
	vm.delete = function (index) {
		vm.items.splice(index, 1);
	};
	vm.save = function(){
		vm.currentItem.id = ++vm.id;
		vm.items.push(vm.currentItem);
		vm.currentItem = {};
	}
	vm.update = function(item){
		vm.currentItem = item;
	}
	vm.orderedMe = function(x){
				vm.orderedBy = x;
			}

})