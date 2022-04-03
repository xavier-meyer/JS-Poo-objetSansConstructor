// méthode à ne pas privilégier si bcp d'objets

//on définit la voiture avec toutes ses propriétés
let voiture = {
    marque: 'renault',
    modele : 'Twingo',
    annee : 2000,
    i : 0,
    compteurKm : function (){
        return this.i++;
    }    
}
//on définit une 2éme voiture avec d'autres propriétés
let voiture1 = {
    marque: 'citroen',
    modele : 'Picasso',
    annee : 2004,
    i : 0,
    compteurKm : function (){
        return this.i++;
    },
// méthode get
get lemodel(){
    return this.modele;
    } 
}    

// on affiche l'objet avec sa propriété
console.log(`le compteur de la voiture est à ${voiture1.compteurKm()}`);
console.log(`le compteur de la voiture est à ${voiture1.compteurKm()}`); 
console.log(`le compteur de la voiture est à ${voiture1.compteurKm()}`);
console.log(`le compteur de la voiture est ${voiture1.lemodel}`);

console.log(`la marque de la voiture est ${voiture1.marque} et son compteur affiche ${voiture1.compteurKm()} kms.`);
