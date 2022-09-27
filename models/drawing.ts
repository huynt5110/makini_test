export interface DrawingsResponse {
  offset?: string;
  records: {
    id: string;
    createdTime: string;
    fields: {
      name: string;
      model_model?: string[];
    };
  }[];
}