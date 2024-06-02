
import React, { Button} from 'react'

import Form from './Form'
const Test = () => {
    return(
        <Button 
            title='Register Now'
            onPress={<Form/>}
        />
    )
}
export default Test