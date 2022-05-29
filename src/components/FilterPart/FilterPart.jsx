import * as React from 'react';
import './FilterPart.css';
import BrightButton from '../Button/Button';
import { colorChannel } from '@mui/system';
import {Box} from '@mui/material';
import {styled} from '@mui/material/styles';
import {useState} from 'react';
const Ptitle = styled('div')({
  fontFamily: 'Arial',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '16px',
  color: '#FFFFFF',
  marginBottom:'15px'
})
const filterOptions = [
  {
  key:'all',
  name:'All'
  },
  {
    key:'spawned',
    name:'Spawned'
  },
  {
    key:'not spawned',
    name:'Not Spawned'
  }
];
const classesOptions = [
  {
    key:'all',
    name:'All'
  },
  {
    key:'winter',
    name:'Winter'
  },
  {
    key:'spring',
    name:'Spring'
  },
  {
    key:'summer',
    name:'Summer'
  },
  {
    key:'authum',
    name:'Authum'
  },
];
const statusOptions = [

  {
    key:'all',
    name:'All'
  },
  {
    key:'alive',
    name:'Alive'
  },
  {
    key:'dead',
    name:'Dead'
  }

];
const FilterPart = () => {
  const [selectedFilter, setSelectedFilter] = useState(0)
  const [selectedClasses, setSelectedClasses] = useState(0)
  const [selectedStatus, setSelectedStatus] = useState(0)

  const changeButtonFitler = (id) => {
    setSelectedFilter(id);
  }
  const changeButtonClasses = (id) => {
    setSelectedClasses(id);
  }
  const changeButtonStatus = (id) => {
    setSelectedStatus(id);
  }
  return(
    <>
      <Box >
        <Ptitle>Filter
          <div className="flex">
            {
              filterOptions.map((child,index) => (
                <BrightButton 
                  text={child.name}
                  index={index} 
                  changeButton={changeButtonFitler}
                  selectedFilter={selectedFilter} 
                />
                ))
              }
          </div>
        </Ptitle>
        <Ptitle>Classes
          <div className="flex">
            {
              classesOptions.map((child,index) => (
                <BrightButton 
                  text={child.name}
                  index={index} 
                  changeButton={changeButtonClasses}
                  selectedClasses={selectedClasses} 
                />
                ))
              }
          </div>
        </Ptitle>
        <Ptitle>Status
          <div className="flex">
            {
              statusOptions.map((child,index) => (
                <BrightButton 
                  text={child.name}
                  index={index} 
                  changeButton={changeButtonStatus}
                  selectedClasses={selectedStatus} 
                />
                ))
              }
          </div>
        </Ptitle>
      </Box>
    </>
  );
}
export default FilterPart;