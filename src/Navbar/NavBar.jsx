import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function LinkTab(props) {
  return (
    <Tab
      component={Link}
      to={props.to}
      aria-current={props.selected && 'page'}
      {...props}
    />
  );
}

LinkTab.propTypes = {
  selected: PropTypes.bool,
};

export const NavBar = () => {
  const location = useLocation();
  const pathToIndexMap = {
    "/": 0,
    "/multiples": 1,
    "/staircase": 2,
    "/buildings": 3,
    "/farm": 4,
    "/professor": 5,
    "/stranded": 6,
    "/numspal": 7,
    "/wordspal": 8,
    "/arcade": 9,
    "/dragon": 10,
    "/freqfrenzy": 11,
    "/freqduplicates": 12,
    "/prodsums": 13,
    "/prodmatching": 14,
  };

  const currentPath = location.pathname;
  const value = pathToIndexMap[currentPath] ?? false; // false = no tab selected if path doesn't match

  return (
    <Box
      sx={{
        width: {
          xs: '100vw', // full width on mobile
          md: '90vw',  // 90% width on small screens and up
        },
        minWidth: '330px',
        bgcolor: '#212121',
        padding: "4px",
        position: 'fixed',
        top: 0,
        left: {
          xs: 0,
          md: '4.25vw',
        },
        boxSizing: 'border-box',
        borderBottom: '1px solid whitesmoke',
      }}
    >
      <Tabs
        value={value}
        variant='scrollable'
        scrollButtons={true}
        allowScrollButtonsMobile
        aria-label="nav tabs"
        role="navigation"
        indicatorColor='inherit'
        textColor='whitesmoke'
        sx={{
          '& .MuiTab-root': {
            color: 'inherit',
            fontFamily: 'inherit',
            textTransform: 'none',
            fontSize: "1rem",
            fontWeight: 400,
            '&:hover': {
              color: (theme) => theme.palette.success.light,
            },
          },
          '& .Mui-scroller': {
            width: "80vw"
          },
          '& .Mui-selected': {
            color: (theme) => theme.palette.success.light,
            fontWeight: 500
          },
          '& .MuiTabs-indicator': {
            backgroundColor: (theme) => theme.palette.success.light,
          },
          '& .MuiTabs-scrollButtons': {
            color: 'whitesmoke',
          }
        }}
      >
        <LinkTab label="Home" to="/" />
        <LinkTab label="Sum of Multiples" to="/multiples" />
        <LinkTab label="Build a Staircase" to="/staircase" />
        <LinkTab label="Tall Buildings" to="/buildings" />
        <LinkTab label="Down on the Farm" to="/farm" />
        <LinkTab label="The Professor" to="/professor" />
        <LinkTab label="Stranded Surveyor" to="/stranded" />
        <LinkTab label="Nums Palindrome" to="/numspal" />
        <LinkTab label="Words Palindrome" to="/wordspal" />
        <LinkTab label="Arcade Elite" to="/arcade" />
        <LinkTab label="Dragon Flight" to="/dragon" />
        <LinkTab label="Frequency Frenzy" to="/freqfrenzy" />
        <LinkTab label="Frequency Duplicates" to="/freqduplicates" />
        <LinkTab label="Product Check Sums" to="/prodsums" />
        <LinkTab label="Product Matching" to="/prodmatching" />
      </Tabs>
    </Box>
  );
}
