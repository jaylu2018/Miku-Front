<template>
  <div>
    <BasicTable @register="registerTable" @edit-change="handleEditChange">
      <template #action="{ record, column }">
        <TableAction :actions="createActions(record, column)" />
      </template>
    </BasicTable>
    <a-button block class="mt-1" type="dashed" @click="handleAdd">
      新增一组数据
    </a-button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import {
  BasicTable,
  useTable,
  TableAction,
  BasicColumn,
  ActionItem,
  EditRecordRow
} from '/@/components/Table'

const columns: BasicColumn[] = [
  {
    title: 'Key',
    dataIndex: 'name',
    editRow: true,
    helpMessage: '输入字典的键'
  },
  {
    title: 'Value',
    dataIndex: 'value',
    editRow: true,
    helpMessage: '输入字典的值'
  },
  {
    title: '描述',
    dataIndex: 'desc',
    editRow: true,
    helpMessage: '输入描述'
  }
]

const data: any[] = [
  {
    name: 'John Brown',
    value: '00001',
    desc: 'New York No. 1 Lake Park'
  }
]
export default defineComponent({
  components: { BasicTable, TableAction },
  setup() {
    const [registerTable, { getDataSource }] = useTable({
      columns: columns,
      showIndexColumn: false,
      dataSource: data,
      actionColumn: {
        width: 200,
        title: '操作',
        dataIndex: 'action',
        slots: { customRender: 'action' }
      },
      maxHeight: 200,
      pagination: false
    })

    function handleEditChange(data: Recordable) {
      console.log(data)
    }

    function handleEdit(record: EditRecordRow) {
      record.onEdit?.(true)
    }

    function handleCancel(record: EditRecordRow) {
      record.onEdit?.(false)
      if (record.isNew) {
        const data = getDataSource()
        const index = data.findIndex((item) => item.key === record.key)
        data.splice(index, 1)
      }
    }

    function handleSave(record: EditRecordRow) {
      record.onEdit?.(false, true)
    }

    function handleDelete(record: EditRecordRow) {
      const data = getDataSource()
      const index = data.findIndex((item) => item.key === record.key)
      data.splice(index, 1)
    }

    function handleAdd() {
      const data = getDataSource()
      const addRow: EditRecordRow = {
        name: '',
        value: '',
        desc: '',
        editable: true,
        isNew: true,
        key: `${Date.now()}`
      }
      data.push(addRow)
    }

    function createActions(
      record: EditRecordRow,
      column: BasicColumn
    ): ActionItem[] {
      if (!record.editable) {
        return [
          {
            label: '编辑',
            onClick: handleEdit.bind(null, record)
          },
          {
            label: '删除',
            popConfirm: {
              title: '是否删除',
              confirm: handleDelete.bind(null, record, column)
            }
          }
        ]
      }
      return [
        {
          label: '保存',
          onClick: handleSave.bind(null, record, column)
        },
        {
          label: '取消',
          popConfirm: {
            title: '是否取消编辑',
            confirm: handleCancel.bind(null, record, column)
          }
        }
      ]
    }

    return {
      registerTable,
      handleEdit,
      createActions,
      handleAdd,
      getDataSource,
      handleEditChange,
      handleDelete
    }
  }
})
</script>
