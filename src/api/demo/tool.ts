import { defHttp } from '/@/utils/http/axios';
import { GetToolInfoModel } from './model/toolModel';
import { LoginParams, LoginResultModel } from '/@/api/sys/model/userModel';
import { ErrorMessageMode } from '/#/axios';

enum Api {
  ACCOUNT_INFO = '/tool/getAccountInfo',
}

// Get personal center-basic settings


export function toolInfoApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.ACCOUNT_INFO,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
