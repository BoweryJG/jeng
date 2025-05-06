import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab, Fade, Grid, Button } from '@mui/material';
import GlassSection from './GlassSection';
import ExecutiveSummary from './report/ExecutiveSummary';
import SWOTSection from './report/SWOTSection';
import CompetitorSection from './report/CompetitorSection';
import SEOSection from './report/SEOSection';
import ActionPlanSection from './report/ActionPlanSection';
import VisualsSection from './report/VisualsSection';
import AppendixSection from './report/AppendixSection';
import { AnimatePresence, motion } from 'framer-motion';

const sections = [
  { label: 'Executive Summary', component: ExecutiveSummary },
  { label: 'SWOT', component: SWOTSection },
  { label: 'Competitors', component: CompetitorSection },
  { label: 'SEO', component: SEOSection },
  { label: 'Action Plan', component: ActionPlanSection },
  { label: 'Visuals', component: VisualsSection },
  { label: 'Appendix', component: AppendixSection }
];

export default function FullReportApp() {
  const [tab, setTab] = useState(0);
  const SectionComponent = sections[tab].component;
  return (
    <Box sx={{
      minHeight: '80vh',
      background: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)',
      borderRadius: 6,
      boxShadow: 12,
      p: { xs: 1, md: 4 },
      mt: 4,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <Tabs
        value={tab}
        onChange={(e, v) => setTab(v)}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          mb: 3,
          background: 'rgba(255,255,255,0.15)',
          borderRadius: 3,
          backdropFilter: 'blur(16px)',
          boxShadow: 3,
        }}
        TabIndicatorProps={{ style: { background: 'linear-gradient(90deg,#a770ef,#f6d365,#fda085)' } }}
      >
        {sections.map((s, i) => <Tab key={s.label} label={s.label} sx={{ fontWeight: 700, color: tab === i ? '#222' : '#666', transition: 'color 0.3s' }} />)}
      </Tabs>
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6 }}
        >
          <GlassSection>
            <SectionComponent />
          </GlassSection>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}
