import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '50%',margin:'auto'}}>
      <Box sx={{ width:'100%',margin:'auto' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className='w-[50%]' label="Đăng Nhập" {...a11yProps(0)} />
          <Tab className='w-[50%]' label="Đăng Ký" {...a11yProps(1)} />         
        </Tabs>
      </Box>
      <CustomTabPanel  value={value} index={0}>
        Item One fadfaffffffffffffff fffffffffffff ffffff ffff fffff fffffff ffffffff fffffffffffffffffffffafdafc dfadfwqrasdf dsafaqf afdf ad fasdf ấd
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
    </Box>
  );
}