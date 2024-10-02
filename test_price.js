var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",

    price: function () {
        var sum = 0;
        for (var i = 0; i < Object.values(this).length; i++) {
            var currentValue = Object.values(services)[i];
            if (typeof (currentValue) !== 'function') { 
                sum += parseFloat(currentValue.substring(0, currentValue.indexOf(' ')));
            }
        }
        return sum;
    },

    minPrice: function () {
       var minPrice = Number.MAX_VALUE;
        for (var i = 0; i < Object.values(this).length; i++) {
            var currentValue = Object.values(services)[i];
            if (typeof (currentValue) != 'function') {
                var parsedCurrentValue = parseFloat(currentValue.substring(0, currentValue.indexOf(' ')));
                if (minPrice > parsedCurrentValue) {
                    minPrice = parsedCurrentValue;
                }
            }
        }
        return minPrice;
    },

    maxPrice: function () {
        var maxPrice = 0;
         for (var i = 0; i < Object.values(this).length; i++) {
             var currentValue = Object.values(services)[i];
             if (typeof (currentValue) != 'function') {
                 var parsedCurrentValue = parseFloat(currentValue.substring(0, currentValue.indexOf(' ')));
                 if (maxPrice < parsedCurrentValue) {
                    maxPrice = parsedCurrentValue;
                 }
             }
         }
         return maxPrice;
     }
};

console.log("Price:", services.price());
console.log("MinPrice:", services.minPrice());
console.log("MaxPrice:", services.maxPrice());

services['Розбити скло'] = "200 грн";

console.log("Price:", services.price());
console.log("MaxPrice:", services.maxPrice());


