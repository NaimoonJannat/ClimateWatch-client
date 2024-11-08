import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function BlogsCard({ blogCards }) {
  const [expanded, setExpanded] = React.useState(false);

  const { _id, photo_url, title, post_date, blogger_name } = blogCards


  return (
    <Card sx={{ maxWidth: 645, bgcolor:'#f5f5f5' , borderRadius: 3}}>
      <div className='flex '>

        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {photo_url}
            </Avatar>
          }
        />
        <Typography sx={{ marginTop: 2 }}>Posted by <span className='block font-bold poppins'>{blogger_name}</span></Typography>

      </div>
      <CardContent>
        <div className='font-bold text-xl'>
          {title}
        </div>
        {/* <div className='flex items-center mt-3'>
          <DateRangeIcon />
          <div className='text-sm mx-2'>{post_date.split('T')[0]}</div>

        </div> */}
        <Typography variant="body2" sx={{ color: 'text.secondary', marginTop: 2 }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>

      <IconButton aria-label="add to favorites">

      </IconButton>
      <div className='mb-5 mr-5 flex justify-end'>
        <Button variant="contained" sx={{bgcolor:'#214d5b'}} ><Link to={`${_id}`} /> Read more</Button>
      </div>


    </Card>
  );
}