import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const TabsBooking = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label={<p className='text-lg'><span className='text-4xl'>28</span>/02- T2</p>} value="1" />
            <Tab label={<p className='text-lg'><span className='text-4xl'>28</span>/02- T2</p>} value="2" />
            <Tab label={<p className='text-lg'><span className='text-4xl'>28</span>/02- T2</p>} value="3" />
            <Tab label={<p className='text-lg'><span className='text-4xl'>28</span>/02- T2</p>} value="4" />
            <Tab label={<p className='text-lg'><span className='text-4xl'>28</span>/02- T2</p>} value="5" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Four</TabPanel>
        <TabPanel value="5">Item Five</TabPanel>
      </TabContext>
    </Box>
  );
}

export default TabsBooking