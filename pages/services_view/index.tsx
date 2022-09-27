import { useState, useEffect } from 'react';

import { fetchServices } from '../api/services';
import { DrawingsResponse } from '../../models/drawing';
import { generateQueryByWithRunningHour } from '../../lib/queryGenerate';

export default function ServicesView() {
  const [services, setServices] = useState({} as DrawingsResponse);

  useEffect(() => {
    (async () => {
      const query = generateQueryByWithRunningHour();
      const result: DrawingsResponse = await fetchServices({
        filterByFormula: query,
      });
      setServices(result);
    })();
  }, [fetchServices]);

  return (
    <>
      <ul>
        {(services.records ?? []).map((record) => {
          return <li>{record.fields.name}</li>;
        })}
      </ul>
    </>
  );
}
