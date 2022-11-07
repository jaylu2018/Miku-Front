<template>
  <PageWrapper class="high-form" :title="`案例详情/` + userId" @back="goBack">
    <a-card title="案例信息" :bordered="false">
      <BasicForm @register="registerTask" labelAlign="left" />
    </a-card>
    <a-card title="请求信息" :bordered="false" class="!mt-5">
      <BasicForm @register="register" labelAlign="left" />
      <a-tabs default-active-key="Body" v-model:activeKey="currentKey">
        <a-tab-pane key="Params" tab="Params" />
        <a-tab-pane key="Headers" tab="Headers" />
        <a-tab-pane key="Body" tab="Body" />
      </a-tabs>
      <div>
        <keep-alive>
          <template v-if="currentKey === 'Params'">
            <Params ref="tableRef" />
            <!--            <JsonPreview :data="taskValues" />-->
            <JsonPreview :data="table_data" />
          </template>
          <template v-else-if="currentKey === 'Headers'">
            <Headers ref="tableRef" />
          </template>
          <template v-else-if="currentKey === 'Body'">
            <Json ref="tableRef" />
          </template>
        </keep-alive>
      </div>
    </a-card>
    <template #rightFooter>
      <a-button type="primary" @click="submitAll"> 提交 </a-button>
    </template>
  </PageWrapper>
</template>
<script lang="ts">
import { BasicForm, useForm } from '/@/components/Form'
import { defineComponent, ref, unref } from 'vue'
import { useGo } from '/@/hooks/web/usePage'
import { PageWrapper } from '/@/components/Page'
import { schemas, taskSchemas } from './data'
import { Card, Tabs } from 'ant-design-vue'
import { useRoute } from 'vue-router'
import Params from './Params.vue'
import Headers from './Headers.vue'
import Json from './Json.vue'
import { JsonPreview } from '/@/components/CodeEditor'
import { toolInfoApi } from '/@/api/demo/tool'

export default defineComponent({
  name: 'FormHightPage',
  components: {
    BasicForm,
    ATabs: Tabs,
    ATabPane: Tabs.TabPane,
    PageWrapper,
    [Card.name]: Card,
    Params,
    Headers,
    Json,
    JsonPreview
  },
  setup() {
    const go = useGo()
    const route = useRoute()
    const userId = ref(route.params?.id)
    const currentKey = ref('Params')
    const tableRef = ref<{ getDataSource: () => any } | null>(null)

    const [registerTask, { validate: validateTaskForm }] = useForm({
      baseColProps: {
        span: 6
      },
      schemas: taskSchemas,
      showActionButtonGroup: false,
      labelWidth: 100
    })

    const [register, { validate }] = useForm({
      baseColProps: {
        span: 6
      },
      schemas: schemas,
      showActionButtonGroup: true,
      showResetButton: false,
      showSubmitButton: true,
      submitButtonOptions: {
        text: 'SEND'
      },
      actionColOptions: {
        span: 4,
        offset: 4
      },
      labelWidth: 100,
      submitFunc: customSubmitFunc
    })
    async function customSubmitFunc() {
      try {
        if (tableRef.value) {
          console.log('table data:', unref(tableRef.value.getDataSource()))
        }
        const values = await validate()
        console.log(values)
      } catch (error) {}
    }

    async function submitCase() {
      try {
        const [values] = await Promise.all([validateTaskForm()])
        console.log('form data:', values)
        const data = await toolInfoApi(values, 'none')
        console.log(data)
      } catch (error) {}
    }

    let table_data

    async function submitAll() {
      try {
        if (tableRef.value) {
          console.log('table data:', tableRef.value.getDataSource())
          table_data = tableRef.value.getDataSource()
        }
        const [values, taskValues] = await Promise.all([
          validate(),
          validateTaskForm()
        ])
        console.log('form data:', values, taskValues)
        const data = await toolInfoApi(taskValues, 'none')
        console.log(data)
      } catch (error) {}
    }

    // 页面左侧点击返回链接时的操作
    function goBack() {
      // 本例的效果时点击返回始终跳转到账号列表页，实际应用时可返回上一页
      go('/system/account')
    }

    return {
      register,
      registerTask,
      submitAll,
      submitCase,
      tableRef,
      goBack,
      userId,
      currentKey,
      table_data
    }
  }
})
</script>
<style lang="less" scoped>
.high-form {
  padding-bottom: 48px;
}
</style>
