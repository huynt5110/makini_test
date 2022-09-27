export interface ModelModelResponse {
  offset?: string
  records: {
    id: string
    createdTime: string
    fields: ModelModel
  }[]
}

export interface ModelModel {
  parents?: string[]
  children?: string[]
  id: number
  description: string
  dwg_no: string[]
  number: number[]
  parent_number: string
  parent_description: string
  quantity: number
}

