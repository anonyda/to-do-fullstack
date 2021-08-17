

export const formatTime = (date) =>{
    let formattedTime = `${date.getHours()}:${date.getMinutes()}`
    return formattedTime;
}

export const displayDate = () => {
    let n =  new Date();
    let y = n.getFullYear();
    let m = n.getMonth() + 1;
    let d = n.getDate();
    document.getElementById("date").innerText = d + "/" + m + "/" + y;
}