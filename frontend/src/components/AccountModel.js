
import * as React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { styled, css } from "@mui/system";
import { Modal as BaseModal } from "@mui/base/Modal";
import { useDispatch, useSelector } from "react-redux";
import logoImage from "../assets/pngwing.com.png";
import { closeModal } from "../redux/slices/modalSlice";

export default function ModalUnstyled() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);
  const user = useSelector((state) => state.user.user);

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={isOpen}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <ModalContent sx={{ width: 400 }}>
          <div className="top-0 z-10">
            <img src={logoImage} alt="Logo" className="w-48" />
          </div>
          <h2 id="unstyled-modal-title" className="modal-title">
            User Details
          </h2>
          {user ? (
            <>
              <p id="unstyled-modal-description" className="modal-description">
                <strong>Name:</strong>
                <span className="text-red-600"> {user.name}</span>
              </p>
              <p className="modal-description">
                <strong>Username:</strong>{" "}
                <span className="text-red-600"> {user.username}</span>
              </p>
              <p className="modal-description">
                <strong>Email:</strong>{" "}
                <span className="text-red-600"> {user.email}</span>
              </p>
            </>
          ) : (
            <p className="modal-description text-red-600">
              User details not available.
            </p>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

const Backdrop = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "base-Backdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const black = {
  900: "#000000",
};

const white = {
  50: "#FFFFFF",
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: ${black[900]};
  opacity: 0.5;
`;

const ModalContent = styled("div")(
  ({ theme }) => css`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${black[900]};
    border-radius: 8px;
    border: 1px solid ${black[900]};
    box-shadow: 0 4px 12px ${black[900]};
    padding: 24px;
    color: ${white[50]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${white[50]};
      margin-bottom: 4px;
    }
  `
);
