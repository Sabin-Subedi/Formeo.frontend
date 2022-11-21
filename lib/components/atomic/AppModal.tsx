import {
  Modal,
  ModalBody,
  ModalBodyProps,
  ModalCloseButton,
  ModalContent,
  ModalContentProps,
  ModalFooter,
  ModalFooterProps,
  ModalHeader,
  ModalHeaderProps,
  ModalOverlay,
  ModalOverlayProps,
  ModalProps,
} from "@chakra-ui/react";
import { WithChildrenProps } from "@type/main";
import AppButton from "./AppButton";

interface AppModalProps extends WithChildrenProps, ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  closeButton?: boolean;
  overlayProps?: ModalOverlayProps;
  contentProps?: ModalContentProps;
  footerProps?: ModalFooterProps;
  headerProps?: ModalHeaderProps;
  bodyProps?: ModalBodyProps;
}

function AppModal({
  title,
  isOpen,
  onClose,
  closeButton,
  children,
  overlayProps,
  contentProps,
  footerProps,
  headerProps,
  bodyProps,
  ...props
}: AppModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} {...props}>
      <ModalOverlay {...overlayProps} />
      <ModalContent borderRadius={3} {...contentProps}>
        <ModalHeader {...headerProps}>{title}</ModalHeader>
        {closeButton && <ModalCloseButton />}
        <ModalBody fontSize="sm" color="slate.600" {...bodyProps}>
          {children}
        </ModalBody>

        <ModalFooter {...footerProps}>
          <AppButton onClick={onClose}>Okay</AppButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

AppModal.defaultProps = {
  closeButton: false,
};

export default AppModal;
