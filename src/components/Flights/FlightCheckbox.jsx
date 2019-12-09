import React, { useState, useEffect } from "react";

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const FlightCheckbox = props => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);


  

  return (
    <>
    <p>Select Flight Options</p>
  <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Your Options
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Choose From</DropdownItem>

        <DropdownItem  id="1" value="1" onClick={props.handleDirectFlights}>Direct</DropdownItem>
        <DropdownItem id="0" value="0" onClick={props.handleDirectFlights} >Nicht Direct</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
    </>
  );
};

export default FlightCheckbox;