angular.module('pubController', [])
  .controller('booksCtrl', function($scope, $anchorScroll, $location, books, bigBooks) {
    books.list(function (books) {
      $scope.books = books; 
    });

    bigBooks.list(function (books) {
      $scope.bigBooks = books; 
    });
    
    $scope.changeAnchor = function (anchor) {
    	$location.hash(anchor);
        $anchorScroll();
    }
    
    $scope.ramPuniyani = [ 
        { img : "./img/book/nocover.jpg",
          name: "Nirdoshannaa Saja Nako (Marathi)",
            download:"./books/Article-Ram-Puniyani-Nirdoshannaa-Saja-Nako-marathi-31aug15.pdf",
            discription:"Article about victims of false cases.", 
            },
            { img : "./img/book/nocover.jpg",
          name: "Islami Dahshatwad Paddyamagche Rajkaran (Marathi)",
            download:"./books/Islami_Dahshatwad_Paddyamagche-Rajkaran.pdf",
            discription:"Article about the politics behind terrorism", 
            },
            { img : "./img/book/nocover.jpg",
          name: "Killing a Rationalist",
            download:"./books/Killing_a_Rationalist.pdf",
            discription:"Article about the murders of rationalists like Dr. Dabholkar.", 
            },
            { img : "./img/book/nocover.jpg",
          name: "Controlling Thoughts and Food Habits - Growing Intolerance (English)",
            download:"./books/Puniyani_Food_Habits_Freedom_Eng.pdf",
            discription:"Article about the politics of food habits - beef-ban, meat-ban etc.", 
            },
            { img : "./img/book/nocover.jpg",
          name: "Controlling Thoughts and Food Habits - Growing Intolerance (Hindi)",
            download:"./books/Puniyani_Food_Habits_Freedom.pdf",
            discription:"Article about the politics of food habits - beef-ban, meat-ban etc.", 
            }
            ];
            
            
   $scope.epubs = [
  { "img" : "img/book/govtpoor.bmp.jpg",
    "name" : "Is the Government Really Poor?",
    "download" : "./books/IsTheGovLokayat.epub",
    "discription" : "A detailed exposure of how the government is cutting expenditure on the public, especially the poor and transferring them to the rich."  
  },
  { "img" : "img/book/FDIretailEng.jpg",
    "name" : "Fight FDI in Retail",
    "download" : "./books/FDI_ENG.epub",
    "discription" : "FDI in retail sector will bring disastrous changes into country. This book talks about effects of multinationals such as walmart on local economy."
  },
  { "img" : "img/book/iradeeng.bmp.jpg",
    "name" : "Let's Rise From the Shadows",
    "download" : "./books/RiseFromShadowsLokayat.epub",
    "discription" : "It comprises of nine articles on how women are stereotyped in society.It questions the unjust practices conducted under the name of traditions, rituals and also critiques the role of media in promoting women as a commodity."
  },
  { "img" : "img/book/licmar.bmp.jpg",
    "name" : "Public sector insuarence on sale!",
    "download" : "./books/LICEng.epub",
    "discription" : "The government pushed through a bill in the Indian Parliament to allow FDI upto 49% in the insurance sector. The government is claiming that it will lead to increased insurance penetration, and will lead to greater mobilisation of domestic savings for investment in the infrastructure sector. Will FDI indeed benefit the Indian economy?"
  }
];

   $scope.sulabhaBrahme = [ 
        { img : "./img/book/shetkari.jpg",
          name: "Shetkari Jatyat (Marathi)",
            download:"./books/book-SB-shetkari-jatyaat.pdf",
            discription:"A book exploring the economic and other causes of farmers suicides in India.",
            },
        { img : "img/book/kokan.jpg",
          name: "Kokancha Vikas ki Vinash (Marathi)",
            download:"./books/book-Kokanacha_VIkas_kee_vinash_Unicode.pdf",
            discription:"An eco-centric and people-centric analysis of the multiple power, mining, commercial and infrastructure projects that are coming up in the fertile, biodiverse and beautiful Kokan coastline",
            },
        { img : "./img/book/nocover.jpg",
          name: "Khare Dahshatvadi Kon ? (Marathi)",
            download:"./books/book-SB-khare-dahashatvadi-kon-Unicode.pdf",
            discription:"A book on the causes of terrorism and how to uproot it from the world.",
            },
        { img : "img/book/cuba.jpg",
          name: "Cubacha Zunzar Kranti-Ladha (Marathi)",
            download:"./books/book-SB-kubaachaa-jhunjhaar-krantiladhaa-unicode.pdf",
            discription:"A concise history of he Cuban revolutionary struggle.",
            }
            ];
});