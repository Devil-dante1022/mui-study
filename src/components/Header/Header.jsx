import * as React from 'react';
import './Header.css';
import logo from '../../assets/FurrSols_logo.png';
import {
  Box,Grid,Button,Tabs,Tab
} from '@mui/material';
import {styled} from '@mui/material';
import {makeStyles} from '@mui/styles';
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';

const headerUseStyles = makeStyles({
  root:{
    backgroundColor:'#1A2828',
    display:'flex',
    padding:'20px',
    justifyContent:'space-between',
    marginTop:'30px',
    marginLeft:'50px',
    display:'flex',
    alignItems:'center',
    flexWrap:'wrap'
  }
})
const ConnectWallet = styled(Button)({
  background: '#00FFCE',
  boxShadow: '0px 4px 0px rgba(0, 0, 0, 0.25)',
  borderRadius: '5px',
  fontFamily: 'Quicksand',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '18px',
  lineHeight: '22px',
  color: '#0F4339',
  border:'none',
  '&:hover':{
    background:'linear-gradient(90deg, rgba(23,210,205,1) 0%, rgba(208,32,207,1) 35%, rgba(127,2,251,1) 65%, rgba(255,0,254,1) 100%)',
    color:'white'
  }
});
export default function Header(){
  const headerStyles = headerUseStyles();
  const [buttonTitle,setTitle] = useState("Connect Wallet");
  const handleClick = () => {
    setTitle("HECE...DhJx");
  }
  return(
    <>
      <Box className={headerStyles.root}>
        <img src={logo}></img>
        {/* <Button>GAME GUIDE</Button> */}
        <Link to="/_Main" className='underlineNone'>
          <ConnectWallet onClick={handleClick}>{buttonTitle}</ConnectWallet>
        </Link>
        <Outlet />
      </Box>
    </>
  );
}