//统一管理咱们项目用户相关的接口
import request from '@/utils/request'

//项目用户相关的请求地址
enum API {
  LOGIN_URL = '/admin/acl/index/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',
}


export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)