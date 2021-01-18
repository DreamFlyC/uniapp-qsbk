export function previewImage(index,imgList) {
	// 图片预览
	uni.previewImage({
		urls: imgList,
		current:imgList[index],
		longPressActions: {
			itemList: ['发送给朋友', '保存图片', '收藏'],
		}
	});
}

export function getEmojiPng(list){
	var arr=[];
	let child=[];
	for (let item of list) {
		child=[];
		for (let key of item) {
			child.push('http://www.xiaopang.cool/imgs/'+key+'.png');
		}
		arr.push(child);
	}
	return arr;
}

export function getEmojiGif(list){
	var arr=[];
	let child=[];
	for (let item of list) {
		child=[];
		for (let key of item) {
			child.push('http://www.xiaopang.cool/imgs/'+key+'.gif');
		}
		arr.push(child);
	}
	return arr;
} 