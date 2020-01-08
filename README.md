# 利用typescript来封装xhr实现axios

目前实现的功能：
1. axios接收的参数支持url，method，data，params，headers，responseType和timeout
2. 支持发送get, post, request, delete, head,options, put和patch方法
3. 请求错误会返回isAxiosError, axiosRequestConfig, statusCode, xhr对象以及axiosresponse响应数据

启动服务：
1.npm run dev 启动后台接口
2.进入localhost:8080相应页面查看控制台
