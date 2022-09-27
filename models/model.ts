export interface ModelResponse {
  offset?: string
  records: {
    id: string
    createdTime: string
    fields: {
      parents?: string[]
      children?: string[]
      number: string
      description: string
      unit: string
      note: string
      interchangeable_with: string[]
      services?: string[]
    };
  }[];
}