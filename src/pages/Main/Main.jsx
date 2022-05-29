import * as React from 'react';
import './Main.css';
import{
  Tabs,
  Tab,
  Typography,
  Box,
  Button
} from '@mui/material';
import {useState} from 'react';
import {styled} from '@mui/material';
import Dashboard from '../../components/Dashboard/Dashboard';
import Furrmart from '../../components/Furrmart/Furrmart';
import Inventory from '../../components/Inventory/Inventory';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div style={{padding:'0px'}}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: '20px' }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const MyTabs = styled(Tabs)({
  background:'transparent',
  marginLeft:'50px',
  marginTop:'50px',
  display:'flex',
  flexDirection:'column',
  flexWrap:'wrap',

})
const MyTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(18),
    fontFamily:'Quicksand',
    fontStyle: 'normal !important',
    fontWeight: '700 !important',
    lineHeight: '22px !important',
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.5)',
    backgroundColor:  'rgba(0, 0, 0, 0.15)',
    borderRadius: '5px',
    marginRight:'5px',
    width:'136px',
    height:'43px',
    '&.Mui-selected': {
      color: 'primary',
      backgroundColor:'rgba(0, 0, 0, 0.3)'
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }),
);
const ClaimButton = styled(Button)({
  background: '#7D3CCF',
  boxShadow: '0px 2px 0px rgba(0, 0, 0, 0.25)',
  borderRadius: '5px',
  fontFamily: 'Quicksand',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '18px',
  color: '#FFFFFF',
  height:'35px',
  marginLeft:'5px',
  marginRight:'5px'

})
export default function Main(){
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [dashboard,clickDashboard] = useState(true);
  const [furrmark,clickFurrmakr] = useState(false);
  const [inventory,clickInventory] = useState(false);
  const handleDashboard = () => {
    clickDashboard(true);
    clickFurrmakr(false);
    clickInventory(false);
  }
  const handleFurrmark = () => {
    clickDashboard(true);
    clickFurrmakr(true);
    clickInventory(false);
  }
  const handleInventory = () => {
    clickDashboard(false);
    clickFurrmakr(false);
    clickInventory(true);
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider',display:'flex'}}>
        <MyTabs sx={{width:'60%'}} textColor="primary" indicatorColor="light"  value={value} onChange={handleChange} aria-label="basic tabs example">
          <MyTab label="Dashboard" onClick={handleDashboard} {...a11yProps(0)} />
          <MyTab label="FurrMart" onClick={handleFurrmark} {...a11yProps(1)} />
          <MyTab label="Inventory" onClick={handleInventory} {...a11yProps(2)} />
          <MyTab label="Breeding" {...a11yProps(3)} />
        </MyTabs>
        <Box sx={{
          display:'flex',
          width:'40%',
          paddingRight:'13px',
          paddingTop:'35px',
          alignItems:'center',
          justifyContent:'flex-end',
        }}>
          <Typography sx={{
            fontFamily: 'Quicksand',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '20px',
            color: '#FFFFFF',
            
          }}>FLUFF Collected: 86500</Typography>
          {
            furrmark === true && <ClaimButton>Deposit FLUFF</ClaimButton>
          }
          {
            dashboard === true && <ClaimButton>Claim FLUFF</ClaimButton>
          }
          {
            inventory === true && <ClaimButton>Claim FLUFF</ClaimButton>
          }
        </Box>
      </Box>
      <TabPanel  value={value} index={0}>
        <Dashboard/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Furrmart/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Inventory/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div style={{color:'white',fontSize:'50px',textAlign:'center'}}>Not Found page</div>
      </TabPanel>
    </Box>
  );
}