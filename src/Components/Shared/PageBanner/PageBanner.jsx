import { Box, Typography, Button } from '@mui/material';

export default function PageBanner({ image, pageName }) {
  return (
    <div className="mb-20 mt-">
      <Box
        sx={{
          // width: '100vw',
          height: { xs: 200, sm: 300, md: 500 },
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${image})`,  // Gradient overlay with background image
          backgroundSize: 'cover',
          backgroundRepeat:'no-repeat',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'left',
          color: '#fff',
          textAlign: 'center',
          p: 2,
        }}
      >
        <Box sx={{paddingLeft: '100px'}}>
          <Typography  sx={{
            textAlign: 'left'
        }} variant="h3" component="h1" gutterBottom>
            {pageName}
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            Your journey to sustainability starts here.
          </Typography>
          
        </Box>
      </Box>
    </div>
  );
}