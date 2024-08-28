

async function generateForm(){

    let displayDiv = document.getElementById('display')

    const here = document.createElement('div');
    here.innerText ='HERE';
   
    // const label = document.createElement('label')
    // label.innerText('Image')
    const imageInput = document.createElement('input');
    imageInput.id ="imageInput"
    imageInput.type='file'
    imageInput.accept="image/*"
    // displayDiv.appendChild(label)
    displayDiv.appendChild(imageInput)


    
    // imageInput.addEventListener('change', (event) => {
    //   const selectedFile = event.target.files[0];
    //   if (selectedFile)   
    //  {
    //     // Handle the selected file (e.g., display it, upload it, etc.)
    //     const reader = new FileReader();
    //     reader.onload = function(event) {
    //       // Handle the image data (e.g., display it in an image element)
    //       const imageElement = document.getElementById('imagePreview');
    //       imageElement.src = event.target.result;
    //     };
    //     reader.readAsDataURL(selectedFile);
    //   }
    // });
}

