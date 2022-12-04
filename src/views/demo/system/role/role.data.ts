import { BasicColumn } from '/@/components/Table'
import { FormSchema } from '/@/components/Table'
import { h } from 'vue'
import { Switch } from 'ant-design-vue'
import { setRoleStatus, setIsAdmin } from '/@/api/demo/system'
import { useMessage } from '/@/hooks/web/useMessage'

export const columns: BasicColumn[] = [
  {
    title: '角色名称',
    dataIndex: 'name',
    width: 200
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 120,
    customRender: ({ record }) => {
      if (!Reflect.has(record, 'pendingStatus')) {
        record.pendingStatus = false
      }
      return h(Switch, {
        checked: record.status === true,
        checkedChildren: '启用',
        unCheckedChildren: '禁用',
        loading: record.pendingStatus,
        onChange(checked: boolean) {
          record.pendingStatus = true
          const newStatus = checked
          const { createMessage } = useMessage()
          setRoleStatus(record.id, record.name, String(newStatus))
            .then(() => {
              record.status = newStatus
              createMessage.success(`已成功修改角色状态`)
            })
            .catch(() => {
              createMessage.error('修改角色状态失败')
            })
            .finally(() => {
              record.pendingStatus = false
            })
        }
      })
    }
  },
  {
    title: '是否为管理员',
    dataIndex: 'is_admin',
    width: 120,
    customRender: ({ record }) => {
      if (!Reflect.has(record, 'pendingAdmin')) {
        record.pendingAdmin = false
      }
      return h(Switch, {
        checked: record.is_admin === true,
        checkedChildren: '是',
        unCheckedChildren: '否',
        loading: record.pendingAdmin,
        onChange(checked: boolean) {
          record.pendingAdmin = true
          const newIsAdmin = checked
          const { createMessage } = useMessage()
          setIsAdmin(record.id, record.name, String(newIsAdmin))
            .then(() => {
              record.is_admin = newIsAdmin
              createMessage.success(`已成功修改角色状态`)
            })
            .catch(() => {
              createMessage.error('修改角色状态失败')
            })
            .finally(() => {
              record.pendingAdmin = false
            })
        }
      })
    }
  },
  {
    title: '创建时间',
    dataIndex: 'create_time',
    width: 180
  },
  {
    title: '更新时间',
    dataIndex: 'update_time',
    width: 180
  },
  {
    title: '备注',
    dataIndex: 'desc'
  }
]

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '角色名称',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '启用', value: false },
        { label: '停用', value: true }
      ]
    },
    colProps: { span: 8 }
  }
]

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: '角色ID',
    required: false,
    component: 'Input',
    show: false
  },
  {
    field: 'name',
    label: '角色名称',
    required: true,
    component: 'Input'
  },
  {
    field: 'status',
    label: '状态',
    component: 'RadioButtonGroup',
    defaultValue: true,
    componentProps: {
      options: [
        { label: '启用', value: true },
        { label: '停用', value: false }
      ]
    }
  },
  {
    field: 'is_admin',
    label: '是否为管理员',
    component: 'RadioButtonGroup',
    defaultValue: false,
    componentProps: {
      options: [
        { label: '是', value: true },
        { label: '否', value: false }
      ]
    }
  },
  {
    label: '备注',
    field: 'desc',
    component: 'InputTextArea'
  },
  {
    label: ' ',
    field: 'menu',
    slot: 'menu',
    component: 'Input'
  }
]
