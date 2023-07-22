import React, { useState } from "react";
import { GoogleSignin } from "../img/img";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from "./Welcome";
import ChatBox from "./ChatBox";

const NavBar = (args) => {
  const [user] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };
  const googleSignin = () => {
    {user ? (
            <button onClick={signOut} className="sign-out" type="button">
              Sign Out
            </button>
          ) : (
            <button className="sign-in">
              <img
                onClick={googleSignIn}
                src={GoogleSignin}
                alt="sign in with google"
                type="button"
                placeholder="Sign in"
              />
            </button>
          )}
  }
  return (
  //   <nav className="nav-bar">
  //     <h1>React Chat</h1>
  //     {user ? (
  //       <button onClick={signOut} className="sign-out" type="button">
  //         Sign Out
  //       </button>
  //     ) : (
  //       <button className="sign-in">
  //         <img
  //           onClick={googleSignIn}
  //           src={GoogleSignin}
  //           alt="sign in with google"
  //           type="button"
  //         />
  //       </button>
  //     )}
  //   </nav>
  // );
  <div>
      <Navbar {...args}
      className="my-2"
      color="dark"
      dark
      >
        <NavbarBrand href="/" style={styles.bold}>
        <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        style={{
          height: 40,
          width: 40
        }}
      />
            Thiago Bueno Garcia
            </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href='/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <Button onClick={googleSignin}>Sign in</Button>
            </NavItem>
          </Nav>
          <NavbarText style={styles.bold}>Menu</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
};

export default NavBar;

const styles = {
  bold: {
      fontWeight: 'bold'
  }
}