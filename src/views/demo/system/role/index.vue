<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增角色 </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record)
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record)
              }
            }
          ]"
        />
      </template>
    </BasicTable>
    <RoleDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>
<script setup lang="ts">
import { BasicTable, useTable, TableAction } from '/@/components/Table'
import { deleteRole, getRoleListByPage } from '/@/api/demo/system'
import { useDrawer } from '/@/components/Drawer'
import RoleDrawer from './RoleDrawer.vue'
import { columns, searchFormSchema } from './role.data'
import { useMessage } from '/@/hooks/web/useMessage'

const [registerDrawer, { openDrawer }] = useDrawer()
const [registerTable, { reload }] = useTable({
  title: '角色列表',
  api: getRoleListByPage,
  columns,
  formConfig: {
    labelWidth: 120,
    schemas: searchFormSchema
  },
  useSearchForm: true,
  showTableSetting: true,
  bordered: true,
  showIndexColumn: false,
  actionColumn: {
    width: 80,
    title: '操作',
    dataIndex: 'action',
    slots: { customRender: 'action' },
    fixed: undefined
  }
})

function handleCreate() {
  openDrawer(true, {
    isUpdate: false
  })
}

function handleEdit(record: Recordable) {
  openDrawer(true, {
    record,
    isUpdate: true
  })
}

function handleDelete(record: Recordable) {
  const { createMessage } = useMessage()
  deleteRole(record.id)
    .then(() => {
      createMessage.success(`已成功删除角色`)
    })
    .catch(() => {
      createMessage.error('删除角色失败')
    })
    .finally(() => {
      reload()
    })
}

function handleSuccess() {
  reload()
}
</script>
