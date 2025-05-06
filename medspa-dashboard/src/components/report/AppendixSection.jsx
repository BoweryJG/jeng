import React from 'react';
import { Typography, Box, List, ListItem, Link } from '@mui/material';
import { motion } from 'framer-motion';

const resources = [
  { label: 'Pure Skin Palm Beach', url: 'https://www.pureskinpalmbeach.com/' },
  { label: 'MD Beauty Labs', url: 'https://mdbeautylabs.com/' },
  { label: 'The Garden Medical Spa', url: 'https://thegardenmedspa.com/' },
  { label: 'VIO Med Spa', url: 'https://www.viomedspa.com/locations/palm-beach-gardens' },
  { label: 'Bespoke Aesthetics', url: 'https://bespokeaestheticspb.com/' },
  { label: 'Medical Spa Market Trends', url: 'https://www.repugen.com/blog/medical-spa-marketing-trends' },
  { label: 'American Med Spa Association', url: 'https://americanmedspa.org/resources/med-spa-statistics' },
];

export default function AppendixSection() {
  return (
    <Box>
      <Typography variant="h4" fontWeight={800} sx={{ background: 'linear-gradient(90deg,#43cea2,#185a9d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 4 }}>
        Appendix & Resources
      </Typography>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <List>
          {resources.map((res) => (
            <ListItem key={res.url}>
              <Link href={res.url} target="_blank" rel="noopener" underline="hover" sx={{ fontWeight: 600 }}>
                {res.label}
              </Link>
            </ListItem>
          ))}
        </List>
      </motion.div>
    </Box>
  );
}
