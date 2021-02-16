var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

$('#Starting_date').daterangepicker({
  singleDatePicker: true,
  showDropdowns: true,
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
  startDate: getUrlParameter('starting_date')
});

$('#Ending_date').daterangepicker({
  singleDatePicker: true,
  showDropdowns: true,
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
  startDate: getUrlParameter('ending_date')
});
