/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
	const newObj = {};
	for(const key in obj){
		if (obj[key] && typeof obj[key] === 'Object'){
			newObj[key] = clone(obj[key]);
		} else {
			newObj[key] = obj[key];
		}
	}
	return newObj;
}
