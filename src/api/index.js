import { API_URL } from '@env'
import axios from 'axios'
import FormData from 'form-data'
import _ from 'lodash'

import { keysToCamel } from 'utils/helper'

const api = axios.create({
  baseURL: API_URL,
  timeout: 200000,
})
const fetchAllData = async ({
  method,
  url,
  params,
  data,
  headers,
  ...rest
}) => {
  // const authorization = await authorizationHeader()
  // const headersWithAuth = { ...headers, ...authorization }
  try {
    const response = await api({
      method,
      url,
      params,
      data,
      // headers: headersWithAuth,
      ...rest,
    })
    // if (response.status > 299) throw new Error(response.message || MESSAGES.SOMETHING_WENT_WRONG)
    // if (!_.get(response, 'data')) throw new Error(response.message || MESSAGES.SOMETHING_WENT_WRONG)
    return keysToCamel(_.get(response, 'data'))
  } catch (e) {
    // handleAuthorizationError(e)
    // throw new Error(MESSAGES.SOMETHING_WENT_WRONG)
  }
}
export const getMenus = () => fetchAllData({
  method: 'get',
  url: 'api',
})
export function* getdataDemo() {
  const response = yield api({
    method: 'get',
    url: 'api',
  })
  return yield response.status === 200 ? response.data : []
}
export function* postDataDemo() {
  const response = yield api({
    method: 'post',
    url: 'post',
    data: {
      name: 'Duong Quoc Khanhaaaaaaaaa',
      owner: 'owner',
      birth: '2021-01-01',
    },
  })
  console.log('DEVK post response: ', response)
}

export function* deleteDataDemo(params) {
  const response = yield api({
    method: 'get',
    url: `delete/${params.id}`,
  })
  console.log('DEVK post response: ', response)
}
export function* getApiImages(payload) {
  const formdata = new FormData()
  formdata.append('name', 'khanh ne ban XXX')
  formdata.append('owner', 'XXXXXXXXX')
  formdata.append('birth', '2020-12-12')
  formdata.append('myFiles', payload)
  const response = yield api({
    method: 'post',
    url: 'updatefile',
    data: formdata,
  })
  console.log('DEVK post response: ', response)
}
