angular.module('store', [])
  store.controller('CartController', ['$scope', function ($scope) {
    //JSON PRODUITS
    $scope.products = [
        {"prix":"45.75", "description":"Il est rock! voici le nain de jardin accompagné de sa Harley","marque":"Nain Bikeur", "image":"assets/img/nain-rockeur.png"},
        {"prix":"29.95", "description":"Besoin de magie? Voici un nain Mage!", "marque":"Nain Mage", "image":"assets/img/nain-sage.png"},
        {"prix":"20.00", "description":"Adepte du bronzage, voici le nain de plage", "marque":"Nain Plage", "image":"assets/img/nain-plage.png"},
        {"prix":"26.89", "description":"Envie d'une grillade? Voici le nain barbecue", "marque":"Nain Bbq", "image":"assets/img/nain-barbecue.png"},
        {"prix":"20.09", "description":"Fan de la série Game of throne? Voici le nain en version Game of Gnome", "qte":"15", "marque":"Nain Game of Gnome", "image":"assets/img/nain-badass.png"},
        {"prix":"29.95", "description":"Une peu stressé? Il vous faut le nain zen!", "marque":"Nain zen", "image":"assets/img/nain-zen.png"}
    ];

    //DECLARATION DU TABLEAU
        //CONTENANT LES PRODUITS DU PANIER
        $scope.itemsCart = [];

        //TOGGLE AFFICHAGE PANIER
        $scope.isVisible = false;
        $scope.toggleCart = function() {
            $scope.isVisible = $scope.isVisible ? false : true; // if(isVible == true) isVisble = false; else isVisble = true;
        }


        //AJOUTER UN PRODUIT AU PANIER
        $scope.qty = 1;
        $scope.addProductToCart = function (product, qty) {
            //On set la qty
            product.qty = qty;

            //INDEX OF RETOURNE L INDEX DE L ELEMENT RECHERCHER DANS LE TABLEAU
            //SI IL EXISTE PAS IL RETOURNE -1
            //ON VERIFIE QUE LE PRODUIT N EXISTE PAS DEJA
            if ($scope.itemsCart.indexOf(product) === -1)
                $scope.itemsCart.push(product);
        }

        //SUPPRIMER UN PRODUIT AU PANIER
        $scope.removeProductToCart = function ($index){
          $scope.itemsCart.splice($index,1);
        }
        //FONCTION TOTAL
        $scope.total = 0;

      	      	}

    }]);
