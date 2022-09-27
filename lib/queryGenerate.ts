function generateQueryFindIds(ids: string | string[]): string | undefined {
  if (!Array.isArray(ids)) return;
  
  const idsLength = ids.length;
  let query = 'OR(';
  ids.forEach((id, index) => {
    query += `RECORD_ID()='${id}'`;
    if (index + 1 < idsLength) query += ', ';
  });
  query += ')';
  return query;
};

function generateQueryByWithRunningHour(): string {
  return `running_hours_interval>=300`
}

export {
  generateQueryFindIds,
  generateQueryByWithRunningHour,
};