import { useState } from "react";

const Common = () => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4])

    const addHandler = () => {
        const newArray = [...numbers]
        newArray.push(numbers[numbers.length -1] + 1)
        setNumbers(newArray)
    }

    const removeHandler = index => {
        const newArray = [...numbers]
        newArray.splice(index, 1)
        setNumbers(newArray)
    }

    return (
        <div>
            <h1>Numbers</h1>
            {numbers.map((num, index) => {
                return <h1 onClick = {() => removeHandler(index)} key={index}>{num}</h1>
            })}
            <button onClick={addHandler}>Add one</button>
        </div>
    )
}

export default Common;