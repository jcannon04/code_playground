import React, { ChangeEvent, useState } from 'react';
import { Button, Modal, Radio, Label } from 'flowbite-react';
import Link from 'next/link';
function SocketConnect(props: { setOpenModal: any, openModal?: any, answer: string, setAnswer?: any, project?: string}) {

    const changeAnswerState = (e: ChangeEvent<HTMLInputElement>) => props.setAnswer(e.target.value);

    return (
        <div>
            <Modal dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header>
                    Would you like to connect?
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
                                value="No"
                                onChange={changeAnswerState}
                            />
                            <Label htmlFor="Student">
                                Yes
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="Teacher"
                                name="Roles"
                                value="Yes"
                                onChange={changeAnswerState}
                            />
                            <Label htmlFor="Teacher">
                                No
                            </Label>
                        </div>
                    </fieldset>
                </Modal.Body>
                <Modal.Footer>
                    <Link href={`/projects/${props.project}`}>
                    <Button color="gray" onClick={() => { props.setOpenModal(undefined) }}>
                        Join
                    </Button>
                    </Link>
                    <Button color="gray" onClick={() => { props.setOpenModal(undefined) }}>
                        No Thanks
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default SocketConnect;
