export interface ServicesResponse {
  offset?: string
  records: {
    id: string
    createdTime: string
    fields: {
      calendar_interval?: number
      calendar_interval_unit?: string
      condition: string
      recurring: boolean
      id: number
      instruction: string
      model?: string[]
      name: string
      running_hours_interval: number
    };
  }[];
}