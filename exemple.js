
let nouveau   = document.querySelector('#nouveau');
let citation  = document.querySelector('#citation');
let auteur    = document.querySelector('#auteur');

let dernier   = 0;
let nombreAleatoire = 0;
// Tableau de citations
let citations = [
  ["La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", "Gandhi"],
  ["Le plus grand risque est de ne prendre aucun risque.", "Mark Zuckerberg"],
  ["A chaque fois que vous vous retrouvez du même côté que la majorité, il est temps de prendre du recul, et de réfléchir.", "Mark Twain"],
  ["Seulement ceux qui prendront le risque d’aller trop loin découvriront jusqu’où on peut aller.", "T.S Elliot"],
  ["Le succès c’est tomber sept fois, se relever huit.", "Proverbe japonais"],
  ["Dans vingt ans vous serez plus déçus par les choses que vous n’avez pas faites que par celles que vous avez faites. Alors sortez des sentiers battus. Mettez les voiles. Explorez. Rêvez. Découvrez.", "Mark Twain"],
  ["Si vous attendez pour agir, tout ce que vous gagnerez, avec le temps, c’est de l’âge.", "Brian Tracy"],
  ["Quand on concentre son attention sur un seul projet, l’esprit suggère constamment des idées et des améliorations qui lui échapperaient s’il était occupé avec plusieurs projets en même temps.", "P.T. Barnum"],
  ["Se dédier à faire tout ce que l’on peut pour aider les autres à obtenir ce qu’ils veulent, c’est la clé du succès.", "Brian Sher"],
  ["Ne jugez pas chaque jour sur ce que vous récoltez, mais sur les graines que vous semez.", "Robert Louis Stevenson"],
  ["Le succès, c’est se promener d’échecs en échecs tout en restant motivé.", "Winston Churchill"],
  ["Votre avenir est créé par ce que vous faîtes aujourd’hui, pas demain.", "Robert T. Kiyosaki"],
  ["Pour gagner votre vie, apprenez à l’école. Pour gagner une fortune, apprenez par vous-même.", "Brian Tracy"],
  ["Les gagnants trouvent des moyens, les perdants des excuses…", "F. D. Roosevelt"],
  ["Vous n’êtes jamais trop vieux pour vous fixer de nouveaux buts, ou rendre vos rêves réalité.", "C.S. Lewis"],
  ["Une petite impatience ruine un grand projet.", "Confucius"],
  ["La confiance est un élément majeur : sans elle, aucun projet n’aboutit.", "Eric Tabarly"],
  ["Tu peux tout accomplir dans la vie si tu as le courage de le rêver, l’intelligence d’en faire un projet réaliste, et la volonté de voir ce projet mené à bien", "Sidney A. Friedman"],
  ["Seul, on va plus vite. Ensemble on va plus loin.", "proverbe africain"],
  ["Prévoir consiste à projeter dans l’avenir ce qu’on a perçu dans le passé.", "Henri Bergson"],
  ["On ne se débarrasse pas d’une habitude en la flanquant par la fenêtre. Il faut lui faire descendre l’escalier marche par marche", "Mark Twain"],
  ["Pour réussir il ne suffit pas de prévoir, il faut aussi savoir improviser","Isaac Asimov"],
  ["Il n’y a pas de vent favorable pour celui qui ne sait pas où il va","Sénèque"],
];

//Fonction qui va générer un nombre aléatoire grace à l'objet Math.random
function genererNombreEntier(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

// événement quand on click sur nouveau on appel l'index d'une citation dans le tableau ci-dessus
nouveau.addEventListener('click', () => {
    do {
        nbrAleatoire = genererNombreEntier(citations.length); //Mise en mémoire du nbr aléatoire par rapport au nbr d'index du tableau
    }
    while (nbrAleatoire == dernier)

    citation.textContent = citations[nbrAleatoire][0];
    auteur.textContent   = citations[nbrAleatoire][1];
    dernier              = nombreAleatoire;
});