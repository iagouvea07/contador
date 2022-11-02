const valor = document.getElementById('valor')
const btns = document.querySelectorAll('.btn')
var numero = 0

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        
        if(styles.contains('decrease')){
            numero --
        }

        else if(styles.contains('increase')){
            numero ++
        }

        else{
            numero = 0
        }
        
        if(numero > 0){
            valor.style.color = 'green'
        }
        else if(numero < 00){
            valor.style.color = 'red'
        }
        else{
            valor.style.color = 'black'
        }
        valor.textContent = numero
    })
})

