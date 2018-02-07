import Service from './service.js';
import './index.scss';
import './main.scss';

/*
  GetImage ==> Service.getImageItems(number)
*/

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('logo').src = './images/logo.svg';
  document.getElementById('submit').addEventListener("click", function () {
    const val = document.getElementById('amountImage').value;
    let result = document.getElementById('result');
    let form = document.getElementById('form');
    let container = document.getElementById("wrapper");

    result.innerHTML = "LOADING...";
    result.className = "LoadingText";
    form.className = "DivBlur";

    Service.getImageItems(val)
      .then( imgs => {
        result.innerHTML = "SUCCESS";
        result.className = "SuccessText";
        form.className = "";

        container.innerHTML = '';
        imgs.forEach( img => {
          var newImage = '<div class="card"><img src="'+ img.image + '"alt="'+ img.label +'" id='+ img.id +'  /><br>'+ img.label +' </div>';
          container.innerHTML += newImage;
        });
        console.log(imgs);
      })
      .catch( () => {
        result.innerHTML = "FAILED";
        result.className = "FailText";
        form.className = "";
      });
  });
  // code...
});
