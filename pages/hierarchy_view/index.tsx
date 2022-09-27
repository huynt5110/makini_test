import { useState, useEffect } from 'react';

import { fetchModels } from '../api/models';
import { fetchModelModel } from '../api/model_model';

interface ModelResponse {
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

const generateQuery = (ids): string => {
  const idsLength = ids.length;
  let query = 'OR(';
  ids.forEach((id, index) => {
    query += `RECORD_ID()='${id}'`;
    if (index + 1 < idsLength) query += ', ';
  });
  query += ')';
  return query;
};

const SubView = (props) => {
  const ids: string[] = props.ids;
  const [subModels, setSubModels] = useState([]);

  useEffect(() => {
    (async () => {
      const query = generateQuery(ids);
      const result = await fetchModelModel({ filterByFormula: query });
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
          } = record;
          return (
            <div>
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
