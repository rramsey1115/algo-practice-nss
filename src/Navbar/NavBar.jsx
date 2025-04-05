import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== 'click' ||
      (event.type === 'click' && samePageLinkNavigation(event))
    ) {
      setValue(newValue);
    }
  };

  return (
    <Box
      sx={{
        width: {
          xs: '100vw', // full width on mobile
          md: '85vw',  // 90% width on small screens and up
        },
        minWidth: '330px',
        bgcolor: '#212121',
        padding: "4px",
        position: 'fixed',
        top: 0,
        left: {
          xs: 0,
          md: '5vw',
        },
        boxSizing: 'border-box',
        borderBottom: '1px solid whitesmoke',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
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
        <LinkTab label="Frequency Frenzy" to="/freqfrenzy" />
        <LinkTab label="Product Check Sums" to="/prodsums" />
        <LinkTab label="Product Matching" to="/prodmatching" />
      </Tabs>
    </Box>
  );
}
