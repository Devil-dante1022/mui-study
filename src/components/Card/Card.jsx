
import { Button, 
  CardActionArea, 
  CardActions,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Box,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Rating
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import {styled} from '@mui/material/styles';
import {useState} from 'react';

import Icon from '../../assets/favicon.png';
import ProgressBar from '../ProgressBar/ProgressBar';
import DispCardButton from './CardButton/DispCardButton';
import RatingIcon from '../../assets/RatingIcon.png';
import RatingHoverIcon from '../../assets/RatingHoverIcon.png';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  border: '2px solid rgba(0, 255, 206, 0.1)',
  boxShadow: 24,
  borderRadius:'5px',
  backgroundColor:'rgba(14, 27, 26, 1)',
  pt: 2,
  px: 4,
  pb: 3,
};
function createData(first,second) {
  return { first, second };
}
function createTraitsData(first,second,third){
  return { first,second,third };
}

// TableRow Customize
const TableRowStyle = {
  '&:nth-of-type(odd)': {
    backgroundColor: 'rgba(9, 51, 43, 1)',
  },
  '&:nth-of-type(even)':{
    backgroundColor:'rgba(9, 41, 35, 1)',
  },
  // hide first and last border
  '&:first-child td , &:first-child th': {
    
  },
  '&:last-child td, &:last-child th':{
    boirder: 0,
    color:'rgba(0, 255, 206, 1)'
  }
}
const AttribbuteTableRowStyle = {
  '&:nth-of-type(odd)': {
    backgroundColor: 'rgba(9, 51, 43, 1)',
  },
  '&:nth-of-type(even)':{
    backgroundColor:'rgba(9, 41, 35, 1)',
  },
  // hide first and last border
  '&:first-child td , &:first-child th': {
    
  },
  '&:last-child td, &:last-child th':{
    boirder: 0,
  }
}
const TableStyle = {
  fontFamily: 'Arial',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '16px',
  color: '#FFFFFF',
  border:'1px solid rgba(14, 27, 26, 1)'
}
// ChildModal Customize
const UpdateButton = styled(Button)({
  backgroundColor:'rgba(0, 255, 206, 1)',
  fontFamily: 'Arial',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '12px',
  lineHeight: '14px',
  color: '#0F4339',
  marginTop:'10px',
  '&:hover':{
    background:'linear-gradient(90deg, rgba(23,210,205,1) 0%, rgba(208,32,207,1) 35%, rgba(127,2,251,1) 65%, rgba(255,0,254,1) 100%)',
    color:'white'
  }
})

function ChildModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <UpdateButton onClick={handleOpen}>UPGRADE FURRSOL</UpdateButton>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </>
  );
}

const MyCard = styled(Card)({
  background: 'rgba(0, 255, 206, 0.02)',
  border: '1px solid rgba(0, 255, 206, 0.1)',
  borderRadius: '5px',
  maxWidth: 500,
  maxHeight: 300,
  marginTop:'20px',
  marginLeft:'15px'
})
const cardMediaStyle = {
  width:'200px',
  height:'200px'
}
const token_type_style = {
  fontFamily: 'Arial',
  fontStyle: 'normal',
  fontWeight: '40px',
  fontSize: '14px',
  lineHeight: '16px',
  color: 'white',
  
  marginBottom:'15px'
}
const token_sol_style = {
  fontFamily: 'Arial',
  fontStyle: 'normal',
  fontWeight: '40px',
  fontSize: '14px',
  lineHeight: '16px',
  color: '#00FFCE',
}
const TokenCount = styled('div')({
  position:'absolute',
  right:'0px',
  bottom:'0px',
  display:'flex',
  background: "rgba(15, 67, 57, 0.85)",
  borderRadius: '5px 0px',
  padding:'5px',
  justifyContent:'space-around',
  width:'34px'
})
const TokenCountFont =styled('div')({
  color:'white'
})


export default function NFTCard(props) {
  const date = props.date;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const CardButton1 = styled(Button)({
    background: props.buttonColor1,
        borderColor: props.color1,
        borderStyle: 'solid',
        borderWidth: '1px',
        padding: '3px 8px',
        color: props.color1,
        marginTop:'5px',
        fontSize:'13px',
        '&.active': {
          background: 'rgba(0, 255, 206, 1)',
          color: 'rgba(15, 67, 57, 1)',
        },
        '&:hover': {
          background: 'rgba(0, 255, 206, 1)',
          color: 'rgba(15, 67, 57, 1)',
        },
        '&:disabled': {
          borderColor: 'rgba(0, 255, 206, 0.2)',
          background: 'rgba(0, 0, 0, 0.1)',
          color: 'rgba(0, 255, 206, 0.2)'
        }
  });
  const CardButton2 = styled(Button)({
    background: props.buttonColor2,
        borderColor: props.color2,
        borderStyle: 'solid',
        borderWidth: '1px',
        padding: '3px 8px',
        color: props.color2,
        marginTop:'5px',
        fontSize:'13px',
        '&.active': {
          background: 'rgba(0, 255, 206, 1)',
          color: 'rgba(15, 67, 57, 1)',
        },
        '&:hover': {
          background: 'rgba(0, 255, 206, 1)',
          color: 'rgba(15, 67, 57, 1)',
        },
        '&:disabled': {
          borderColor: 'rgba(0, 255, 206, 0.2)',
          background: 'rgba(0, 0, 0, 0.1)',
          color: 'rgba(0, 255, 206, 0.2)'
        }
  });
  const rows = [
    createData('Class','☀ Summer'),
    createData('Breed Count', '0 out of 3'),
    createData('Owner', 'HECE...DHJx'),
    createData('FLUFF', props.token_sol.slice(6)),
  ];
  const AttributRows = [
    createData('Hunger','110'),
    createData('Sleep','104'),
    createData('Hygiene','103'),
    createData('Fun','113')
  ];
  const TraitsRows = [
    createTraitsData('Background','Taiyo Ruins','Sleep +8'),
    createTraitsData('Fur','Solana','Hunger +5'),
    createTraitsData('Eyes','Chill',''),
    createTraitsData('Mouth','Bubblegum','Hunger +3'),
    createTraitsData('Headgear','Moshi Hat','Fun +7'),
    createTraitsData('Accessory','Silver Chain','Hygiene +3'),
    createTraitsData('Toy','Lava Lamp','Fun +5')
  ];
  //////Rating 
  const Ratinglabels = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
  };
  const [value, setValue] = useState(props.token_count);
  const [hover, setHover] = useState(-1);


  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${Ratinglabels[value]}`;
  }
  return (
    <>
      <MyCard>
        <Box sx={{margin:'25px'}}>
            <Box sx={{display:'flex',marginTop:'25px',position:'relative'}}>
              <CardActionArea style={cardMediaStyle}>
                <CardMedia 
                  component="img"
                  image={props.picture}
                  alt="green iguana"
                  style={cardMediaStyle}
                  onClick={handleOpen}
                />
                <TokenCount>
                  <img src={Icon}></img>
                  <TokenCountFont>{props.token_count}</TokenCountFont>
                </TokenCount>
              </CardActionArea>
              <Box sx={{marginLeft:'15px'}}>
                <Typography sx={token_type_style}>{props.token_type}</Typography>
                <Typography sx={token_sol_style}>{props.token_sol}</Typography>
                {
                  date.map((info) => {
                    return(
                      <Box sx={{display:'flex'}}>
                        <ProgressBar value={info.value}/>
                        <DispCardButton text={info.text}/>
                      </Box>
                    );
                  })
                }
                
              </Box>
            </Box>
            <CardActions>
              {
                props.buttonDisable1 === true ? 
                  <CardButton1 disabled>{props.buttonTitle1}</CardButton1>:
                  <CardButton1>{props.buttonTitle1}</CardButton1>
              }
              {
                props.buttonDisable2 === true ? 
                  <CardButton2 disabled>{props.buttonTitle2}</CardButton2>:
                  <CardButton2>{props.buttonTitle2}</CardButton2>
              }
            </CardActions>
          </Box>
      </MyCard>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 800 }}>
          <Box >
              <Box sx={{display:'flex'}}>
                <CardMedia 
                component="img"
                image={props.picture}
                alt="green iguana"
                style={cardMediaStyle}
                /> 
                <Box sx={{marginLeft:'30px'}}>
                  <Typography
                    sx={{
                      fontFamily: 'Arial',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '24px',
                      lineHeight: '28px',
                      color: '#FFFFFF',
                      marginBottom:'20px'
                    }}
                  >{props.token_type}</Typography>

                      <TableContainer >
                            <Table size='small' sx={{minWidth:"576px"}} aria-label="simple table">
                              <TableBody>
                                {rows.map((row) => (
                                  <TableRow
                                    key={row.first}
                                    sx={TableRowStyle}
                                  >
                                    <TableCell sx={TableStyle} >
                                      {row.first}
                                    </TableCell>
                                    <TableCell sx={TableStyle} align="left">{row.second}</TableCell>
                                    
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                      </TableContainer>
                      <ChildModal />
                </Box>
              </Box>
          </Box>
          <Box sx={{display:'flex'}}>
            <Box>
                <Typography
                  sx={{
                    fontFamily: 'Arial',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '18px',
                    color: '#FFFFFF',
                    marginTop:'20px',
                    marginBottom:'15px'
                  }}
                >Attributes</Typography>
                  <TableContainer >
                      <Table size='small' sx={{minWidth:"198px"}} aria-label="simple table">
                        <TableBody>
                          {AttributRows.map((row) => (
                            <TableRow
                              key={row.first}
                              sx={AttribbuteTableRowStyle}
                            >
                              <TableCell sx={TableStyle} >
                                {row.first}
                              </TableCell>
                              <TableCell sx={TableStyle} align="left">{row.second}</TableCell>
                              
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                  </TableContainer>
                      <Typography
                      sx={{
                        fontFamily: 'Arial',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '16px',
                        lineHeight: '18px',
                        color: '#FFFFFF',
                        marginTop:'20px',
                        marginBottom:'15px'
                      }}
                    >Upgrades ({Ratinglabels[hover !== -1 ? hover : value]} of 6)</Typography>
                  
                  <Box
                      sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Rating
                        name="hover-feedback"
                        value={value}
                        precision={1}
                        getLabelText={getLabelText}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                       
                        }}
                        max={6}
                        onChangeActive={(event, newHover) => {
                          setHover(newHover);
                        }}
                        icon={<img src={RatingIcon}/>}
                        emptyIcon={<img src = {RatingHoverIcon}/>}
                      />     
                  </Box>
              </Box>
              <Box sx={{marginLeft:'30px'}}>
                <Typography
                    sx={{
                      fontFamily: 'Arial',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '16px',
                      lineHeight: '18px',
                      color: '#FFFFFF',
                      marginTop:'20px',
                      marginBottom:'15px'
                    }}
                  >Traits</Typography>
                  <TableContainer >
                      <Table size='small' sx={{minWidth:"575px"}} aria-label="simple table">
                        <TableBody>
                          {TraitsRows.map((row) => (
                            <TableRow
                              key={row.first}
                              sx={AttribbuteTableRowStyle}
                            >
                              <TableCell sx={TableStyle} >
                                {row.first}
                              </TableCell>
                              <TableCell sx={TableStyle} align="left">{row.second}</TableCell>
                              
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                  </TableContainer>
                </Box>
            </Box>
        </Box>
      </Modal>
    </>
  );
}
