class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.valid = true;
        this.eventos();
        this.eventosTela();

    }
    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }
    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        
        if(camposValidos){
            alert('Formulário enviado');
            this.formulario.submit();
        }
        
    }
   
    camposSaoValidos(){
        let valid = true;

        for(let erroText of this.formulario.querySelectorAll('.erro-text')){
            erroText.remove();
        }
        
        for(let campo of this.formulario.querySelectorAll('.validar')){
            if(campo.value.length == "0") {
                this.criaErro(campo, "Can't be blank ");
                campo.style.border = "1px solid red";
                valid = false;
            }
            else{
                campo.style.border = "1px solid rgb(182, 182, 182)";
                valid = valid && true;
            }
            
        }
        for(let campoDate of this.formulario.querySelectorAll('.validarDate')){
            if(!campoDate.value){
                this.formulario.querySelector('.erroDate').innerHTML = "Can't be blank ";
                campoDate.style.border = "1px solid red";
                valid = false;
        } else{
            
            this.formulario.querySelector('.erroDate').innerHTML = "";
            campoDate.style.border = "1px solid rgb(182, 182, 182)";
            valid = valid && true;
        }
    }
    if(!this.formulario.querySelector('.card-number').value.match(/^[0-9]+$/g) && this.formulario.querySelector('.card-number').value){
        this.criaErro(this.formulario.querySelector('.card-number'), "Wrong format, numbers only");
        valid = false;
    }   
    if(!this.formulario.querySelector('.nameCard').value.match(/^[a-zA-Z]+$/g) && this.formulario.querySelector('.nameCard').value){
        
        this.criaErro(this.formulario.querySelector('.nameCard'), "Wrong format, letters only");
        valid = false;
    }   
    if(!this.formulario.querySelector('.mes').value.match(/^[0-9]+$/g) && this.formulario.querySelector('.mes').value){
        this.formulario.querySelector('.erroDate').innerHTML = "Wrong format, numbers only";
        valid = false;
    }   
    if(!this.formulario.querySelector('.ano').value.match(/^[0-9]+$/g) && this.formulario.querySelector('.ano').value){
        this.formulario.querySelector('.erroDate').innerHTML = "Wrong format, numbers only"; 
        valid = false;
    }   

    
    return valid;
    }
    criaErro(campo, msg){
        const div = document.createElement('div');
        div.classList.add('erro-text');
        div.innerHTML = msg;
        campo.insertAdjacentElement('afterend', div);
    };

    eventosTela(){
        const inputNome = this.formulario.querySelector('.nameCard');
        const spanNome = document.querySelector('.spanName');
        
        const inputNum = this.formulario.querySelector('.card-number');
        const spanNum = document.querySelector('.number-card');
        
        const inputMM = this.formulario.querySelector('.mes');
        const spanMM = document.querySelector('.spanMes');
        
        const inputYY = this.formulario.querySelector('.ano');
        const spanYY = document.querySelector('.spanAno');
        
        const inputCVC = this.formulario.querySelector('.input-cvc');
        const spanCVC = document.querySelector('.number-cvc');
        
        
        this.formulario.addEventListener('input', () => {
            this.copiaNome(inputNome.value, spanNome);
            this.copiaNum(inputNum.value, spanNum);
            this.copiaDataMM(inputMM.value, spanMM);
            this.copiaDataYY(inputYY.value, spanYY);
            this.copiaCVC(inputCVC.value, spanCVC);
        
        })
    
    }
    copiaNome(input, span){
        span.innerText = input;
        if(input.length == '0'){
            span.innerText = 'Jane Appleseed';
        }
    }
    copiaNum(input, span){
        let numeroFormatado = input.slice(0, 4) + "  " + input.slice(4, 8) + "  " + input.slice(8, 12) + "  " + input.slice(12, 16);
        span.innerText = numeroFormatado;
        if(input.length == '0'){
            span.innerText = '0000 0000 0000 0000';
        }
    }
    copiaDataMM(input, span){
        span.innerText = input;
        if(input.length == '0'){
            span.innerText = '00';
        }
    }
    copiaDataYY(input, span){
        span.innerText = input;
        if(input.length == '0'){
            span.innerText = '00';
        }
    }
    copiaCVC(input, span){
        span.innerText = input;
        if(input.length == '0'){
            span.innerText = '000';
        }
    }
    
}


const valida = new ValidaFormulario();
