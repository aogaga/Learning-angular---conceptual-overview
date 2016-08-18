angular.module('invoice1', [])
.controller('InvoiceController', function(){

this.qty= 1; 
this.cost = 2;
this.incurr = 'EUR';
this.currencies = ['USD', 'EUR', 'CNY'];


this.usdToForeignRates = {
		USD: 1, 
		EUR: 0.74,
		CNY: 6.09
	};



this.total = function total(outCurr){
return this.converCurrency((this.qty * this.cost), this.incurr, outCurr);
};




this.converCurrency = function converCurrency(amount, incurr, outCurr){

return ((amount * this.usdToForeignRates[outCurr]) / this.usdToForeignRates[incurr]);


};



this.pay = function pay(){
	window.alert('Thanks');
}



});