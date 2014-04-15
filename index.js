var simple = (function() {

	if (typeof module !== "undefined" && module.exports) {
		data = require("./data").data
	}

	var main = function(txt) {
		var len = data.length
		for (var i = 0; i < len; i++) {
			var reg = new RegExp("\\b" + data[i][0] + "\\b", "gi");
			txt = txt.replace(reg, data[i][1])
		}
		return txt
	}


	if (typeof module !== "undefined" && module.exports) {
		exports.simple = main
	}
	return main

})()

// console.log(simple("well, as a matter of fact, they ran at full blast "))