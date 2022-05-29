import {Button} from '@mui/material';
import { styled } from '@mui/material/styles';
const CustomizeButton = styled(Button)({
  background: 'rgba(0, 0, 0, 0.1)',
      borderColor: 'rgba(0, 255, 206, 1)',
      borderStyle: 'solid',
      borderWidth: '1px',
      padding: '3px 8px',
      color: 'rgba(0, 255, 206, 1)',
      marginTop:'5px',
      fontSize:'10px',
      marginRight:'10px',
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

const activeClasses = {
  background:'rgba(0, 255, 206, 1)',
  color:'rgba(15, 67, 57, 1)',
}
const BrightButton = (props) => {
  const handleClick = () => {
    props.changeButton(props.index)
  }
  return(
    <>
      <CustomizeButton 
        sx={(props.selectedFilter == props.index) 
        || (props.selectedClasses == props.index)
        || (props.selectedStatus == props.index)
        || ((props.selectedFurrmarkFilter == props.index)) 
        || ((props.selectedInventoryFilter == props.index)) ? activeClasses:''} 
        onClick={handleClick}

      >{props.text}</CustomizeButton>
    </>
  );
}
export default BrightButton;