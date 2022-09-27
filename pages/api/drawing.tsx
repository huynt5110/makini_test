import { GET } from '../../lib/api';
const modelUrl = 'drawings'

export const fetchDrawing = async (options?: {[key: string]: any}) => {
    const result = await GET(modelUrl, {...options});
    return result?.data;
}

export const fetchDrawingDetails = async (drawingId: string) => {
    const result = await GET(`${modelUrl}/${drawingId}`);
    return result?.data;
}