import React from 'react';
import { Typography, List, ListItem, ListItemIcon, ListItemText, Card, CardContent, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { motion } from 'framer-motion';

const seoChecklist = [
  { label: 'Unique meta title & description for every page', done: false },
  { label: 'LocalBusiness/MedicalBusiness schema markup', done: false },
  { label: 'Dedicated landing pages for each major service', done: false },
  { label: 'Google reviews/testimonials widget', done: false },
  { label: 'Internal linking between services, team, testimonials', done: false },
  { label: 'Optimized images and page speed', done: true },
  { label: 'Content depth (FAQs, before/after galleries)', done: false },
];

export default function SEOSection() {
  return (
    <Box>
      <Typography variant="h4" fontWeight={800} sx={{ background: 'linear-gradient(90deg,#f7971e,#ffd200,#f7971e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 4 }}>
        SEO Audit & Recommendations
      </Typography>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <Card variant="outlined" sx={{ mb: 3, borderRadius: 4, background: 'rgba(255,255,255,0.38)', backdropFilter: 'blur(8px)', boxShadow: 4 }}>
          <CardContent>
            <Typography variant="subtitle2" fontWeight={600} gutterBottom>SEO Checklist for Pure Skin Palm Beach:</Typography>
            <List>
              {seoChecklist.map((item) => (
                <ListItem key={item.label}>
                  <ListItemIcon>
                    {item.done ? <CheckCircleIcon color="success" /> : <WarningAmberIcon color="warning" />}
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}
