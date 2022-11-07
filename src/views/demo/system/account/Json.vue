<template>
  <PageWrapper title="">
    <CodeEditor v-model:value="value" :mode="modeValue" />
  </PageWrapper>
</template>
<script lang="ts">
import { defineComponent, ref, unref, h } from 'vue'
import { CodeEditor, JsonPreview, MODE } from '/@/components/CodeEditor'
import { PageWrapper } from '/@/components/Page'
import { Space } from 'ant-design-vue'

const jsonData =
  '{"name":"BeJson","url":"http://www.xxx.com","page":88,"isNonProfit":true,"address":{"street":"科技园路.","city":"江苏苏州","country":"中国"},"links":[{"name":"Google","url":"http://www.xxx.com"},{"name":"Baidu","url":"http://www.xxx.com"},{"name":"SoSo","url":"http://www.xxx.com"}]}'

export default defineComponent({
  components: {
    CodeEditor,
    PageWrapper,
    ASpace: Space,
    JsonPreview
  },
  setup() {
    const modeValue = ref<MODE>(MODE.JSON)
    const value = ref(JSON.parse(jsonData))

    return { value, modeValue }
  }
})
</script>
