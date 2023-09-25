import React, { ChangeEvent, useState } from 'react';
import { Button, Modal, Radio, Label } from 'flowbite-react';
import axios from 'axios';
import { useUser } from '@clerk/nextjs';
function RoleSelect(props: { setOpenModal: any; openModal?: any; }) {


    const [role, setRole] = useState("Student");
    const { isLoaded, user } = useUser();

    const changeRoleState = (e: ChangeEvent<HTMLInputElement>) => setRole(e.target.value);


    async function selectingRole() {
        let username;
        if (isLoaded) {
            username = user.username;
        }
        const response = await axios.put("/api/User", { username: username, role: role });

        console.log(response.data);

    }
    return (
        <div>
            <Modal dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header>
                    Are you a student or teacher?
                </Modal.Header>

                <Modal.Body>
                    <fieldset
                        className="flex max-w-md flex-col gap-4"
                        id="radio"
                    >

                        <div className="flex items-center gap-2">
                            <Radio
                                defaultChecked
                                id="Student"
                                name="Roles"
                                value="Student"
                                onChange={changeRoleState}
                            />
                            <Label htmlFor="Student">
                                Student
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="Teacher"
                                name="Roles"
                                value="Teacher"
                                onChange={changeRoleState}
                            />
                            <Label htmlFor="Teacher">
                                Teacher
                            </Label>
                        </div>
                    </fieldset>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="gray" onClick={() => { props.setOpenModal(undefined); selectingRole(); }}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default RoleSelect