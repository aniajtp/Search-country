var url = 'https://restcountries.eu/rest/v1/name/';//-adres url
var countriesList = $('#countries');//-lista krajów

$('#search').click(searchCountries);//-podpięcie click pod przycisk 

function searchCountries() {
  var countryName = $('#country-name').val();
  if(!countryName.length) countryName = 'Poland';
  $.ajax({
    url: url + countryName,
    method: 'GET',
    success: showCountriesList
  });
}

function showCountriesList(resp) {
  countriesList.empty();
  resp.forEach(function(item) {
      $('<li>').text(item.name).appendTo(countriesList);
  });
}

