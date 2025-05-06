import React from 'react';
import { Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { motion } from 'framer-motion';

const swot = [
  { title: 'Strengths', color: 'success.main', points: [
      'Highly credentialed founder and team',
      'Personalized, educational consultations',
      'Loyal client base and strong word-of-mouth',
      'Boutique, concierge-style experience',
    ] },
  { title: 'Weaknesses', color: 'warning.main', points: [
      'Website lacks advanced SEO features',
      'Fewer service-specific pages than competitors',
      'Lower review volume/visibility',
      'Limited digital marketing activity',
    ] },
  { title: 'Opportunities', color: 'info.main', points: [
      'Build out SEO-optimized service pages',
      'Add Google reviews/testimonials widget',
      'Leverage founder’s expertise for content marketing',
      'Implement schema and local SEO best practices',
    ] },
  { title: 'Threats', color: 'error.main', points: [
      'Aggressive digital marketing by larger competitors',
      'Market saturation in Palm Beach',
      'Evolving consumer expectations for medspa tech and digital experience',
      'Potential regulatory changes',
    ] },
];

export default function SWOTSection() {
  return (
    <Box>
      <Typography variant="h4" fontWeight={800} sx={{ background: 'linear-gradient(90deg,#43cea2,#185a9d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 4 }}>
        SWOT Analysis
      </Typography>
      <Grid container spacing={4}>
        {swot.map((item, idx) => (
          <Grid item xs={12} md={3} key={item.title}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.2, duration: 0.7 }}>
              <Card sx={{
                borderRadius: 4,
                background: 'rgba(255,255,255,0.25)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
                backdropFilter: 'blur(8px)',
                border: `2.5px solid`,
                borderColor: item.color,
                minHeight: 260,
                '&:hover': {
                  boxShadow: '0 16px 48px 0 rgba(31, 38, 135, 0.28)',
                  transform: 'scale(1.04)',
                  transition: 'all 0.3s',
                },
              }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} color={item.color} gutterBottom>{item.title}</Typography>
                  <ul style={{ paddingLeft: 18 }}>
                    {item.points.map((pt, i) => <li key={i}><Typography variant="body2">{pt}</Typography></li>)}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
