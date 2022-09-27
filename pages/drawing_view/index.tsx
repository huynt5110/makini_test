import { useState, useEffect } from 'react';
import Link from 'next/link';

import { fetchDrawing } from '../api/drawing';
import { DrawingsResponse } from '../../models/drawing';

export default function DrawingView() {
  const [drawingModel, setDrawingModels] = useState({} as DrawingsResponse);

  useEffect(() => {
    (async () => {
      const result: DrawingsResponse = await fetchDrawing();
      setDrawingModels(result);
    })();
  }, [fetchDrawing]);

  return (
    <>
      <ul>
        {(drawingModel.records ?? []).map((record) => {
          return (
            <li key={record.id}>
              <Link href={{
                pathname: `drawing_view/${record.id}`,
                query: {
                  model_model: record.fields.model_model
                },
              }}>{record.fields.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
