# 利用typescript来封装xhr实现axios

目前实现了axios的基本功能：
1. axios接收的参数支持url，method，data，params，headers，responseType和timeout
2. 支持发送get, post, request, delete, head,options, put和patch方法
3. 错误处理：请求错误会返回isAxiosError, axiosRequestConfig, statusCode, xhr对象以及axiosresponse响应数据
