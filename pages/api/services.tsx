import { GET } from '../../lib/api';
const modelUrl = 'services'

export const fetchServices = async (options?: {[key: string]: any}) => {
    const result = await GET(modelUrl, {...options});
    return result?.data;
}
