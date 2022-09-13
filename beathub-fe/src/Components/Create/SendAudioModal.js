import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Flex,
    Select
} from '@chakra-ui/react'
import BPMSlider from './BPMSlider'

function SendAudioModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Track Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input ref={initialRef} placeholder='Title' />
                        </FormControl>

                        <Flex>
                            <FormControl mt={4} mr='2rem' w='40%'>
                                <FormLabel>Genre</FormLabel>
                                <Select variant='flushed' placeholder='Select' size='sm'>
                                    <option value='rock'>Rock</option>
                                    <option value='pop'>Pop</option>
                                    <option value='jazz'>Jazz</option>
                                    <option value='edm'>EDM</option>
                                    <option value='regional'>Regional</option>
                                </Select>
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>BPM</FormLabel>
                                    <BPMSlider/>
                            </FormControl>
                        </Flex>

                        <FormControl mt={4}>
                            <FormLabel>Additional Information</FormLabel>
                            <Textarea placeholder='Write about the song' />
                        </FormControl>

                    </ModalBody>

                    <ModalFooter>
                        <Button backgroundColor='#A61C4F' color='#F2F2F2' _hover={{backgroundColor:'#F2F2F2', color:'#A61C4F'}} mr={3} >
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default SendAudioModal