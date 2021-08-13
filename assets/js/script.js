// Get Form Node
document.getElementById('test-id').addEventListener('submit', function (event) {
  event.preventDefault();

  // Score
  var vatascore = 0;
  var pittascore = 0;
  var kaphascore = 0;

  // Score Wrapper
  let result = document.getElementById('results');

  // Nodes input list
  var choices = document.getElementsByTagName('input');

  // Check input fields
  for (let i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      if (choices[i].value === 'vata') {
        vatascore = vatascore + 1;
      }
      if (choices[i].value === 'pitta') {
        pittascore = pittascore + 1;
      }
      if (choices[i].value === 'kapha') {
        kaphascore = kaphascore + 1;
      }
      // Print results
      result.innerHTML = "VATA: " + vatascore + ", PITTA: " + pittascore + ", KAPHA: " + kaphascore;
    }
  }
});