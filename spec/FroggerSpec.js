describe("Frogger", function() {

});

describe("Enemy Constructor", function() {
	var foo;

	beforeEach(function() {
		foo = {
			sprite: "images/enemy-bug.png"
		}
	});

	it("Should return object containing sprite property", function() {
		var enemy1 = new Enemy();
		expect(enemy1.sprite).toEqual(foo.sprite);
	});
});