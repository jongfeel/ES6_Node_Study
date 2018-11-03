const moduleVar1 = "hungry";
const moduleVar2 = "tired";
const moduleFunc1 = () => "save";
const moduleFunc2 = () => "me!";

module.exports.moVal1 = moduleVar1;
module.exports.moFunc1 = moduleFunc1;
exports.moVal2 = moduleVar2;
exports.moFunc2 = moduleFunc2;

console.log(module.exports === exports);

module.exports = {
	moVar1 : moduleVar1,
	moVar2 : moduleVar2,
	moFunc1 : moduleFunc1,
	moFunc2 : moduleFunc2
};

exports = { moVar3: "hot", moVar4: "happy" };
console.log(module.exports === exports);

exports = module.exports;
exports.moVar3 = "cold";