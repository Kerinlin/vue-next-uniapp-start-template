// #ifndef APP-NVUE
// 计算版本
export function compareVersion(v1, v2) {
	v1 = v1.split('.')
	v2 = v2.split('.')
	const len = Math.max(v1.length, v2.length)
	while (v1.length < len) {
		v1.push('0')
	}
	while (v2.length < len) {
		v2.push('0')
	}
	for (let i = 0; i < len; i++) {
		const num1 = parseInt(v1[i], 10)
		const num2 = parseInt(v2[i], 10)

		if (num1 > num2) {
			return 1
		} else if (num1 < num2) {
			return -1
		}
	}
	return 0
}
const systemInfo = uni.getSystemInfoSync();
function gte(version) {
	// 截止 2023-03-22 mac pc小程序不支持 canvas 2d
	console.log('uni', uni)
	let { SDKVersion, platform } = systemInfo;
	// #ifdef MP-ALIPAY
	SDKVersion = my.SDKVersion
	// #endif
	// #ifdef MP-WEIXIN
	return platform !== 'mac' && compareVersion(SDKVersion, version) >= 0;
	// #endif
	return compareVersion(SDKVersion, version) >= 0;
}


export function canIUseCanvas2d() {
	// #ifdef MP-WEIXIN
	return gte('2.9.0');
	// #endif
	// #ifdef MP-ALIPAY
	return gte('2.7.0');
	// #endif
	// #ifdef MP-TOUTIAO
	return gte('1.78.0');
	// #endif
	return false
}

export function wrapTouch(event) {
	for (let i = 0; i < event.touches.length; ++i) {
		const touch = event.touches[i];
		touch.offsetX = touch.x;
		touch.offsetY = touch.y;
	}
	return event;
}
export const devicePixelRatio = uni.getSystemInfoSync().pixelRatio
// #endif
// #ifdef APP-NVUE
export function base64ToPath(base64) {
	return new Promise((resolve, reject) => {
		const [, format, bodyData] = /data:image\/(\w+);base64,(.*)/.exec(base64) || [];
		const bitmap = new plus.nativeObj.Bitmap('bitmap' + Date.now())
		bitmap.loadBase64Data(base64, () => {
			if (!format) {
				reject(new Error('ERROR_BASE64SRC_PARSE'))
			}
			const time = new Date().getTime();
			const filePath = `_doc/uniapp_temp/${time}.${format}`

			bitmap.save(filePath, {},
				() => {
					bitmap.clear()
					resolve(filePath)
				},
				(error) => {
					bitmap.clear()
					console.error(`${JSON.stringify(error)}`)
					reject(error)
				})
		}, (error) => {
			bitmap.clear()
			console.error(`${JSON.stringify(error)}`)
			reject(error)
		})
	})
}
// #endif


export function sleep(time) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true)
		}, time)
	})
}


export function getRect(selector, options = {}) {
	const typeDefault = 'boundingClientRect'
	const { context, type = typeDefault} = options
	return new Promise((resolve, reject) => {
		const dom = uni.createSelectorQuery().in(context).select(selector);
		const result = (rect) => {
			if(rect) {
				 resolve(rect)
			} else {
				reject()
			}
		}
		if(type == typeDefault) {
			dom[type](result).exec()
		} else {
			dom[type]({
				node: true,
				size: true,
				rect: true
			}, result).exec()
		}
	});
};