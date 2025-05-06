import React from 'react';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const visuals = [
  {
    title: 'Competitor SEO Scores',
    img: 'https://dummyimage.com/600x300/8ec5fc/e0c3fc&text=SEO+Scores+Chart',
    desc: 'Visual comparison of SEO scores between Pure Skin Palm Beach and top competitors.'
  },
  {
    title: 'Review Growth Over Time',
    img: 'https://dummyimage.com/600x300/f6d365/fda085&text=Review+Growth+Chart',
    desc: 'Trends in Google reviews for each competitor.'
  },
  {
    title: 'Service Coverage',
    img: 'https://dummyimage.com/600x300/a770ef/8ec5fc&text=Service+Coverage+Venn',
    desc: 'Venn diagram of overlapping and unique services.'
  }
];

export default function VisualsSection() {
  return (
    <Box>
      <Typography variant="h4" fontWeight={800} sx={{ background: 'linear-gradient(90deg,#a770ef,#f6d365,#fda085)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 4 }}>
        Visuals & Data
      </Typography>
      <Grid container spacing={4}>
        {visuals.map((vis, idx) => (
          <Grid item xs={12} md={4} key={vis.title}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.2, duration: 0.7 }}>
              <Card sx={{ borderRadius: 4, background: 'rgba(255,255,255,0.25)', boxShadow: 6, backdropFilter: 'blur(8px)', '&:hover': { boxShadow: '0 16px 48px 0 rgba(31, 38, 135, 0.28)', transform: 'scale(1.04)', transition: 'all 0.3s' } }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} gutterBottom>{vis.title}</Typography>
                  <img src={vis.img} alt={vis.title} style={{ width: '100%', borderRadius: '12px', marginBottom: 12 }} />
                  <Typography variant="body2">{vis.desc}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
