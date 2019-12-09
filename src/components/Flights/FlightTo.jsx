import React, { useState, useEffect } from "react";

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const FlightTo = props => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <>
    <p>Flight To</p>
  <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Flight To {props.to}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Choose From</DropdownItem>

        <DropdownItem  id="VLC" value="Valencia" onClick={props.handleSetTo}>Valencia</DropdownItem>

        <DropdownItem id="BCN" value="Barcelona" onClick={props.handleSetTo} >Barcelona</DropdownItem>

        <DropdownItem id="MAD" value="Madrid" onClick={props.handleSetTo} >Madrid</DropdownItem>

        <DropdownItem id="ATH" value="Athens" onClick={props.handleSetTo}>Athens</DropdownItem>

        <DropdownItem id="MXP" value="Milano" onClick={props.handleSetTo}>Milano</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
    </>
  );
};

export default FlightTo;