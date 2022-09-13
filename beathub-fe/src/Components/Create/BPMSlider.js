import React from 'react'
import {NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Flex
} from '@chakra-ui/react'

function BPMSlider() {
    
        const [value, setValue] = React.useState(0)
        const handleChange = (value) => setValue(value)

        return (
            <Flex>
                <Slider
                    flex='1'
                    max={200}
                    focusThumbOnChange={false}
                    value={value}
                    onChange={handleChange}
                >
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb fontSize='sm' boxSize='32px' children={value} />
                </Slider>
            </Flex>
        )
    
}

export default BPMSlider