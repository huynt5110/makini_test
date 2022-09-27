import { useState, useEffect } from 'react';

import { fetchModels } from '../api/models';
import { ModelResponse } from '../../models/model';
import SubView from './sub_view';

export default function HierarchyView() {
  const [models, setModels] = useState({} as ModelResponse);
  const [offsetKey, setOffsetKey] = useState('');

  useEffect(() => {
    (async () => {
      let params = { pageSize: 5, ...(offsetKey ? {offset: offsetKey} : {}) };
      const result: ModelResponse = await fetchModels(params);
      setModels(result);
    })();
  }, [fetchModels, offsetKey]);

  const handleNextPage = () => setOffsetKey(models.offset);

  return (
    <>
      {models.offset && <button onClick={handleNextPage}>next page</button>}
      <ul>
        {(models.records ?? []).map((record) => {
          const {
            fields: { parents, children },
            id,
          } = record;
          return (
            <div key={id}>
              <li>{record.id}</li>
              {parents && (
                <ul>
                  Parent
                  <SubView ids={parents} />
                </ul>
              )}

              {children && (
                <ul>
                  Children
                  <SubView ids={children} />
                </ul>
              )}
            </div>
          );
        })}
      </ul>
    </>
  );
}
