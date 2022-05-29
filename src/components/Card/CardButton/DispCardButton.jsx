import * as React from 'react';
import {Button} from '@mui/material';
import {styled} from '@mui/material/styles';

const MyCardButton = styled(Button)({
  backgroundColor:'#00FFCE',
  fontFamily: 'Arial',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '12px',
  color: '#0F4339',
  maxHeight: "22px",
  borderRadius:'8px',
  marginTop:'16px',
  marginLeft:'14px'
})

const DispCardButton = (props) => {
  return(
    <MyCardButton>{props.text}</MyCardButton>
  );
}
export default DispCardButton;