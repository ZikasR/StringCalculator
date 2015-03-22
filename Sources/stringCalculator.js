'use stricte';

var StringCalculator = function(){
  this.result = 0;
};

StringCalculator.prototype.add = function(numbers){

  if(numbers){
    numbers = numbers.split('\n');
    var delimiter = isNaN(parseInt(numbers[0])) && (numbers.length > 1)? numbers[0] : ',';

   for (var i = 0; i < numbers.length; i++) {
     num = numbers[i].split(delimiter);

     for (var j = 0; j < num.length; j++) {
       this.result += isNaN(parseInt(num[j])) ? 0 : parseInt(num[j]);
     }
   }
  }

  return this.result;
};
