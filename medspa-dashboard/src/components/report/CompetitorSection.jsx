import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, Box } from '@mui/material';
import { motion } from 'framer-motion';

const competitors = [
  {
    name: 'MD Beauty Labs',
    website: 'https://mdbeautylabs.com/',
    services: ['Botox', 'Fillers', 'RF Microneedling', 'Facials', 'Laser Skin Rejuvenation'],
    seoScore: 88,
    notes: 'Extensive service pages, strong local SEO.'
  },
  {
    name: 'The Garden Medical Spa',
    website: 'https://thegardenmedspa.com/',
    services: ['Botox', 'Fillers', 'Laser Hair Removal', 'Facials', 'Radiofrequency Skin Tightening'],
    seoScore: 82,
    notes: 'Good use of landing pages, some schema markup.'
  },
  {
    name: 'Pure Skin Palm Beach',
    website: 'https://www.pureskinpalmbeach.com/',
    services: ['Botox', 'Fillers', 'RF Microneedling'],
    seoScore: 68,
    notes: 'Strong team bios, needs more service pages and SEO enhancements.'
  }
];

export default function CompetitorSection() {
  return (
    <Box>
      <Typography variant="h4" fontWeight={800} sx={{ background: 'linear-gradient(90deg,#43cea2,#185a9d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 4 }}>
        Competitor Analysis
      </Typography>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <TableContainer component={Paper} sx={{ borderRadius: 4, background: 'rgba(255,255,255,0.35)', backdropFilter: 'blur(8px)', boxShadow: 6 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Website</TableCell>
                <TableCell>Top Services</TableCell>
                <TableCell>SEO Score</TableCell>
                <TableCell>Notes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {competitors.map((c) => (
                <TableRow key={c.name} hover sx={{ transition: 'background 0.3s', '&:hover': { background: 'rgba(167,112,239,0.08)' } }}>
                  <TableCell>{c.name}</TableCell>
                  <TableCell><a href={c.website} target="_blank" rel="noopener noreferrer" style={{ color: '#185a9d', fontWeight: 600 }}>{c.website.replace('https://', '').replace('www.', '')}</a></TableCell>
                  <TableCell>{c.services.join(', ')}</TableCell>
                  <TableCell><Chip label={c.seoScore} color={c.seoScore >= 85 ? 'success' : c.seoScore >= 70 ? 'warning' : 'error'} /></TableCell>
                  <TableCell>{c.notes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </motion.div>
    </Box>
  );
}
