const addItem = product => {
    return {
        type: "ADD_ITEM",
        payload: product
    }
}

const removeItem = product => {
    return {
        type: "REMOVE_ITEM",
        payload: product
    }
}

const increase = product => {
    return {
        type: "INCREASE",
        payload: product
    }
}
const increaseInput = (quantity,product) => {
    return {
        type: "INCREASE_INPUT",
        payload: product,
        number: quantity
    }
}

const decrease = product => {
    return {
        type: "DECREASE",
        payload: product
    }
}

const checkout = () => {
    return {
        type: "CHECKOUT"
    }
}

const clear = () => {
    return {
        type: "CLEAR"
    }
}

export {addItem, removeItem, increase, decrease, increaseInput ,checkout, clear};