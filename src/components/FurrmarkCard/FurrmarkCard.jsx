import * as React from 'react';
import './FurrmarkCard.css';
import {
  Card,
  Button,
  CardActionArea,
  CardMedia,
  CardActions,
  Box,
  Typography
} from '@mui/material';
import {styled} from '@mui/material/styles';
import {useState} from 'react';
const MyCard = styled(Card)({
  background: 'rgba(0, 255, 206, 0.02)',
  border: '1px solid rgba(0, 255, 206, 0.1)',
  borderRadius: '5px',
  maxWidth: 320,
  maxHeight: 180,
  width: 320,
  height: 180,
  marginTop:'20px',
  marginLeft:'15px'
})
const CardMediaStyle = {
  maxWidth:'128px',
  maxHeight:'128px',
  width: '128px',
  height: '128px'
}
const Myinput = styled('input')({
  width:'60px',
  height:'17px',
  background: 'rgba(0, 66, 53, 0.1)',
  border: '1px solid rgba(0, 255, 206, 0.5)',
  borderRadius: '5px',
  color:'white'
})
const titleStyle1 = {
  fontFamily: 'Arial',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '16px',
  color: '#FFFFFF',
  paddingBottom:'13px'
}
const titleStyle2 = {
  fontFamily: 'Arial',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '12px',
  lineHeight: '16px',
  color: '#FFFFFF',
}
const textStyle = {
  fontFamily: 'Arial',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '10px',
  lineHeight: '11px',
  color: '#007B64',
  paddingTop:'10px'
}
const FurrmarkCardButton = styled(Button)({
  background: '#00FFCE',
  border: '1px solid #00FFCE',
  borderRadius: '5px',
  fontFamily: 'Arial',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '10px',
  lineHeight: '13px',
  color: '#0F4339',
  width:'60px',
  height:'20px',
  display: 'inline-block',
  padding:0,
  paddingTop:2
})
const FurrmarkCard = (props) => {
  const [amount,setAmount] = useState(props.value);
  const handleChange = (event) => {
    setAmount(event.target.value);
  }
  return(
    <MyCard>
      <Box sx={{display:'flex',padding:'20px',alignItems:'center'}}>
        <CardActionArea >
          <CardMedia 
            component="img"
            image={props.img}
            alt="green iguana"
            style={CardMediaStyle}
          />
        </CardActionArea>
        <Box sx={{marginLeft:'15px'}}>
          <Typography sx={titleStyle1}>{props.title1}</Typography>
          <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <Typography sx={titleStyle2}>{props.title2}</Typography>
            <FurrmarkCardButton>12 FLUFF</FurrmarkCardButton>
          </Box>
          <Box sx={{display:'flex',alignItems:'center',paddingTop:'13px',justifyContent:'space-between'}}>
            <Myinput type="number" value={amount} onChange={handleChange} placeholder="Amount"></Myinput>
            <FurrmarkCardButton>Buy</FurrmarkCardButton>
          </Box>
          <Typography sx={textStyle}>{props.text}</Typography>
        </Box>
      </Box>
    </MyCard>
  );
}
export default FurrmarkCard;