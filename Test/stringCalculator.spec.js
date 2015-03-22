describe('String Calculator', function() {


	describe('Add', function(){

		var calculator;

		beforeEach(function(){
			calculator = new StringCalculator();
		});

		it('should return a number', function(){
			expect(calculator.add()).toEqual(jasmine.any(Number));
		});

		it('should return 0 when no argument is specified', function(){
			expect(calculator.add()).toEqual(0);
		});

		it('should return 1 when 1 is specified as an argument', function(){
			expect(calculator.add('1')).toEqual(1);
		});

		it('should return 3 when 1 and 2 are specified as arguments', function(){
			expect(calculator.add('1, 2')).toEqual(3);
		});

		it('should return 4 when 1, 1 and 2 are specified as arguments', function(){
			expect(calculator.add('1, 1, 2')).toEqual(4);
		});

		it('should return 6 with the following input is ok: "1\n2,3"', function(){
			expect(calculator.add("1\n2,3")).toEqual(6);
		});

		it('should return three where the followinf input is ;\n1;2 and the default delimiter is ;', function(){
			expect(calculator.add(";\n1;2")).toEqual(3);
		});

	});
});
