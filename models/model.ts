export interface ModelResponse {
  offset?: string;
  records: {
    id: string;
    createdTime: string;
    fields: {
      parents?: string[];
      children?: string[];
    };
  }[];
}