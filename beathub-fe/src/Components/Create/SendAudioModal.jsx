import React, { useState } from 'react'
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
import BPMSlider from './BPMSlider';

function SendAudioModal({submitThread}) {
    const [formInfo, setFormInfo] = useState({bpm: 0});
    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const changeHandler = (e) => {
        setFormInfo({...formInfo, [e.target.name]: e.target.value})
    }

    const submitAll = () => {
        submitThread(formInfo);
        onClose();
    }

    return (
        <>
            <Button color={'white'} backgroundColor={'#A61C4F'} onClick={onOpen}>Submit Threada</Button>

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
                            <Input value={formInfo?.title} name="title" ref={initialRef} placeholder='Title' onChange={(e) => changeHandler(e)} />
                        </FormControl>

                        <Flex>
                            <FormControl mt={4} mr='2rem' w='40%'>
                                <FormLabel>Genre</FormLabel>
                                <Select value={formInfo?.genre} onChange={(e) => changeHandler(e)} name="genre" variant='flushed' placeholder='Select' size='sm'>
                                    <option value='rock'>Rock</option>
                                    <option value='pop'>Pop</option>
                                    <option value='jazz'>Jazz</option>
                                    <option value='edm'>EDM</option>
                                    <option value='regional'>Regional</option>
                                </Select>
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>BPM</FormLabel>
                                    <BPMSlider bpm={formInfo?.bpm} changeHandler={changeHandler} />
                            </FormControl>
                        </Flex>

                        <FormControl mt={4}>
                            <FormLabel>Additional Information</FormLabel>
                            <Textarea value={formInfo?.text} name="text" placeholder='Write about the song' onChange={(e) => changeHandler(e)} />
                        </FormControl>

                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={submitAll} backgroundColor='#A61C4F' color='#F2F2F2' _hover={{backgroundColor:'#F2F2F2', color:'#A61C4F'}} mr={3} >
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