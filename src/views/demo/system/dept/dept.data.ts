import { BasicColumn } from '/@/components/Table'
import { FormSchema } from '/@/components/Table'
import { h } from 'vue'
import { Switch} from 'ant-design-vue'
import { useMessage } from '/@/hooks/web/useMessage'
import { setRoleStatus } from '/@/api/demo/system'

export const columns: BasicColumn[] = [
  {
    title: '部门名称',
    dataIndex: 'name',
    width: 160,
    align: 'left'
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 80,
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
              createMessage.success(`已成功修改部门状态`)
            })
            .catch(() => {
              createMessage.error('修改角色部门失败')
            })
            .finally(() => {
              record.pendingStatus = false
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
    title: '备注',
    dataIndex: 'desc',
    width: 120
  }
]

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '部门名称',
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
    field: 'name',
    label: '部门名称',
    component: 'Input',
    required: true
  },
  {
    field: 'parent',
    label: '上级部门',
    component: 'TreeSelect',

    componentProps: {
      fieldNames: {
        label: 'name',
        key: 'id',
        value: 'id'
      },
      getPopupContainer: () => document.body
    },
    required: true
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
    },
    required: true
  },
  {
    label: '备注',
    field: 'desc',
    component: 'InputTextArea'
  }
]
