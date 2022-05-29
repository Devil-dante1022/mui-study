import * as React from 'react';
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
const MyCard = styled(Card)({
  background: 'rgba(0, 255, 206, 0.02)',
  border: '1px solid rgba(0, 255, 206, 0.1)',
  borderRadius: '5px',
  maxWidth: 128,
  maxHeight: 128,
  width: 128,
  height: 128,
  marginTop:'20px',
  marginLeft:'15px',
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
const Count = styled('div')({
  position:'absolute',
  right:'0px',
  bottom:'0px',
  display:'flex',
  background: "rgba(15, 67, 57, 0.85)",
  borderRadius: '5px 0px',
  padding:'5px',
})
const titleStyle = {
  position:'absolute',
  left:'10px',
  top:'10px',
  fontFamily: 'Arial',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '16px',
  color: '#FFFFFF',
}
const CardActionAreaStyle = {
  position:'relative',
}
const InventoryCard = (props) => {

  return(
    <MyCard>
      <Box sx={{display:'flex'}}>
        <CardActionArea>
          <Typography sx={titleStyle}>{props.title}</Typography>
          <CardMedia 
            component="img"
            image={props.img}
            alt="green iguana"
            style={CardMediaStyle}
          >
          </CardMedia>
          <Count>{props.count}</Count>
        </CardActionArea>
      </Box>
    </MyCard>
  );
}
export default InventoryCard;