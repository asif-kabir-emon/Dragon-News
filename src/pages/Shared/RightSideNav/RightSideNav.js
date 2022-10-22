import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/UserContext";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
  const { googleLogIn } = useContext(AuthContext);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  // console.log(from);

  const handleGoogleSignIn = () => {
    googleLogIn()
      .then((result) => {
        const g_user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div>
      <ButtonGroup vertical>
        <Button
          className="mb-2 d-flex align-items-center"
          variant="outline-primary"
          onClick={handleGoogleSignIn}
        >
          <FaGoogle className="me-2"></FaGoogle> Login with Google
        </Button>
        <Button
          className="mb-2 d-flex align-items-center"
          variant="outline-dark"
        >
          <FaGithub className="me-2"></FaGithub> Login with Github
        </Button>
      </ButtonGroup>
      <div>
        <h5 className="mt-2">Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            {" "}
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp></FaWhatsapp> WhatsApp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch></FaTwitch> Twitch
          </ListGroup.Item>
        </ListGroup>
      </div>
      <BrandCarousel></BrandCarousel>
    </div>
  );
};

export default RightSideNav;
