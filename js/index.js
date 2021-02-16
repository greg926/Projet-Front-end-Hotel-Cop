

// Propriétés du slider
$('.carousel').carousel({
  interval: 2500,
  wrap: true
})

// Propriétés du calendier
$('#book').daterangepicker({
  opens: 'left',
  locale: {
         format: "DD/MM/YYYY",
         separator: " au ",
         applyLabel: "Ok",
         cancelLabel: "Annuler",
         fromLabel: "Du",
         toLabel: "au",
         customRangeLabel: "Custom",
         daysOfWeek: [
             "Dim",
             "Lun",
             "Mar",
             "Mer",
             "Jeu",
             "Ven",
             "Sam"
         ],
         monthNames: [
             "Janvier",
             "Fevrier",
             "Mars",
             "Avril",
             "Mai",
             "Juin",
             "Juillet",
             "Août",
             "Septembre",
             "Octobre",
             "Novembre",
             "Decembre"
         ],
         firstDay: 1
     },
  startDate: moment(),
  endDate: moment().add(1, 'week')
});

$('#book').on('apply.daterangepicker', function(ev, picker) {
  $('#starting_date').val(picker.startDate.format('DD/MM/YYYY'));
  $('#ending_date').val(picker.endDate.format('DD/MM/YYYY'));
  $('#send_dates').submit();
});


jQuery(function(){
  $(function () {
      $(window).scroll(function () { //Fonction appelée quand on descend la page
          if ($(this).scrollTop() > 500) {  // Quand on est à 500pixels du haut de page,
              $('#scrollUp').css('right','20px'); // Replace à 30pixels de la droite l'image
          } else { 
              $('#scrollUp').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
          }
      });
  });
});



