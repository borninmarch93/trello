import Grid from "../../Grid";
import Avatar from "../../Avatar";
import PopoverMenu from "../../PopoverMenu";
import React from "react";
import { Member } from "../../../store/reducers/members";

interface AccountPopoverProps {
    show: boolean,
    member: Member,
    onClose: () => void
}

const AccountPopover: React.FC<AccountPopoverProps> = ({ show, member, onClose }) => {
    return (
        <PopoverMenu title='Account' show={show} onClose={onClose}>
            <div className="popover__item">
                {member &&
                <Grid row={true}>
                    <Avatar username={member.initials} />
                    <h4>{member.fullName}</h4>
                    <p>{member.email}</p>
                </Grid>}
            </div>
        </PopoverMenu>
    )
}

export default AccountPopover;