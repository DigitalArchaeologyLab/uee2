import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 800,
    margin: 100,
  },
  margin: {
    height: theme.spacing(500),
  },
}));

const marks = [
  {
    value: -3000,
    label: '3000 BCE',
  },
  {
    value: 0,
    label: '0',
  },
  {
    value: 1000,
    label: '1000 CE',
  },
];

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 500]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Time range
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        marks={marks}
        min={-3000}
        max={1000}
      />
    </div>
  );
}
