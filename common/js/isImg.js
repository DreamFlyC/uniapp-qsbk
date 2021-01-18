export function isImg(urlInfo){
	let imgPatternList=['png', 'jpg', 'jpeg', 'bmp', 'gif']
	let pattern = urlInfo.slice(urlInfo.lastIndexOf('.')+1);
	let result = imgPatternList.some(function (item) {
		// console.log(item);
		return item == pattern;
	});
	return result;
}