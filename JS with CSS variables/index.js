const inputs = document.querySelectorAll(".controls input")


inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));

function handleUpdate(){
  const input = document.querySelector(`input[name = "${this.name}"]`) ;
  const suffix = input.dataset.sizing;
  const value = input.value;


  if(suffix)  document.documentElement.style.setProperty('--'+ this.name, value + suffix);

  else document.documentElement.style.setProperty('--'+ this.name, value);

}
