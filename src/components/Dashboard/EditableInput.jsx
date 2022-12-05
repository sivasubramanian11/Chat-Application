import React,{useState, useCallback} from 'react'
import { Input, InputGroup, Icon, Alert } from 'rsuite'

const EditableInput = ({initialValue,
     label,
     onSave,
       placeholder="Enter your value",
        emptymessage="Input is empty",
         ...inputprops}) => {
            const [input, setInput] = useState(initialValue);
            const [isEditable, setIsEditable] = useState(false);

            const onInputChange=(value)=>{
                setInput(value);
            }

            const onEditClick=useCallback(()=>{
                setIsEditable(p=>!p)
                setInput(initialValue)
            },[initialValue])
               

            const onSaveClick = async()=>{
                const trimmed =input.trim()

                if(trimmed === ''){
                    Alert.info(emptymessage, 4000)
                }
                if(trimmed !== initialValue){
                    await onSave(trimmed)
                }

                setIsEditable(false)
            }
            
    return(
    <div>
       {label}
       <InputGroup>
       <Input {...inputprops} 
       disabled={!isEditable}
       placeholder={placeholder}
       onChange={onInputChange} 
       value={input}
       />
       <InputGroup.Button onClick={onEditClick}>
       <Icon icon={isEditable ? 'close' : 'edit2'}/>
       </InputGroup.Button>
       {isEditable &&
       <InputGroup.Button onClick={onSaveClick}>
       <Icon icon='check'/>
       </InputGroup.Button> }
       </InputGroup>
    </div>
  )
}

export default EditableInput