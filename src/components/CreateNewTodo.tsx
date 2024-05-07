import { TextField, Button } from "@mui/material"
import { ChangeEvent } from "react"

type Props = {
    newTodoString: string;
    onNewTodoChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onAddingBtnClick: () => void;
}

const CreateNewTodo = ({
    newTodoString,
    onNewTodoChange,
    onAddingBtnClick
} : Props) => {
  return (
    <div>
        <TextField 
            size="small" 
            value={newTodoString} 
            onChange={onNewTodoChange}
        />
        <Button 
            variant="contained" 
            onClick={onAddingBtnClick}
        >
            Add
        </Button>
      </div>
  )
}

export default CreateNewTodo
