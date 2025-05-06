import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

export default function ExecutiveSummary() {
  return (
    <Box>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <Typography variant="h3" fontWeight={800} sx={{ background: 'linear-gradient(90deg,#a770ef,#f6d365,#fda085)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 2 }}>
          Executive Summary
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Pure Skin Palm Beach is a boutique medspa led by Jennifer Gowdy, offering a highly personalized, educational, and results-focused approach to anti-aging and skin wellness in Palm Beach, FL. This report provides a comprehensive, data-driven analysis of the business’s current position, digital presence, and opportunities for growth.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          <b>Key Findings:</b>
          <ul>
            <li>Strong brand and founder reputation in the Palm Beach medspa market.</li>
            <li>Excellent client loyalty and satisfaction, but digital presence lags behind top competitors.</li>
            <li>Major opportunities exist in SEO, service-specific landing pages, and reputation management.</li>
            <li>With targeted improvements, Pure Skin Palm Beach can become the market leader in both in-person and digital channels.</li>
          </ul>
        </Typography>
      </motion.div>
    </Box>
  );
}
