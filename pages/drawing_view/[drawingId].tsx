import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { fetchModelModel } from '../api/model_model';
import { generateQueryFindIds } from '../../lib/queryGenerate';
import { ModelModelResponse } from '../../models/model_model';

export default function DrawingDetails() {
  const router = useRouter();
  const { drawingId, model_model } = router.query;

  const [modelModel, setDrawingModels] = useState([]);

  useEffect(() => {
    (async () => {
      const query = generateQueryFindIds(model_model);
      const result: ModelModelResponse[] = await fetchModelModel({ filterByFormula: query });
      setDrawingModels(result);
    })();
  }, [model_model, fetchModelModel]);

  return (
    <>
      <div>
        <div>Drawing: {drawingId}</div>
      </div>
      <ul>
        {modelModel.map((model) => {
          return <li>{model.fields.id} - {model.fields.description}</li>;
        })}
      </ul>
    </>
  );
}
