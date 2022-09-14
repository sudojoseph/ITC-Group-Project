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

function BPMSlider({changeHandler}) {
    
        const [value, setValue] = React.useState(0)
        const handleChange = (value) => {
            const e = {target: {}};
            e.target.value = value;
            e.target.name = 'bpm';
            changeHandler(e);
            setValue(value);
        }

        return (
            <Flex>
                <Slider
                    flex='1'
                    max={200}
                    focusThumbOnChange={false}
                    value={value}
                    name='bpm'
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