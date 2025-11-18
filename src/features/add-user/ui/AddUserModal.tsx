import { useDisclosure } from "@mantine/hooks";
import { Button, Modal } from "@/shared/ui";
import { AddUserModalContent } from "./AddUserModalContent";

export const AddUserModal = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title="Add new user"
                closeOnClickOutside={false}
            >
                <AddUserModalContent closeModal={close} />
            </Modal>

            <Button onClick={open}>Add user</Button>
        </>
    );
};
