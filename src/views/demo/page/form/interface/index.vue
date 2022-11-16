<template>
  <PageWrapper class="interface" title="接口管理">
    <card title="案例信息" :bordered="false">
      <BasicForm @register="caseInfo" labelAlign="left" />
    </card>
    <card title="请求信息" :bordered="false" class="!mt-5">
      <BasicForm @register="requestInfo" labelAlign="left" />
      <tabs default-active-key="Body" v-model:activeKey="currentKey">
        <tab-pane key="Params" tab="Params" />
        <tab-pane key="Headers" tab="Headers" />
        <tab-pane key="Body" tab="Body" />
      </tabs>
    </card>
    <template #rightFooter>
      <a-button type="primary" @click="submitAll"> 提交</a-button>
    </template>
  </PageWrapper>
</template>
<script setup>
import { BasicForm, useForm } from '/@/components/Form'
import { ref } from 'vue'
import { PageWrapper } from '/@/components/Page'
import { requestIndoSchemas, caseInfoSchemas } from './data'
import { Card, Tabs } from 'ant-design-vue'

const currentKey = ref('Params')
const tableRef = (ref < { getDataSource: () => any }) | (null > null)

const [caseInfo, { validate: validateTaskForm }] = useForm({
  baseColProps: {
    span: 6
  },
  schemas: caseInfoSchemas,
  showActionButtonGroup: false,
  labelWidth: 100
})
const [requestInfo, { validate }] = useForm({
  baseColProps: {
    span: 6
  },
  schemas: requestIndoSchemas,
  showActionButtonGroup: true,
  showResetButton: false,
  showSubmitButton: true,
  submitButtonOptions: {
    text: 'SEND'
  },
  actionColOptions: {
    span: 4,
    offset: 2
  },
  labelWidth: 100
})
async function submitAll() {
  try {
    if (tableRef.value) {
      console.log('table data:', tableRef.value.getDataSource())
    }

    const [values, taskValues] = await Promise.all([
      validate(),
      validateTaskForm()
    ])
    console.log('form data:', values, taskValues)
  } catch (error) {}
}
</script>
<style lang="less" scoped>
.interface {
  padding-bottom: 48px;
}
</style>
