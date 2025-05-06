import React from 'react';
import FullReportApp from './FullReportApp';

export default function FullReport() {
  return <FullReportApp />;
}


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
              <TableRow key={c.name}>
                <TableCell>{c.name}</TableCell>
                <TableCell><Link href={c.website} target="_blank" rel="noopener">{c.website.replace('https://', '').replace('www.', '')}</Link></TableCell>
                <TableCell>{c.services.join(', ')}</TableCell>
                <TableCell><Chip label={c.seoScore} color={c.seoScore >= 85 ? 'success' : c.seoScore >= 70 ? 'warning' : 'error'} /></TableCell>
                <TableCell>{c.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h6" fontWeight={600} gutterBottom>SEO Audit & Recommendations</Typography>
      <Card variant="outlined" sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="subtitle2" fontWeight={500} gutterBottom>SEO Checklist for Pure Skin Palm Beach:</Typography>
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
      <Typography variant="body1" sx={{ mb: 2 }}>
        <b>Next Steps:</b> Prioritize creating dedicated landing pages for each major service, implement LocalBusiness schema, and add a testimonials/reviews widget. Regularly monitor competitor sites for new offerings and SEO strategies.
      </Typography>
    </Box>
  );
}
