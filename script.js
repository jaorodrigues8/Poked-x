document.addEventListener('DOMContentLoaded', () => {

    let pokeButton = document.getElementById("poke-button");
    let yugiButton = document.getElementById("yugi-button");

   
    pokeButton.addEventListener("click", async () => {
        try {
            let pokeInputText = document.getElementById("pokemon").value;
        
            if (!pokeInputText)
                return alert("Campo de nome/id vazio!");

            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeInputText}`);
            let data = await response.json();

            let pokeImage = document.getElementById("poke-img");
            pokeImage.src = data.sprites.front_default;
        } catch (error) {
            console.log("Erro: " + error);
        }

    });

  
    yugiButton.addEventListener("click", () => {

        let yugiInputText = document.getElementById("yugioh").value;

        if (!yugiInputText)
            return alert("Campo de nome vazio!");

        let yugiImage = document.getElementById("yugi-img");

        fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${yugiInputText}`)
            .then(res => res.json())
            .then(data => {
                if (data.data && data.data.length > 0)
                    yugiImage.src = data.data[0].card_images[0].image_url;
                else
                    alert("Carta não encontrada!");
            })
            .catch(error => console.log("Erro: " + error));
    });
});document.addEventListener('DOMContentLoaded', () => {

    let pokeButton = document.getElementById("poke-button");
    let yugiButton = document.getElementById("yugi-button");

    
    pokeButton.addEventListener("click", async () => {
        try {
            let pokeInputText = document.getElementById("pokemon").value;
        
            if (!pokeInputText)
                return alert("Campo de nome/id vazio!");

            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeInputText}`);
            let data = await response.json();

            let pokeImage = document.getElementById("poke-img");
            pokeImage.src = data.sprites.front_default;
        } catch (error) {
            console.log("Erro: " + error);
        }

    });

    
    yugiButton.addEventListener("click", () => {

        let yugiInputText = document.getElementById("yugioh").value;

        if (!yugiInputText)
            return alert("Campo de nome vazio!");

        let yugiImage = document.getElementById("yugi-img");

        fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${yugiInputText}`)
            .then(res => res.json())
            .then(data => {
                if (data.data && data.data.length > 0)
                    yugiImage.src = data.data[0].card_images[0].image_url;
                else
                    alert("Carta não encontrada!");
            })
            .catch(error => console.log("Erro: " + error));
    });
});