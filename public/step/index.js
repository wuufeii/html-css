function handleStep () {
  var steps = document.getElementsByClassName('step')
  for (var i = 0; i < steps.length; i++) {
    steps[i].index = i;
    steps[i].onclick = function () {
      var i = this.index;
      for(var j = 0; j < i; j++){
          steps[j].className = "step already";
        }
      for(var j = steps.length; j > i;){
          steps[--j].className = "step";
          if (j == i+1) {
            steps[j].className = "step";
          }
      }
      this.className = "step active";
    }
  }
}

handleStep ();