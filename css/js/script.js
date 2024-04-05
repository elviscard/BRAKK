let url="https://script.google.com/macros/s/AKfycbwOVrDYJQaKM-ocv-eNqtIuDKy8BktlsUO6WFS6fBcW6enrcHP8fo5UNNGimgRiBd7c/exec";
let form=document.querySelector('#form');


    form.addEventListener("submit", (e)=>{
        e.target.btn="Submitting";
        let d=new FormData(form);
        fetch(url,{
            method:"POST",
            body:d

        }).then((res)=>res.text())
        .then((finalRes)=>{
            console.log(finalRes)
            e.target.btn="Submit";
            form.reset();
        })
        .catch(error => {
            console.error(error);
            // Exibir uma mensagem de erro para o usuário
            alert("Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.");
          });
        e.preventDefault();
        
    })
