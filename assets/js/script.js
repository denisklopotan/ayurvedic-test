document.getElementById('test-id').addEventListener('submit', function(event){
event.preventDefault();
  
  var vatascore = 0;
  var pittascore = 0;
  var kaphascore = 0;
  
  var choices = document.getElementsByTagName('input');
  for (i=0; i<choices.length; i++) {
    if (choices[i].checked) {
      if (choices[i].value == 'vata') {
          vatascore = vatascore + 1;
      }
      if (choices[i].value == 'pitta') {
          pittascore = pittascore + 1;
      }
      if (choices[i].value == 'kapha') {
          kaphascore = kaphascore + 1;
      }
    }
  }
let result = document.getElementById('results');
result.innerHTML = "VATA: " + vatascore + ", PITTA: " + pittascore + ", KAPHA: " + kaphascore;
});