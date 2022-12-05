<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增部门 </a-button>
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
    <DeptDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>
<script setup lang="ts">
import { BasicTable, useTable, TableAction } from '/@/components/Table'
import { getDeptList } from '/@/api/demo/system'
import { columns, searchFormSchema } from './dept.data'
import DeptDrawer from '/@/views/demo/system/dept/DeptDrawer.vue'
import { useDrawer } from '/@/components/Drawer'

const [registerDrawer, { openDrawer }] = useDrawer()
const [registerTable, { reload }] = useTable({
  title: '部门列表',
  api: getDeptList,
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
  console.log(record)
}

function handleSuccess() {
  reload()
}
</script>
