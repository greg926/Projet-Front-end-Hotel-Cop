# Projet-Front-end-Hotel-Cop
Réalisation d'un site Front dans le cadre de ma formation "Développeur Intégrateur Web" au sein d'IFOCOP


<!DOCTYPE html>
<html lang="fr">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="author" content="Grégory et Menelik">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
    integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Cinzel&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
    integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">

  <!-- Date range picker CSS-->
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />

  <!-- CSS perso-->
  <link rel="stylesheet" type="text/css" href="css/index.css">
  <title> Accueil - HotelCop</title>
</head>

<body>


  <!--Menu -->
  <nav id="menu" class="row navbar navbar-expand-lg navbar-dark bg-light">
    <a class="navbar-brand" href="index.html"><img id="logo" src="logo/logo.png" alt="logogold" /></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="actus.html">Actualités</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="presentation.html">Présentation</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="chambre.html">Chambres</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="restaurant.html">Restaurant</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="spa.html">SPA</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="avis.html">Avis</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="acces.html">Accès</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="events.html">Évènements</a>
        </li>
      </ul>

      <span class="icon2"><a href="panier.html"><i class="fas fa-shopping-basket text-light"></i></a></span>
      <button type="button" class="btn btn-link langue col-xs-12"><img src="images/fr.png"
          alt="version française"></button>
      <button type="button" class="btn btn-link langue col-xs-12"><img src="images/en.png"
          alt="version anglaise"></button>
      <a class="btn btn-primary col-xs-12" href="#" role="button" id="book">Reservation</a>

      <form class="form-inline my-2 my-lg-0 d-none d-sm-block">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Rechercher">
          <div class="input-group-append">
            <button class="btn btn-outline-light my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></button>
          </div>
        </div>
      </form>
    </div>
  </nav>

  <!--Menu FIN-->

  <div class="container">
    <!--Slider -->
    <div id="slider" class="carousel slide row" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#slider" data-slide-to="0" class="active"></li>
        <li data-target="#slider" data-slide-to="1"></li>
        <li data-target="#slider" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100 slider-background img-fluid" src="images/hotelcop.jpg" alt="First slide">
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100 slider-background img-fluid" src="images/hotelcop2.jpg" alt="Second slide">
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100 slider-background img-fluid" src="images/paysage.jpg" alt="Third slide">
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
      </div>
    </div>
  </div>
  <!--Slider FIN-->


  <!--contenu -->
  <div class="container">
    <div class="row py-5">
      <blockquote class="col-12 blockquote text-center">
        <h1 class="mb-0">L’HOTELCOP : UN HÔTEL D’EXCEPTION A PARIS 8</h1>
        <footer class="blockquote-footer"><cite>“Votre résidence parisienne HôtelCop offre une vue imprenable sur la
            Tour Eiffel et tous les monuments célèbres de Paris."</cite></footer>
      </blockquote>
      <br>
      <blockquote class="col-12 blockquote text-center">
        <p>
          L’HôtelCop, idéalement situé dans le 8ème arrondissement de Paris entre l’avenue Montaigne,
          les Champs Elysées et l’avenue George V, offre de magnifiques chambres et suites spacieuses avec vues pour
          certaines sur la Tour Eiffel ou les toits parisiens.
        </p>
        <br>
        <br>
        <p>
          En plein cœur du triangle d’or de Paris, l’HôtelCop constitue le point de départ idéal pour découvrir la
          capitale.
          A proximité de cet hôtel 5 étoiles, se trouvent de nombreux intérêts et monuments touristiques comme le Grand
          Palais, l’arc de triomphe, le musée du Quai Branly ou la Tour Eiffel.
        </p>
      </blockquote>
      <br>
      <br>
      <br>
    </div>

    <div class="carte">
      <div class="carte_background row">
        <div class="col-md-4 col-xs-12 col-xs-first carte_text">
          <h3 class="italic"> UN RAFFINEMENT PARISIEN</h3>
          <br>
          <p>
            L'HôtelCop 5 étoiles, vous accueille dans une demeure historique de 45 chambres et 5 suites, entièrement
            revisitée par André Warhall 2019 et pour l'inauguration février 2020
          </p>
          <br>
          <br>
          <a href="reservation.html" class="gold">RESERVER</a>
        </div>
        <div class="col-md-7 col-xs-12 carte_pic">
          <img src="images/hall1.jpg" class="img-fluid" alt="">
        </div>
      </div>
    </div>



    <div class="carte">
      <div class="carte_background row">
        <div class="col-md-7 col-xs-12 col-xs-first carte_pic_inv">
          <img src="images/demo1.jpg" class="img-fluid" alt="">
        </div>

        <div class="col-md-4 col-xs-12 carte_text_inv">
          <h3 class="italic">AU COEUR DU TRIANGLE D'OR</h3>
          <br>
          <p>
            Situé au centre du 8ème arrondissement entre l'Avenue Montaigne, les Champs Elysées et l'Avenue George V,
            l'élégance parisienne s'exprime dans toute sa quintessence.
          </p>
          <br>
          <br>
          <a href="chambre.html" class="gold">EN SAVOIR PLUS</a>
        </div>
      </div>
    </div>


    <div class="carte">
      <div class="carte_background row">
        <div class="col-md-4 col-xs-12 col-xs-first carte_text">
          <h3 class="italic">SERVICE SUR-MESURE</h3>
          <br>
          <br>
          <p>
            Une maison sur la Rive Droite, où se reposer de Paris le temps d'un séjour sur mesure, d'un repas, d'un
            verre
            ou d'une projection. Le décor raffiné, la qualité du service, dont possibilité d'avoir une voiture avec un
            chauffeur, la localisation exceptionnelle de l'hôtel vous permettront de profiter pleinement de votre visite
            à
            Paris.
          </p>
          <br>
          <br>
          <a href="#" class="gold">EN SAVOIR PLUS</a>
        </div>
        <div class="col-md-7 col-xs-12 carte_pic">
          <img src="images/chauffeur.jpg" class="img-fluid" alt="">
        </div>
      </div>
    </div>

    <div class="carte">
      <div class="carte_background row">
        <div class="col-md-7 col-xs-12 carte_pic_inv">
          <img src="images/chambre/room_deluxe.jpg" class="img-fluid" alt="">
        </div>

        <div class="col-md-4 col-xs-12 col-xs-first carte_text_inv">
          <h3 class="italic">CHAMBRES & SUITES</h3>
          <br>
          <p>
            L'HôtelCop propose 45 chambres repartie en 4 catégorie : la chambre classique, la chambre Confort, la
            chambre
            Deluxe et nos Suites. Certaines de nos chambres s'adaptente pour les familles, en vous offrant des espaces
            jusqu'à 4 personnes.
            Certaines de nos suites disposent d'une terrase avec vue sur la Tour Eiffel et Paris.
          </p>
          <br>
          <br>
          <a href="chambres.html" class="gold">EN SAVOIR PLUS</a>
        </div>
      </div>
    </div>

    <div class="carte">
      <div class="carte_background row">
        <div class="col-md-4 col-xs-12 col-xs-first carte_text">
          <h3 class="italic">NOTRE RESTAURANT</h3>
          <br>
          <p>
            Poussez les portes de ce lieu discret à l'écart de l'effervescence des Champs-Elysées et plongez dans une
            ambiance feutrée et cosy.
            <br>
            Ayez le plaisir de découvrir notre carte du monde qui évolue à mesure des saisons & qui offre un choix des
            meilleures fondamentaux gastronomiques.
          </p>
          <br>
          <br>
          <a href="restaurant.html" class="gold">CARTE DU RESTAURANT</a>
        </div>
        <div class="col-md-7 col-xs-12 carte_pic">
          <img src="img/resto1.jpg" class="img-fluid" alt="">
        </div>
      </div>
      <br>
    </div>

    <div class="carte">
      <div class="carte_background row">
        <div class="col-md-7 col-xs-12 carte_pic_inv">
          <img src="images/spa.jpg" class="img-fluid" alt="">
        </div>

        <br>

        <div class="col-md-4 col-xs-12 col-xs-first carte_text_inv">
          <h3 class="italic">NOTRE SPA</h3>
          <br>
          
            Un instant de détente avec un soin aux huiles essentielles après un long voyage...
            <hr>
            Le SPA d'HôtelCop a un petit quelque chose en plus. Sans doute parce nous avons choisi de confier votre
            détente aux plus grands noms du bien-être et de la beauté.
            <br>
            Pensez à réserver vos séance de SPA en même temps que votre séjour
          
          <br>
          <hr>
          <a href="spa.html" class="gold">EN SAVOIR PLUS</a>
        </div>
      </div>
    </div>
  </div>

  <br>

  <!--contenu fin-->


  <!--FOOTER-->
  <div id="footer" class="row">
    <div class="col-md-3 col-xs-12">
      <a id="logo_footer" href="index.html"><img src="logo/logo.png" alt="" /></a>
      <br>
      1 RUE AVENUE MONTAIGNE,75008 PARIS, FRANCE
      <br> +33 (0)1 70 98 78 88
      <div id="copyright"> ©Hotelcop, Paris 2020</div>
    </div>
    <div class="col-md-3 col-xs-12 vcenter">
      <div id="follow_us">
        SUIVEZ NOUS <br />
        <br />
        <span class="icons"><a href="https://fr-fr.facebook.com/HotelMarignan" target="_blank"><i
              class="fab fa-facebook-f"></i></a></span>
        <span class="icons"><a href="https://www.instagram.com/hotels.barriere/?hl=fr" target="_blank"><i
              class="fab fa-instagram"></i></a></span>
        <span class="icons"><a href="https://twitter.com/ghpalaisroyal?lang=fr" target="_blank"> <i
              class="fab fa-twitter"></i></a></span>
        <span class="icons"><a href="https://www.youtube.com/hilton" target="_blank"> <i
              class="fab fa-youtube"></i></a></span>
      </div>
    </div>
    <div class="col-md-3 col-xs-12 vcenter">
      <div id="newsletter">
        NEWSLETTER<br><br>
        <form action="nl.html">
          <div class="input-group flex-nowrap">
            <div class="input-group-prepend">
              <span class="input-group-text" id="addon-wrapping">@</span>
            </div>
            <input type="text" class="form-control" placeholder="Saisissez votre email" aria-label="Email"
              aria-describedby="addon-wrapping">
            <a class="btn btn-primary col-xs-12" href="nl.html" role="button" id="valide">OK</a>
          </div>
        </form>
        <p class="text2_inscription_footer">En cliquant sur "OK", vous acceptez de recevoir
          des informations sur les nouvelles, les événements, les promotions et les services de l'hôtel.</p>
      </div>
    </div>
    <div class="col-md-3 col-xs-12 vcenter">
      <div id="footer_rest">
        <div class="row">
          <a href="contact.html" class="col-md-12 col-lg-6 footer_end">CONTACTEZ-NOUS</a>
          <a href="recrutement.html" class="col-md-12 col-lg-6 footer_end">RECRUTEMENT</a>
        </div>
        <hr>
        <div class="row">
          <a href="presse.html" class="col-md-12 col-lg-6 footer_end">PRESSE</a>
          <a href="mentionslegales.html" class="col-md-12 col-lg-6 footer_end">MENTIONS LEGALES</a>
        </div>
        <hr>
        <div class="row">
          <a href="CGV.html" class="col-xs-6 col-md-12 col-lg-6 footer_end">CGV</a>
          <a href="sitemap.html" class="col-md-12 col-lg-6 footer_end">PLAN DU SITE</a> <br>
          <a href="#" class="col-xs-6 col-md-12 col-lg-6 footer_end vcenter"
            onclick="window.print(); return false;">Imprimer la page</a>
        </div>
      </div>
    </div>
  </div>


  <div id="scrollUp">
    <a href="#top"><img src="images/bouton_retour.png" alt="retour accueil" /></a>
  </div>
  
  <!--FOOTER FIN-->

  <form action="reservation.html" method="get" id="send_dates">
    <input type="hidden" name="starting_date" id="starting_date">
    <input type="hidden" name="ending_date" id="ending_date">
  </form>


  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
    integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous">
  </script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
    integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous">
  </script>

  <!-- Liens JS pour le calendrier (Datarangepicker) -->
  <script src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>


  <script src="js/index.js"></script>

</body>

</html>
