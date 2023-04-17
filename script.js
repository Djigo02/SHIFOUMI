const ppp = ["Pierre","Papier","Ciseaux"];
const ia_score = document.querySelector('#ia_score');
const my_score = document.querySelector('#my_score');
const comment = document.querySelector("#comment");
const btn = document.querySelector(".continue");
const canva = document.querySelector("#game");

var ia_val , my_val ;
var pierre = "👊" , papier = "✋" , ciseaux ="✌";

ia_score.innerText = 0;
my_score.innerText = 0;

// Comme l'indique son nom elle permet de faire un choix et montre les resultats de la partie ;
function choice(c) {
    my_val = c;
    let rand = Math.floor(Math.random()*ppp.length);
    ia_val = ppp[rand];
    if(my_val == "Pierre"){
        if(ia_val == "Papier"){
            ia_score.innerText= parseInt(parseInt(ia_score.innerText) + 1);
            canva.innerHTML = `
            <div class="after_choice">
                <p id="comment">Vous avez perdu !</p>
                <div class="value_choice">
                    <div>${pierre}</div>
                    <div>${papier}</div>
                </div>
                <button class="continue" onclick="retourne()" >Continuer</button>
            </div>
            `;
        }else if(ia_val == "Ciseaux"){
            my_score.innerText = parseInt(parseInt(my_score.innerText) + 1);
            canva.innerHTML = `
            <div class="after_choice">
                <p id="comment">Vous avez gagné !</p>
                <div class="value_choice">
                    <div>${pierre}</div>
                    <div>${ciseaux}</div>
                </div>
                <button class="continue" onclick="retourne()" >Continuer</button>
            </div>
            `;
        }else {
            canva.innerHTML = `
            <div class="after_choice">
                <p id="comment">Match nul !</p>
                <div class="value_choice">
                    <div>${pierre}</div>
                    <div>${pierre}</div>
                </div>
                <button class="continue" onclick="retourne()" >Continuer</button>
            </div>
            `;
        }

    }else if(my_val == "Papier"){
        if(ia_val == "Ciseaux"){
            ia_score.innerText= parseInt(parseInt(ia_score.innerText) + 1);
            canva.innerHTML = `
            <div class="after_choice">
                <p id="comment">Vous avez perdu !</p>
                <div class="value_choice">
                <div>${ciseaux}</div>
                <div>${papier}</div>
                </div>
                <button class="continue" onclick="retourne()" >Continuer</button>
            </div>
            `;
        }else if(ia_val == "Pierre"){
            my_score.innerText = parseInt(parseInt(my_score.innerText) + 1);
            canva.innerHTML = `
            <div class="after_choice">
                <p id="comment">Vous avez gagné !</p>
                <div class="value_choice">
                    <div>${pierre}</div>
                    <div>${papier}</div>
                </div>
                <button class="continue" onclick="retourne()" >Continuer</button>
            </div>
            `;
        }else {
            canva.innerHTML = `
            <div class="after_choice">
                <p id="comment">Match nul !</p>
                <div class="value_choice">
                    <div>${papier}</div>
                    <div>${papier}</div>
                </div>
                <button class="continue" onclick="retourne()" >Continuer</button>
            </div>
            `;
        }
    }else if(my_val == "Ciseaux"){
        if(ia_val == "Pierre"){
            ia_score.innerText= parseInt(parseInt(ia_score.innerText) + 1);
            canva.innerHTML = `
            <div class="after_choice">
                <p id="comment">Vous avez perdu !</p>
                <div class="value_choice">
                <div>${pierre}</div>
                <div>${ciseaux}</div>
                </div>
                <button class="continue" onclick="retourne()" >Continuer</button>
            </div>
            `;
        }else if(ia_val == "Papier"){
            my_score.innerText = parseInt(parseInt(my_score.innerText) + 1);
            canva.innerHTML = `
            <div class="after_choice">
                <p id="comment">Vous avez gagné !</p>
                <div class="value_choice">
                    <div>${papier}</div>
                    <div>${ciseaux}</div>
                </div>
                <button class="continue" onclick="retourne()" >Continuer</button>
            </div>
            `;
        }else {
            canva.innerHTML = `
            <div class="after_choice">
                <p id="comment">Match nul !</p>
                <div class="value_choice">
                    <div>${ciseaux}</div>
                    <div>${ciseaux}</div>
                </div>
                <button class="continue" onclick="retourne()" >Continuer</button>
            </div>
            `;
        }
    }

}

// Cette fonction nous permet de retourner au jeu apres avoir lu les commentaires de la partie précédente ;
function retourne()
{
    canva.innerHTML = `
    <div class="jeu">
        <div class="ppc" onclick='choice("Pierre")'>👊</div>
        <div class="ppc" onclick='choice("Papier")'>✋</div>
        <div class="ppc" onclick='choice("Ciseaux")'>✌</div>
    </div>
    `;
}
