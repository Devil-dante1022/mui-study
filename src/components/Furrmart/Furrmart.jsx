import * as React from 'react';
import {styled} from '@mui/material/styles';
import {
  Box
} from '@mui/material';
import BrightButton from '../Button/Button';
import {useState} from 'react';
import FurrmarkCard from '../FurrmarkCard/FurrmarkCard';
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
  paddingRight:'20px'
})
const FurrmarkFilterOption = [
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
  }
];
const FurrmarkCardData = [
  {
    img:'./1.png',
    title1:'Pearl',
    title2:'1 piece',
    value:'500',
    text:'Minimum of 5 pieces Conversion: 500 Pearls ~ 25000 FLUFF'
  },
  {
    img:'./2.png',
    title1:'Pillow',
    title2:'1 piece',
    value:'5',
    text:'Minimum of 5 pieces Conversion: 5 Pillows ~ 50 FLUFF'
  },
  {
    img:'./3.png',
    title1:'Soap',
    title2:'1 piece',
    value:'',
    text:'Minimum of 5 pieces'
  },
  {
    img:'./4.png',
    title1:'Ball',
    title2:'1 piece',
    value:'',
    text:'Minimum of 5 pieces'
  }
];
const Furrmart = () => {
  const [selectedFurrmarkFilter,setSelectedFurrmarkFilter] = useState(0);
  const changeButtonFurrmarkFilterOption = (id) => {
    setSelectedFurrmarkFilter(id);
  }
  
  return(
    <>
      <Box className="body">
        <LeftItem>
          <Rect>
              <Ptitle>
                Filter
                  <Box>
                    {
                      FurrmarkFilterOption.map((info,index) => {
                        return(
                          <BrightButton 
                          text={info.name}
                          index={index} 
                          changeButton={changeButtonFurrmarkFilterOption}
                          selectedFurrmarkFilter={selectedFurrmarkFilter} 
                        />
                        );
                      })
                    }
                  </Box>
              </Ptitle>
          </Rect>
        </LeftItem>

        <RightItem>
          {
            FurrmarkCardData.map((info,index) => {
              return(
                <FurrmarkCard 
                  img={info.img}
                  title1={info.title1}
                  title2={info.title2}
                  value={info.value}
                  text={info.text}
                />
              );
            })
          }
          
        </RightItem>
      </Box>
    </>
  );
}
export default Furrmart;