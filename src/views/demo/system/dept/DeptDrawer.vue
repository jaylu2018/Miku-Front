<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="500px"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" />
  </BasicDrawer>
</template>
<script setup lang="ts">
import { ref, computed, unref } from 'vue'
import { BasicDrawer, useDrawerInner } from '/@/components/Drawer'
import { BasicForm, useForm } from '/@/components/Form/index'
import { formSchema } from './dept.data'
import { createDept, getDeptList, updateDept } from '/@/api/demo/system'
import { useMessage } from '/@/hooks/web/useMessage'

const isUpdate = ref(true)

const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] =
  useForm({
    labelWidth: 100,
    schemas: formSchema,
    showActionButtonGroup: false
  })

const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(
  async (data) => {
    resetFields()
    setDrawerProps({ confirmLoading: false })
    isUpdate.value = !!data?.isUpdate

    if (unref(isUpdate)) {
      setFieldsValue({
        ...data.record
      })
    }
    const treeData = await getDeptList()
    updateSchema({
      field: 'parent',
      componentProps: { treeData }
    })
  }
)

const getTitle = computed(() => (!unref(isUpdate) ? '新增部门' : '编辑部门'))

async function handleSubmit() {
  try {
    const values = await validate()
    const { createMessage } = useMessage()
    setDrawerProps({ confirmLoading: true })
    console.log(values)
    if (unref(isUpdate)) {
      const data = await updateDept(values.id, {
        name: values.name,
        status: values.status,
        parent: values.parent,
        desc: values.desc
      })
        .then(() => {
          createMessage.success(`已成功修改角色`)
        })
        .catch(() => {
          createMessage.error('修改角色失败')
        })
        .finally(() => {
          closeDrawer()
        })
      console.log(data)
    } else {
      const data = await createDept({
        name: values.name,
        status: values.status,
        parent: values.parent,
        desc: values.desc
      })
        .then(() => {
          createMessage.success(`已成功新增角色`)
        })
        .catch(() => {
          createMessage.error('新增角色失败')
        })
        .finally(() => {
          closeDrawer()
        })
      console.log(data)
    }
    closeDrawer()
  } finally {
    setDrawerProps({ confirmLoading: false })
  }
}
</script>
