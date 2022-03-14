export function descreption (text){
    const list = text.split(" ");
    let new_list = []
    for(let i = 0 ; i < 25 ; i++){
        new_list.push(list[i])
    }
    return new_list.join(" ");
}