/* const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".picarea");

function addNewDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function(response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute doggo";
      doggos.appendChild(img);
    });
}


document.querySelector(".dog-selector").addEventListener("click", addNewDoggo);

*/

$(document).ready(function() {
    function getDog(){var selectedDog=$(".dog-selector option:selected").val();dogURL=selectedDog.replace(/-/g,'/');$.getJSON("https://dog.ceo/api/breed/"+dogURL+"/images/random",function(result){$(".picarea").append("<img src='"+result.message+"'>");});}
function loadDogs(){$.getJSON("https://dog.ceo/api/breeds/list/all",function(result){var breeds=result.message;firstDog=Object.keys(breeds)[0];$.each(breeds,function(dog,breed)

{if(breeds[dog].length>=1){for(i=0;i>breeds[dog].length;i++){$(".dog-selector").append('<option value="'+dog+'-'+breeds[dog][i]+'">'+breeds[dog][i]+' '+dog+'</option>');}}
else if(breeds[dog].length<=1){$(".dog-selector").append('<option value="'+dog+'">'+dog+'</option>');}});$.getJSON("https://dog.ceo/api/breed/"+firstDog+"/images/random",function(result){$(".picarea").append("<img src='"+result.message+"'>");});});}
$(".dog-selector").change(function(){$(".dog-selector option:selected").each(function(){getDog();});});$(".add-doggo").click(function(){getDog();});$(document).ready(function(){loadDogs();});

$('.clear').click(function() {
    location.reload();
});



});



