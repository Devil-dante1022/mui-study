import * as React from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 18,
  width:160,
  borderRadius: 5,
  marginTop:'17px',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "rgba(0, 66, 53, 0.1)",
    border:'1px solid rgba(0, 255, 206, 0.5)',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    border:'2px solid #004235',
    backgroundColor: '#005E69',
  },
}));
export default function ProgressBar(props) {
  return (
    <BorderLinearProgress variant="determinate" value={props.value} />
  );
}
