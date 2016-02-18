describe(something, function() {
	it.('should do something', function() {

	})
}

/**** Expect style *****/

//jasmine

expect(Calculator.add(1,4).toEqual(5));

//mocha CHAI

expect(Calculator.add(1,4).to.equal(5));

/***** Test doubles (stunt doubles and spies) ****/
//only in jasmine

//jasmine: spy on existing methods

var methodSaveSpy = spyOn(User.prototype, 'save');

// jasmine: create spy with no existing method to call on

var tempSpy = jasmine.createSpy();

spyOn(user, 'isValid').andCallThrough(); //jasmine

sinon.spyOn(user, 'isValid'); //sinon

// need to add sinone to mocha in order to use test doubles
// sinone also comes with mocks, spies, and stubs

//stub is a controllable replacement

spyOn(user, 'isValid').andReturns(true); //jasmine

sinon.stub(user, 'isValid').returns(true); //sinon

/********** Asynchronous Testing *********/

//mocha and jasmine test works

it('Should resolve with the User object', function(done) {
	var dfer = new $.Deferred();
	var dprom = dfer.promise();
	var stub sinon.stub(user.prototype, 'fetch').returns(dprom);

	dfer.resolve({'name': 'Joe'});

	User.get().then(function(user) {
		expect(user instanceOf User).toBe(true);
		done(); //passed in done function to control testing time
	})
});





