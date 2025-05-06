import React from 'react';
import { Box } from '@mui/material';

export default function GlassSection({ children }) {
  return (
    <Box
      sx={{
        background: 'rgba(255,255,255,0.30)',
        borderRadius: 6,
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
        backdropFilter: 'blur(14px)',
        border: '1.5px solid rgba(255,255,255,0.18)',
        p: { xs: 2, md: 4 },
        my: 2,
        transition: 'box-shadow 0.4s',
        '&:hover': {
          boxShadow: '0 16px 48px 0 rgba(31, 38, 135, 0.28)',
        },
      }}
    >
      {children}
    </Box>
  );
}
