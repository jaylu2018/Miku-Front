import { FormSchema } from '/@/components/Form/index'
import { TabItem } from '/@/views/demo/page/account/center/data'

const requestModeOptions: LabelValueOptions = [
  {
    label: 'GET',
    value: 'GET'
  },
  {
    label: 'POST',
    value: 'POST'
  },
  {
    label: 'PUT',
    value: 'PUT'
  },
  {
    label: 'DELETE',
    value: 'DELETE'
  }
]
const casePriorityOptions: LabelValueOptions = [
  {
    label: 'P0',
    value: '0'
  },
  {
    label: 'P1',
    value: '1'
  },
  {
    label: 'P2',
    value: '2'
  },
  {
    label: 'P3',
    value: '3'
  }
]
const caseStatusOptions: LabelValueOptions = [
  {
    label: '正常',
    value: 'normal'
  },
  {
    label: '调试中',
    value: 'testing'
  },
  {
    label: '停用',
    value: 'disabled'
  }
]
const requestTypeOptions: LabelValueOptions = [
  {
    label: 'HTTP',
    value: 'HTTP'
  },
  {
    label: 'Dubbo',
    value: 'Dubbo'
  },
  {
    label: 'RPC',
    value: 'RPC'
  },
  {
    label: 'Websocket',
    value: 'Websocket'
  }
]
const caseLabelOptions: LabelValueOptions = [
  {
    label: '主流程',
    value: 'Main'
  },
  {
    label: '基线案例',
    value: 'Baseline'
  },
  {
    label: '异常案例',
    value: 'Abnormal'
  },
  {
    label: '单接口案例',
    value: 'Single'
  },
  {
    label: '自动生成案例',
    value: 'Auto'
  }
]
const caseTypeOptions: LabelValueOptions = [
  {
    label: '普通案例',
    value: 'Normal'
  },
  {
    label: '自动化案例',
    value: 'Auto'
  },
  {
    label: '基线案例',
    value: 'Baseline'
  }
]

export const schemas: FormSchema[] = [
  {
    field: 'requestMode',
    component: 'Select',
    label: '请求方式',
    required: true,
    componentProps: {
      options: requestModeOptions
    },
    colProps: {
      span: 4
    }
  },
  {
    field: 'requestAddress',
    component: 'Input',
    label: '请求地址',
    required: true,
    colProps: {
      offset: 2,
      span: 10
    }
  }
]
export const taskSchemas: FormSchema[] = [
  {
    field: 'caseName',
    component: 'Input',
    label: '用例名称',
    required: true
  },
  {
    field: 'casePriority',
    component: 'Select',
    label: '用例优先级',
    required: true,
    componentProps: {
      options: casePriorityOptions
    },
    colProps: {
      offset: 2
    }
  },
  {
    field: 'caseStatus',
    component: 'Select',
    label: '用例状态',
    componentProps: {
      options: caseStatusOptions
    },
    colProps: {
      offset: 2
    },
    required: true
  },
  {
    field: 'requestType',
    component: 'Select',
    label: '请求类型',
    componentProps: {
      options: requestTypeOptions
    },
    required: true
  },
  {
    field: 'caseLabel',
    component: 'Select',
    label: '用例标签',
    required: true,
    componentProps: {
      mode: 'multiple',
      options: caseLabelOptions
    },
    colProps: {
      offset: 2
    }
  },
  {
    field: 'caseType',
    component: 'Select',
    label: '用例类型',
    componentProps: {
      mode: 'multiple',
      options: caseTypeOptions
    },
    colProps: {
      offset: 2
    },
    required: true
  }
]
