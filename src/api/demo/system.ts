import {
  AccountParams,
  DeptListItem,
  MenuParams,
  RoleParams,
  RolePageParams,
  MenuListGetResultModel,
  DeptListGetResultModel,
  AccountListGetResultModel,
  RolePageListGetResultModel,
  RoleListGetResultModel
} from './model/systemModel'
import { defHttp } from '/@/utils/http/axios'
import { ErrorMessageMode } from '/#/axios'

enum Api {
  AccountList = '/system/getAccountList',
  IsAccountExist = '/system/accountExist',
  Depts = '/system/depts/',
  MenuList = '/system/getMenuList',
  Roles = '/system/roles/',
  GetAllRoleList = '/system/getAllRoleList'
}

export const getAccountList = (params: AccountParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.AccountList, params })

export const getDeptList = (params?: DeptListItem) =>
  defHttp.get<DeptListGetResultModel>(
    {
      url: Api.Depts,
      params
    },
    {
      apiUrl: '/apis',
      errorMessageMode: 'modal'
    }
  )

export function createDept(
  params: DeptListItem,
  mode: ErrorMessageMode = 'modal'
) {
  return defHttp.post(
    {
      url: Api.Depts,
      params
    },
    {
      apiUrl: '/apis',
      errorMessageMode: mode
    }
  )
}

export function updateDept(
  id: string,
  params: DeptListItem,
  mode: ErrorMessageMode = 'modal'
) {
  return defHttp.put(
    {
      url: Api.Depts + id + '/',
      params
    },
    {
      apiUrl: '/apis',
      errorMessageMode: mode
    }
  )
}

export function deleteDept(id: string, mode: ErrorMessageMode = 'modal') {
  return defHttp.delete(
    {
      url: Api.Depts + id + '/'
    },
    {
      apiUrl: '/apis',
      errorMessageMode: mode
    }
  )
}
export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.MenuList, params })

export const getRoleListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>(
    {
      url: Api.Roles,
      params
    },
    {
      apiUrl: '/apis',
      errorMessageMode: 'none'
    }
  )

export function createRole(
  params: RoleParams,
  mode: ErrorMessageMode = 'modal'
) {
  return defHttp.post(
    {
      url: Api.Roles,
      params
    },
    {
      apiUrl: '/apis',
      errorMessageMode: mode
    }
  )
}

export function updateRole(
  id: string,
  params: RoleParams,
  mode: ErrorMessageMode = 'modal'
) {
  return defHttp.put(
    {
      url: Api.Roles + id + '/',
      params
    },
    {
      apiUrl: '/apis',
      errorMessageMode: mode
    }
  )
}

export function deleteRole(id: string, mode: ErrorMessageMode = 'modal') {
  return defHttp.delete(
    {
      url: Api.Roles + id + '/'
    },
    {
      apiUrl: '/apis',
      errorMessageMode: mode
    }
  )
}
export const getAllRoleList = (params?: RoleParams) =>
  defHttp.get<RoleListGetResultModel>({ url: Api.GetAllRoleList, params })

export const setRoleStatus = (id: number, name: string, status: string) =>
  defHttp.put(
    { url: Api.Roles + id + '/', params: { name, status } },
    {
      apiUrl: '/apis',
      errorMessageMode: 'modal'
    }
  )

export const setIsAdmin = (id: number, name: string, is_admin: string) =>
  defHttp.put(
    { url: Api.Roles + id + '/', params: { name, is_admin } },
    {
      apiUrl: '/apis',
      errorMessageMode: 'modal'
    }
  )
export const isAccountExist = (account: string) =>
  defHttp.post(
    { url: Api.IsAccountExist, params: { account } },
    { errorMessageMode: 'none' }
  )
