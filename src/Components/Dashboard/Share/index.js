import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Button from "../../Common/Button";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import "./style.css";
import { Backdrop, Fade } from "@mui/material";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   // bgcolor: "background.paper",
//   // border: "2px solid #000",
//   boxShadow: 24,
//   // p: 4,
// };

export default function ShareModal() {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button onClick={handleOpen} text="Share App" outlined={true} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        className="modal-div"
      >
        <Fade in={open}>
          <div className="modal-items">
            <FacebookShareButton url={"https://www.facebook.com/login/"}>
              <FacebookIcon />
            </FacebookShareButton>
            <EmailShareButton
              url={"https://master--crypto-dashboard-akashm.netlify.app/"}
            >
              <EmailIcon />
            </EmailShareButton>
            <WhatsappShareButton
              title="Crypto-website"
              url={"https://master--crypto-dashboard-akashm.netlify.app/"}
            >
              <WhatsappIcon />
            </WhatsappShareButton>
            <LinkedinShareButton
              url={"https://master--crypto-dashboard-akashm.netlify.app/"}
            >
              <LinkedinIcon />
            </LinkedinShareButton>
            <TwitterShareButton>
              <TwitterIcon />
            </TwitterShareButton>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
