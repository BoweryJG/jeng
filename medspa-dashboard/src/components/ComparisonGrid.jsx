import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import useMedSpaData from '../hooks/useMedSpaData';

const columns = [
  { field: 'treatment', headerName: 'Treatment', width: 200 },
  { field: 'pureSkin', headerName: 'Pure Skin', width: 130 },
  { field: 'mdBeauty', headerName: 'MD Beauty', width: 130 },
  { field: 'beverlyHills', headerName: 'Beverly Hills', width: 130 }
];

export default function ComparisonGrid() {
  const { data, loading } = useMedSpaData();

  if (loading) return <div>Loading competitor data...</div>;

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}
