export const isInCard = (state , id) =>{
    const resault = !!state.selectedItems.find(item => item.id === id)
    return resault
}
export const qunatityManager = (state , id) =>{
    const qunatityResault = state.selectedItems.findIndex(item => item.id === id)
    if(qunatityResault === -1){
        return false;
    }else{
        return state.selectedItems[qunatityResault].quantity;
    }
}