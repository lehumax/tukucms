// 配置基地址
import Site from "../siteinfo.js";



// 设置默认请求头
const DEFAULT_HEADERS = {
  
};

// 显示加载提示
function showLoading(title = '加载中...') {
  uni.showLoading({
    title,
  });
}

// 隐藏加载提示
function hideLoading() {
  uni.hideLoading();
}



// 错误处理
function handleError(err) {
  uni.hideLoading();
  uni.showToast({
    icon: 'none',
    title: err.message || '请求失败，请重试',
  });
  console.error('网络请求错误:', err);
}

// 封装的request方法
export default function request(options) {
  const requestOptions = {
    url: `${Site.basePath}${options.url}`,
    method: options.method || 'GET',
    data: options.data,
    header: Object.assign({}, DEFAULT_HEADERS, options.header),
    dataType: options.dataType || 'json',
    responseType: options.responseType || 'text',
    success: options.success,
    fail: options.fail,
    complete: options.complete,
  };

  showLoading(); // 显示加载提示

  return new Promise((resolve, reject) => {
		uni.request({  
			...requestOptions,
			success: (res) => {  
				// 处理响应数据  
				if (res.data && res.data.code === 200) { // 假设服务器返回的状态码为200表示成功
					hideLoading(); // 隐藏加载提示
					resolve(decData);
				} else {   
					const errMsg = res.data.message || '服务器错误';
					reject(new Error(errMsg));
					handleError({ message: errMsg });
				}  
			},  
			fail: (err) => {  
				// 处理网络错误  
				reject(err.message || '网络请求失败');  
				handleError(err.message);
			},  
		});
  	});
}