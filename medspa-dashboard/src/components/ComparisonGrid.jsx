import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Card, CardContent, CircularProgress, Box, Typography } from '@mui/material';
import useMedSpaData from '../hooks/useMedSpaData';

const columns = [
  { field: 'treatment', headerName: 'Treatment', flex: 1, minWidth: 180 },
  { field: 'pureSkin', headerName: 'Pure Skin', flex: 1, minWidth: 120, align: 'center', headerAlign: 'center' },
  { field: 'mdBeauty', headerName: 'MD Beauty', flex: 1, minWidth: 120, align: 'center', headerAlign: 'center' },
  { field: 'beverlyHills', headerName: 'Beverly Hills', flex: 1, minWidth: 120, align: 'center', headerAlign: 'center' }
];

export default function ComparisonGrid() {
  const { data, loading } = useMedSpaData();

  return (
    <Card elevation={4} sx={{ borderRadius: 3, boxShadow: 6 }}>
      <CardContent>
        {loading ? (
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ height: 400 }}>
            <CircularProgress color="primary" size={48} />
            <Typography variant="subtitle1" sx={{ mt: 2 }}>Loading competitor data...</Typography>
          </Box>
        ) : (
          <Box sx={{ height: 420, width: '100%' }}>
            <DataGrid
              rows={data}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              sx={{
                border: 0,
                borderRadius: 2,
                backgroundColor: '#fafbfc',
                '& .MuiDataGrid-row:hover': {
                  backgroundColor: '#e3f2fd',
                },
                '& .MuiDataGrid-columnHeaders': {
                  backgroundColor: '#f0f4f8',
                  fontWeight: 700,
                  fontSize: '1.08rem',
                },
                '& .MuiDataGrid-cell': {
                  fontSize: '1.07rem',
                },
              }}
              disableSelectionOnClick
              autoHeight
            />
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
