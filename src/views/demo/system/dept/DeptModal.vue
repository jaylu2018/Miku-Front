<!--<template>-->
<!--  <BasicModal-->
<!--    v-bind="$attrs"-->
<!--    @register="registerModal"-->
<!--    showFooter-->
<!--    :title="getTitle"-->
<!--    width="500px"-->
<!--    @ok="handleSubmit"-->
<!--  >-->
<!--    <BasicForm @register="registerForm" />-->
<!--  </BasicModal>-->
<!--</template>-->
<!--<script setup lang="ts">-->
<!--import { ref, computed, unref } from 'vue'-->
<!--import { BasicModal, useModalInner } from '/@/components/Modal'-->
<!--import { BasicForm, useForm } from '/@/components/Form/index'-->
<!--import { formSchema } from './dept.data'-->
<!--import { createDept, getDeptList, updateRole } from '/@/api/demo/system'-->

<!--const isUpdate = ref(true)-->

<!--const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] =-->
<!--  useForm({-->
<!--    labelWidth: 100,-->
<!--    schemas: formSchema,-->
<!--    showActionButtonGroup: false-->
<!--  })-->

<!--const [registerModal, { setModalProps, closeModal }] = useModalInner(-->
<!--  async (data) => {-->
<!--    resetFields()-->
<!--    setModalProps({ confirmLoading: false })-->
<!--    isUpdate.value = !!data?.isUpdate-->

<!--    if (unref(isUpdate)) {-->
<!--      setFieldsValue({-->
<!--        ...data.record-->
<!--      })-->
<!--    }-->
<!--    const treeData = await getDeptList()-->
<!--    updateSchema({-->
<!--      field: 'parentDept',-->
<!--      componentProps: { treeData }-->
<!--    })-->
<!--  }-->
<!--)-->

<!--const getTitle = computed(() => (!unref(isUpdate) ? '新增部门' : '编辑部门'))-->

<!--async function handleSubmit() {-->
<!--  try {-->
<!--    const values = await validate()-->
<!--    setModalProps({ confirmLoading: true })-->
<!--    console.log(values)-->
<!--    if (unref(isUpdate)) {-->
<!--      const data = await updateRole(values.id, {-->
<!--        name: values.name,-->
<!--        status: values.status,-->
<!--        is_admin: values.is_admin,-->
<!--        desc: values.desc-->
<!--      })-->
<!--      console.log(data)-->
<!--    } else {-->
<!--      const data = await createDept({-->
<!--        name: values.name,-->
<!--        status: values.status,-->
<!--        desc: values.desc-->
<!--      })-->
<!--      console.log(data)-->
<!--    }-->
<!--    closeModal()-->
<!--  } finally {-->
<!--    setModalProps({ confirmLoading: false })-->
<!--  }-->
<!--}-->
<!--</script>-->
