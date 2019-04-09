//marketfinder tests

const finder = require('./marketfinder');

var fixture = [
{testval:8448300747353230,assert:true}
];

test('test account number with no leading space',() =>{
	 expect(finder("84482000")).toBe("La North");
});

test('test account number with leading space',() =>{
	expect(finder("  84482000")).toBe("La North");
});

test('test La North  prin lower boundry',() =>{
	expect(finder("84482000")).toBe("La North");

});

test('test La North prin upper boundry',() =>{
	expect(finder("84482999")).toBe("La North");

});