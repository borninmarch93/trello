import Grid from "../../Grid";
import Avatar from "../../Avatar";
import PopoverMenu from "../../PopoverMenu";
import React from "react";

interface AccountPopoverProps {
    show: boolean,
    onClose: () => void
}

const AccountPopover: React.FC<AccountPopoverProps> = ({ show, onClose }) => {
    return (
        <PopoverMenu title='Account' show={show} onClose={onClose}>
            <div className="popover__item">
                <Grid row={true}>
                    <Avatar username="VB" />
                </Grid>
            </div>
        </PopoverMenu>
    )
}

export default AccountPopover;