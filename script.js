document.addEventListener('DOMContentLoaded', () => {
    const pokeButton = document.getElementById("poke-button");
    const pokeInput = document.getElementById("pokemon");
    const pokeImageFront = document.getElementById("poke-img-front");
    const pokeImageBack = document.getElementById("poke-img-back");
    const statsContainer = document.querySelector(".stats");

    
    async function init() {
        try {
            const [statRes, genRes] = await Promise.all([
                fetch("https://pokeapi.co/api/v2/stat/1/"),
                fetch("https://pokeapi.co/api/v2/generation/3/")
            ]);
            const statData = await statRes.json();
            const genData = await genRes.json();

            statsContainer.innerHTML = `
                <p><span class="state-value">${statData.name.toUpperCase()}</span> Stat</p>
                <p><span class="state-value">${statData.id}</span> ID Stat</p>
                <p><span class="state-value">${genData.name.toUpperCase()}</span> Gen</p>
                <p><span class="state-value">${genData.main_region.name}</span> Região</p>
                <p><span class="state-value">${genData.abilities[0].name}</span> Habilidade</p>
            `;
        } catch (err) {
            console.error(err);
        }
    }

   
    pokeButton.addEventListener("click", async () => {
        const query = pokeInput.value.trim().toLowerCase();
        if (!query) return alert("Digite um nome ou ID!");

        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
            if (!res.ok) return alert("Pokémon não encontrado!");

            const data = await res.json();

           
            pokeImageFront.src = data.sprites.front_default || "";
            pokeImageBack.src = data.sprites.back_default || "";

         
            statsContainer.innerHTML = `
                <p><span class="state-value">${data.name.toUpperCase()}</span> Nome</p>
                <p><span class="state-value">#${data.id}</span> ID</p>
                <p><span class="state-value">${data.height}</span> Altura</p>
                <p><span class="state-value">${data.weight}</span> Peso</p>
                <p><span class="state-value">${data.types[0].type.name}</span> Tipo</p>
            `;
        } catch (err) {
            console.error(err);
        }
    });

    init();
});
