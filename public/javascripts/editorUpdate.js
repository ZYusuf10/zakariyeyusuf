
const ImageTool = window.ImageTool;

var editor = new EditorJS({
  /**
   * Id of Element that should contain Editor instance
   */
  holder: 'editorjs',
  /** 
   * Available Tools list. 
   * Pass Tool's class or Settings object for each Tool you want to use 
   */ 
  tools: { 
    header: Header, 
    code: CodeTool,
    list: List,
    table: {
      class: Table,
    },
    image: {
      class: ImageTool,
      config: {
        endpoints: {
          byFile: 'http://localhost:3000/uploadFile', // Your backend file uploader endpoint
          byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
        }
      },
      raw: RawTool,
    }
  }, 
   /**
   * Previously saved data that should be rendered: usefull for updating.
   */
  data: JSON.parse(document.querySelector('#record').textContent),
});

/* save book reflection */
function save(){
  editor.save().then((outputData) => {
    console.log('Article data: ', outputData)
    //send editor data 
    // Creating a XHR object 
    let xhr = new XMLHttpRequest(); 
    let url = 'http://localhost:3000/editorData'; 
    // open a connection 
    xhr.open("POST", url, true); 
    // Set the request header i.e. which type of content you are sending 
    xhr.setRequestHeader("Content-Type", "application/json"); 
    // Create a state change callback 
    
    // Converting JSON data to string 
    var data = JSON.stringify(outputData); 
    // Sending data with the request 
    xhr.send(data); 
  }).catch((error) => {
    console.log('Saving failed: ', error)
  });
}

function updateJS(){
  editor.save().then((outputData) => {
    console.log('Article data: ', outputData)
    //send editor data 
    // Creating a XHR object 
    let xhr = new XMLHttpRequest(); 
    let url = 'http://localhost:3000/editorDataUpdateJS/'+document.querySelector('#id').textContent.substring(1,document.querySelector('#id').textContent.length-1); 
    // open a connection 
    xhr.open("POST", url, true); 
    // Set the request header i.e. which type of content you are sending 
    xhr.setRequestHeader("Content-Type", "application/json"); 
    // Create a state change callback 
    
    // Converting JSON data to string 
    var data = JSON.stringify(outputData); 
    // Sending data with the request 
    xhr.send(data); 
    alert("updated")
  }).catch((error) => {
    console.log('update failed: ', error)
  });
  
}
/* save technical record JS */
function saveJS(){
  editor.save().then((outputData) => {
    console.log('Article data: ', outputData)
    //send editor data 
    // Creating a XHR object 
    let xhr = new XMLHttpRequest(); 
    let url = 'http://localhost:3000/editorDataJS'; 
    // open a connection 
    xhr.open("POST", url, true); 
    // Set the request header i.e. which type of content you are sending 
    xhr.setRequestHeader("Content-Type", "application/json"); 
    // Create a state change callback 
    
    // Converting JSON data to string 
    var data = JSON.stringify(outputData); 
    // Sending data with the request 
    xhr.send(data); 
  }).catch((error) => {
    console.log('Saving failed: ', error)
  });
}