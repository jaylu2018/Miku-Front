import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel'

export type AccountParams = BasicPageParams & {
  account?: string
  nickname?: string
}

export type RoleParams = {
  name: string
  status: string
  is_admin: string
  desc?: string
}

export type RolePageParams = BasicPageParams & RoleParams

export type DeptParams = {
  deptName?: string
  status?: string
}

export type MenuParams = {
  menuName?: string
  status?: string
}

export interface AccountListItem {
  id: string
  account: string
  email: string
  nickname: string
  role: number
  createTime: string
  remark: string
  status: number
}

export interface DeptListItem {
  name: String
  status: number
  parent?: String
  desc?: string
}

export interface MenuListItem {
  id: string
  orderNo: string
  createTime: string
  status: number
  icon: string
  component: string
  permission: string
}

export interface RoleListItem {
  id: string
  roleName: string
  roleValue: string
  status: number
  orderNo: string
  createTime: string
}

/**
 * @description: Request list return value
 */
export type AccountListGetResultModel = BasicFetchResult<AccountListItem>

export type DeptListGetResultModel = BasicFetchResult<DeptListItem>

export type MenuListGetResultModel = BasicFetchResult<MenuListItem>

export type RolePageListGetResultModel = BasicFetchResult<RoleListItem>

export type RoleListGetResultModel = RoleListItem[]
