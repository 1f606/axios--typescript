/**
 * 规定了传入的方法
 */
export type Method = 'get' | 'GET'
  | 'post' | 'POST'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'

  /**
   * 规定传入axios的参数的规范
   */
export interface AxiosRequestConfig {
  url: string,
  method?: Method,
  data?: any,
  params?: any,
  headers?: any,
  responseType?: XMLHttpRequestResponseType,
  timeout?: number
}

export interface AxiosResponse {
  data: any,
  status: number,
  statusText: string,
  headers: any,
  config: AxiosRequestConfig,
  request: any
}

export interface AxiosPromise extends Promise<AxiosResponse> {
  
}

export interface AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequestConfig,
  code?: string | null,
  request?: any,
  response?: AxiosResponse
}