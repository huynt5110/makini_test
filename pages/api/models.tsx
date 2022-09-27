import { GET } from '../../lib/api';
const modelUrl = 'models'

export const fetchModels = async (options?: {[key: string]: any}) => {
    const result = await GET(modelUrl, {...options});
    return result?.data;
}
