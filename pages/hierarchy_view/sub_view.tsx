import { useState, useEffect } from 'react';

import { fetchModelModel } from '../api/model_model';
import { generateQueryFindIds } from '../../lib/queryGenerate';
import { ModelModelResponse } from '../../models/model_model';

const SubView = (props) => {
  const ids: string[] = props.ids;
  const [subModels, setSubModels] = useState([]);

  useEffect(() => {
    (async () => {
      const query = generateQueryFindIds(ids);
      const result: ModelModelResponse[] = await fetchModelModel({ filterByFormula: query });
      setSubModels(result);
    })();
  }, [ids, fetchModelModel]);

  return (
    <>
      {subModels.map((item) => (
        <li>{item.fields.id}</li>
      ))}
    </>
  );
};

export default SubView;