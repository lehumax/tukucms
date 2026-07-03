export function request(options) {
  return new Promise((resolve, reject) => {
    uni.request({
      ...options,
      success: (result) => {
        if (result.statusCode === 200) {
          resolve(result.data); // 请求成功，解析data作为结果返回
        } else {
          reject(new Error(`请求错误，状态码：${result.statusCode}`)); // 非200状态码视为失败
        }
      },
      fail: (err) => {
        reject(err); // 网络请求失败，返回错误信息
      }
    });
  });
}