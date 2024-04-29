// Vérifie que le document html est fini de charger

document.addEventListener('DOMContentLoaded',function(even){
    document.getElementById('result');
        const result = document.getElementById('result');
       const caracterToAdd = document.getElementsByClassName("caracterToAdd")
       const resetButton = document.getElementById('reset');
       const send = document.getElementById ('send')
       const deleteButton = document.getElementById('delete')
       let reg = new RegExp("^[\\d\\W]+$");


    //    Events

       Array.prototype.forEach.call(caracterToAdd,carater => {
        carater.addEventListener('click',element =>{
            addcarater(carater.innerHTML)
        })
                
       })

       deleteButton.addEventListener('click', element => {
            deleteLastCaracter();
       })

       resetButton.addEventListener("click",element => {
        reset();
       })

       send.addEventListener ('click',element=> {
            calculate();
       })

       document.addEventListener('keyup',key =>{
        switch (key.key) {
            case "Enter":
                calculate();
                break;
            case "Delete":
            reset();
                break;
            default:
                if(reg.test(key.key)) {
                    addcarater(key.key)
                }           
                break;
                case "Backspace" :
                    deleteLastCaracter();
                    break
        }      

       })
       

    //    function
       function addcarater(newcarater){
        result.value = result.value + newcarater;}


       function reset () {
        result.value = "";
       }

       function calculate(){
            result.value = eval(result.value);
       }
function deleteLastCaracter(){
    result.value = result.value.slice(0,-1)
}
})
