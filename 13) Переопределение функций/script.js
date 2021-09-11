function format(data, type) {
   if (type === "number") {
	   format = function () {
		   var dataNew = Number(data);
		   return dataNew;
	   }
   } else if (type === "string") {
	   format = function () {
		   var dataNew = String(data);
		   return dataNew;
	   }
   } else if(type === "boolean") {
	   format = function () {
		   var dataNew = Boolean(data);
		   return dataNew;
	   }
   }
	return data;
}
var originFormat = format;

format("1", "number");
console.log(format()); // 1
console.log(typeof format()); // "number"

originFormat("Hello", "boolean");
console.log(format()); // true
console.log(typeof format()); // "boolean"

originFormat(true, "string");
console.log(format()); // "true"
console.log(typeof format()); // "string"
