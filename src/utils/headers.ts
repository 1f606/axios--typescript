import { isPlainObject } from './validate'

function normailzeHeaderName(headers: any, normailzedName: string): void {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach((name) => {
    if (name !== normailzedName && name.toUpperCase() === normailzedName.toUpperCase()) {
      headers[normailzedName] = headers[name]
      delete headers[name]
    }
  })
}

export function processHeaders(headers: any, data: any): any {
  normailzeHeaderName(headers, 'Content-Type')

  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }

  return headers
}

export function parseHeaders(headers: string): any {
  let parsed = Object.create(null)

  if (!headers) {
    return parsed
  }

  //  按回车符和换行符分割
  headers.split('\r\n').forEach((line) => {
    let [key, value] = line.split(':')
    key = key.trim().toLowerCase()
    if (!key) {
      return
    }
    if (value) {
      value = value.trim()
    }
    parsed[key] = value
  })

  return parsed
}