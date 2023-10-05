'use client';
import { Checkbox, Table, Modal, Button } from 'flowbite-react';
import { useState } from 'react';


export default function StudentModal({ openStudentModal, setOpenStudentModal, students }) {

    const props = { openStudentModal, setOpenStudentModal,students };

    
    return (
        <Modal dismissible show={props.openStudentModal === 'dismissible'} onClose={() => props.setOpenStudentModal(undefined)}>
            <Modal.Header>Students</Modal.Header>
            <Modal.Body>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell className="p-4">
                            <Checkbox />
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Name
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Student ID
                        </Table.HeadCell>
                        <Table.HeadCell>
                            # of Projects
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            students.map((Student) => {
                                return(
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="p-4">
                                        <Checkbox />
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {Student.username}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {Student._id}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {Student.projects.length}
                                    </Table.Cell>
                                    </Table.Row>
                                )
                            })
                        }
                    </Table.Body>
                </Table>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>

    )
}
