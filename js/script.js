//Get modal element
var modal = document.getElementById('simpleModal');
//Get open modal button
var modalBtn = document.getElementById('modalBtn');
//Get close butoon
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for open click
modalBtn.addEventListener('click', openModal);

//Liste for close click
closeBtn.addEventListener('click', closeModal);

//Listen for outside click
window.addEventListener('click', outsideClick);

//Function to open modal
function openModal(){
    modal.style.display = 'block';
}
//stop video
function stopVideo(modal) {
    var currentIframe = modal.querySelector('.modal-content > iframe');
    currentIframe.src = currentIframe.src;
  }     
//Function for close modal
function closeModal(){
    stopVideo(modal);
    modal.style.display = 'none'; 
    
}

//Function for close modal if outside click
function outsideClick(e){
    if (e.target == modal){
        stopVideo(modal);
    modal.style.display = 'none';
    }
}