import * as React from 'react';
import './Homepage.css';
import Header from '../../components/Header/Header';
import {Box, Typography} from '@mui/material';
export default function Homepage(){
  return(
    <>
      <Box sx={{
        width:'100%',height:'75vh',
        textAlign:'center',
        alignItems:'center',
        display:'flex',
        justifyContent:'center'
        }}>
        <Typography sx={{
          fontFamily: 'Quicksand',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '24px',
          lineHeight: '30px',
          color: '#FFFFFF'
        }}>
          Please connect your Solana wallet to start.
        </Typography>
      </Box>
    </>
  );
}