let baseURL;
//获取到环境里的ENV对象
switch (process.env.NODE_ENV) {
    case "development":
        baseURL = "http://dev-mall-pre.springboot.cn/api";
        break;
    case "test":
        baseURL = "http://test-mall-pre.springboot.cn/api";
        break;
    case "production":
        baseURL = "http://mall-pre.springboot.cn/api";
        break;
    default :
    baseURL = "http://dev-mall-pre.springboot.cn/api";
    break;
}

export default {
    baseURL
}