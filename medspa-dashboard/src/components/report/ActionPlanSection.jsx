import React from 'react';
import { Typography, Box, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';

const actions = [
  'Add meta tags, schema, and testimonials widget',
  'Launch individual service landing pages',
  'Run Google review campaigns',
  'Start a blog/FAQ and add before/after galleries',
  'Expand social proof and monitor competitors',
  'Update site quarterly with new SEO insights',
];

export default function ActionPlanSection() {
  return (
    <Box>
      <Typography variant="h4" fontWeight={800} sx={{ background: 'linear-gradient(90deg,#ff9966,#ff5e62)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 4 }}>
        Action Plan & Recommendations
      </Typography>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <List>
          {actions.map((action, i) => (
            <ListItem key={action} sx={{ borderRadius: 2, mb: 1, background: 'rgba(255,255,255,0.18)', boxShadow: 1, '&:hover': { background: 'rgba(255,255,255,0.38)', transform: 'scale(1.03)', transition: 'all 0.3s' } }}>
              <ListItemIcon><ArrowForwardIcon color="secondary" /></ListItemIcon>
              <ListItemText primary={action} />
            </ListItem>
          ))}
        </List>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 3, borderRadius: 3, background: 'linear-gradient(90deg,#a770ef,#f6d365,#fda085)', color: '#fff', fontWeight: 700, boxShadow: 3 }}>
          Download Full PDF Report
        </Button>
      </motion.div>
    </Box>
  );
}
