import request from '@/utils/request'

// eslint-disable-next-line import/prefer-default-export
export function getUserAPI() {
  return request({
    url: '/user',
    method: 'get'
  })
}
