import React, { useState, useEffect } from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const FlightFrom = props => {

  const [dropdownOpen, setOpen] = useState(false);
  const [dropdownSuccess, setDropdownSuccess] = useState()
  const toggle = () => setOpen(!dropdownOpen);
 

  return (
    <>
    <p>Flight From</p>
  <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
       From {props.from}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Choose From</DropdownItem>
        <DropdownItem  id="PRG" value="prague" onClick={props.handleSetFrom}>Prague</DropdownItem>
        <DropdownItem id="BER" value="berlin" onClick={props.handleSetFrom} >Berlin</DropdownItem>
        <DropdownItem id="WAW" value="warswaw" onClick={props.handleSetFrom} >Warsaw</DropdownItem>
        <DropdownItem id="PET" value="pardubice" onClick={props.handleSetFrom}>Pardubice</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
    </>
  );
};

export default FlightFrom;