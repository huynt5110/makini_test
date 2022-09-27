import { GET } from '../../lib/api';
const modelModelUrl = 'model_model';

export const fetchModelModel = async (options?: {[key: string]: any}) => {
    const result = await GET(modelModelUrl, {...options});
    return result?.data?.records;
}
