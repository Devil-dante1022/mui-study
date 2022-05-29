import * as React from 'react';
import { useState } from 'react';
import './Dashboard.css';
import BrightButton from '../Button/Button';
import FilterPart from '../FilterPart/FilterPart';
import {
  Box,
  Grid,
  Typography,
  Divider,
  Button
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import NFTCard from '../Card/Card';

const titleStyle = {
    fontFamily: 'Quicksand',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '20px',
    color: '#FFFFFF',
    textAlign:'left',
    width:'50%'
    
};
const LeftItem = styled('div')({
  backgroundColor:'rgba(0, 0, 0, 0.3)',
  width:'25%',
  overflow:'auto',
  borderRight:'2px solid rgba(0, 255, 206, 0.1)',
  height:'100vh'
})
const RightItem = styled('div')({
  backgroundColor:'rgba(0, 0, 0, 0.2)',
  width:'75%',
  display:'flex',
  flexWrap:'wrap',
  overflow:'auto',
  alignItems:'flex-start',
  alignContent:'flex-start',
  height:'100vh',
  scrollbarColor: 'tomato'
})
const Rect = styled('div')({
  padding:'30px',
  paddingRight:'20px'
})
const Filter = styled('div')({
  fontFamily: 'Arial',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '16px',
  color: '#FFFFFF'
})

const CardDate = [
  {
    img: './Nft1.png',
    token_type:"☀ FurrSols #23",
    token_sol:"FLUFF: 5000",
    token_count:"2",
    buttonTitle1:'Collect FLUFF',
    buttonTitle2:'Despawn',
    buttonColor1:'#133730',
    buttonColor2:'transparent',
    buttonDisable1:false,
    buttonDisable2:false,
    color1:'rgba(0, 255, 206, 1)',
    color2:'white'
  },
  {
    img: './Nft2.png',
    token_type:"❄ FurrSols  #315",
    token_sol:"FLUFF: 3000",
    token_count:"0",
    buttonTitle1:'Revive for 5000 FLUFF',
    buttonTitle2:'Despawn',
    buttonColor1:'#0D3C46',
    buttonColor2:'transparent',
    buttonDisable1:false,
    buttonDisable2:true,
    color1:'rgba(0, 227, 255, 1)',
    color2:'white'
  },
  {
    img: './Nft3.png',
    token_type:"☀ FurrSols #50",
    token_sol:"FLUFF: 0",
    token_count:"0",
    buttonTitle1:'Collect FLUFF',
    buttonTitle2:'Spawn',
    buttonColor1:'rgba(19, 55, 48, 0.1)',
    buttonColor2:'rgba(19, 55, 48, 0.1)',
    buttonDisable1:true,
    buttonDisable2:false,
    color1:'rgba(0, 255, 206, 0.1);',
    color2:'rgba(0, 255, 206, 1)'
  },
  {
    img: './Nft4.png',
    token_type:"🍂 FurrSols #11",
    token_sol:"FLUFF: 0",
    token_count:"0",
    buttonTitle1:'Collect FLUFF',
    buttonTitle2:'Spawn',
    buttonColor1:'#0D3C46',
    buttonColor2:'rgba(19, 55, 48, 0.1)',
    buttonDisable1:true,
    buttonDisable2:true,
    color1:'#0D3C46',
    color2:'rgba(19, 55, 48, 0.1)'
  },
  {
    img: './Nft5.png',
    token_type:"☀ FurrSols #03",
    token_sol:"FLUFF: 0",
    token_count:"0",
    buttonTitle1:'Collect FLUFF',
    buttonTitle2:'Spawn',
    buttonColor1:'#0D3C46',
    buttonColor2:'rgba(19, 55, 48, 0.1)',
    buttonDisable1:true,
    buttonDisable2:false,
    color1:'#0D3C46',
    color2:'rgba(19, 55, 48, 0.1)'
  }
]
const date = [
  {
    text:'FEED',value:80
  },
  {
    text:'REST',value:60
  },
  {
    text:'GROOM',value:90
  },
  {
    text:'PLAY',value:50
  }
];

const Dashboard = () => {
  return(
    <>
      <Box className="body">
        <LeftItem>
          <Rect>
            <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item  sx={titleStyle}>
                    Current Season
                  </Grid>
                  <Grid item  sx={titleStyle}>
                    : ❄ Winter
                  </Grid>
                  <Grid item  sx={titleStyle}>
                    Your FurrSols
                  </Grid>
                  <Grid item sx={titleStyle}>
                    : 5
                  </Grid>
            </Grid>
          </Rect>
          <Divider variant="middle" sx={{backgroundColor:'rgba(0, 255, 206, 0.1)'}} />
          <Rect>
            <Box>
              <FilterPart/>
            </Box>
          </Rect>
        </LeftItem>
        <RightItem>
          {
            CardDate.map((CardDate) => {
              return(
                <NFTCard picture={CardDate.img} 
                  token_type={CardDate.token_type} 
                  token_sol={CardDate.token_sol} 
                  token_count={CardDate.token_count}  
                  date={date}
                  buttonTitle1={CardDate.buttonTitle1}
                  buttonTitle2={CardDate.buttonTitle2}
                  buttonColor1={CardDate.buttonColor1}
                  buttonColor2={CardDate.buttonColor2}
                  buttonDisable1={CardDate.buttonDisable1}
                  buttonDisable2={CardDate.buttonDisable2}
                  color1={CardDate.color1}
                  color2={CardDate.color2}
                  />
              );
            })
          }
        </RightItem>
      </Box>
    </>
  );
}
export default Dashboard;