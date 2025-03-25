

function teste(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://picsum.photos", true);
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            //const response = JSON.parse(xhr.responseText);
            console.log(xhr.status);

            // Atualizar a interface do usuário aqui
            const url= xhr.responseURL+'/id/119/600/400.webp';
            document.getElementById("imagem-api").innerHTML = "<figure><img src="+url+" alt='Figura'/></figure>";
        } else {
            console.error("Erro na requisição:", xhr.statusText);
        }
    };
    xhr.send();
}

