<template>
  <Card title="常用链接" v-bind="$attrs">
    <template #extra>
      <a-button type="link" size="small">更多</a-button>
    </template>

    <CardGrid
      v-for="(item, index) in linkItems"
      :key="item"
      class="!md:w-1/3 !w-full"
    >
      <span class="flex">
        <Icon :icon="item.icon" :color="item.color" size="30" />
        <span class="text-lg ml-4">{{ item.title }}</span>
      </span>
      <div class="flex mt-2 h-10 text-secondary">{{ item.desc }}</div>
      <div class="flex justify-between text-secondary">
        <span>{{ index }}</span>
        <a-button type="primary" @contextmenu="handleContext">
          选择环境
        </a-button>
      </div>
    </CardGrid>
  </Card>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { Card } from 'ant-design-vue'
import { Icon } from '/@/components/Icon'
import { linkItems } from './data'
import { useContextMenu } from '/@/hooks/web/useContextMenu'
import { useMessage } from '/@/hooks/web/useMessage'

export default defineComponent({
  components: { Card, CardGrid: Card.Grid, Icon },
  setup() {
    const [createContextMenu] = useContextMenu()
    const { createMessage } = useMessage()
    function handleContext(e: MouseEvent) {
      createContextMenu({
        event: e,
        items: [
          {
            label: '测试环境',
            icon: 'bx:bxs-folder-open', // 图标
            handler: (index) => {
              createMessage.success('即将跳转到' + index + '测试环境')
            }
          },
          {
            label: 'UAT环境',
            icon: 'bx:bxs-folder-open',
            disabled: false,
            handler: () => {
              createMessage.success(
                '即将跳转到' + linkItems[1].title + 'UAT环境'
              )
              window.open(linkItems[1].link_uat)
            }
          },
          {
            label: '浙西环境',
            icon: 'bx:bxs-folder-open',
            handler: () => {
              createMessage.success('click open')
            }
          },
          {
            label: '富阳环境',
            icon: 'bx:bxs-folder-open',
            handler: () => {
              createMessage.success('click open')
            }
          }
        ]
      })
    }
    return { linkItems, handleContext }
  }
})
</script>
