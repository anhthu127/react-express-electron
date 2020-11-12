
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
    const {
        buttonLabel,

    } = props.buttonLabel;

    const [modal, setModal] = useState(props.modal);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Modal isOpen={modal}  >
                <ModalHeader  > {buttonLabel}</ModalHeader>
                <ModalBody>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;