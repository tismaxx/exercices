new Vue({
  el: '#app',
  data: { // You shouldn't change the "data" part
    array : [7,8,9,5,6,9,8,8,8,8,7,6,9]
  },
  methods:{
  filterDuplicates(data) {
    // J'imagine qu'il y a des lib js qui font le travail seule et plus efficacement(le nb d'occurences dans les boucles peut
    // sûrement être réduit mais j'ai voulu le faire à la mano !)
     if(data != null){
      var newData = [];
       for(i = 0; i < data.length; i++){
        var bool = true;
        for(j = 0; j < data.length; j++){
          if(data[i] == newData[j]){
              bool = false;
          }
        }
        if(bool){
            newData[i] = data[i];
        }
       }
       return newData;
     }
  }
}
})
// Rien à voir mais durant l'entretien téléphonique je t'ai donné une "définition" un peu mauvaise d'une interface java selon moi, 
// alors qu'en cours on nous avait donné une image qui expliquait très bien l'utilité d'une interface. Du coup je voulais juste te
// préciser que selon moi, une interface était une sorte de contrat entre le dev front et back, c'est à dire que grâce à une interface,
// le dev front peut totalement coder son interface graphique sans que le backend soit implémenté, car l'interface contient toutes 
// les fonctions nécessaires à celle-ci. Je me sentais obligé de revenir là dessus parce que je me sentais hyper bête de ne pas avoir
// avoir pensé à te le dire comme ça alors que ça m'avait vraiment marqué et aidé à comprendre lorsque j'étais à l'IUT.