import Grid from "../../Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import PopoverMenu from "../../PopoverMenu";
import React, { useState } from "react";
import Modal from "../../Modal";
import Input from "../../Input";
import Button from "../../Button";

interface CreateMenuProps {
    show: boolean,
    onClose: () => void
}

const CreateMenu: React.FC<CreateMenuProps> = ({ show, onClose }) => {
    const [showModal, setShowModal] = useState(false);
    const [board, setBoard] = useState('');

    const textHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setBoard(value);
    }

    return (
        <PopoverMenu show={show} title='Create' onClose={onClose}>
            <a onClick={() => setShowModal(true)}>
                <div className="popover__item">
                    <Grid row={true}>
                        <FontAwesomeIcon icon={faTimes}/>
                        <h4>Create board</h4>
                    </Grid>
                    <Grid>
                        <p>A board is made up of cards ordered on lists. Use it to manage projects, track
                            information, or organize anything.</p>
                    </Grid>
                </div>
            </a>
            <Modal
                size="sm"
                show={showModal}
                onClose={() => setShowModal(false)}
                title="">
                <Input
                    placeholder="Add board title"
                    onChange={textHandler}
                    type="text"
                    value={board}/>
                <Button variant="shadowed">Create Board</Button>
            </Modal>
        </PopoverMenu>
    )
}

export default CreateMenu;