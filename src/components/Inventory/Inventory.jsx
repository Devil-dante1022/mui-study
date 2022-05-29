import * as React from 'react';
import {styled} from '@mui/material/styles';
import '../../App.css';
import {
  Box,
} from '@mui/material';
import {useState} from 'react';
import BrightButton from '../Button/Button';
import InventoryCard from '../InventoryCard/InventoryCard';
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
const Ptitle = styled('div')({
  fontFamily: 'Arial',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '16px',
  color: '#FFFFFF',
  marginBottom:'15px'
})
const Rect = styled('div')({
  padding:'30px',
})
const RowRect = styled('div')({
  background: 'rgba(0, 255, 206, 0.02)',
  border: '2px solid rgba(0, 255, 206, 0.1)',
  borderRadius: '5px',
  display:  'flex',
  flexWrap: 'wrap',
  width:  '100%',
  paddingBottom:'20px'
})
const InventoryFilterOptions = [
  {
    key:'all',
    name:'All'
  },
  {
    key:'supplies',
    name:'Supplies'
  },
  {
    key:'powerups',
    name:'Powerups'
  },
  {
    key:'fluff',
    name:'FLUFF'
  },
];

const CardData = [
  {
    title:'Pearl',
    img:'./1.png',
    count:0
  },
  {
    title:'Pillow',
    img:'./2.png',
    count:0
  },
  {
    title:'Ball',
    img:'./3.png',
    count:0
  },
  {
    title:'FLUFF',
    img:'./4.png',
    count:0
  }
];
const Inventory = () => {
  const [selectedInventoryFilter,setSelectedInventoryFilter] = useState(0);
  const changeButtonFurrmarkFilterOption = (id) => {
    setSelectedInventoryFilter(id)
  }
  return(
    <>
      <Box className="body">
        <LeftItem>
          <Rect>
            <Ptitle>Filter
              <Box>
              {
                InventoryFilterOptions.map((info,index) => (
                  <BrightButton 
                    text={info.name}
                    index={index} 
                    changeButton={changeButtonFurrmarkFilterOption}
                    selectedFurrmarkFilter={selectedInventoryFilter}/>
                ))
              }
              </Box>
            </Ptitle>
          </Rect>
        </LeftItem>
        <RightItem>
          <Rect sx={{width:'100%'}}>
            <RowRect>
              {
                CardData.map((info,index) => (
                  <InventoryCard
                    title={info.title}
                    img={info.img}
                    count={info.count}
                  />
                ))
                
              }
            </RowRect>
          </Rect>
        </RightItem>
      </Box>
    </>
  );
}
export default Inventory;