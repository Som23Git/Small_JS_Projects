// Get the drop zone element from html code
const dropZone = document.getElementById('dropZone');

// Add event listeners
dropZone.addEventListener('dragover', handleDragOver);
dropZone.addEventListener('dragleave', handleDragLeave);
dropZone.addEventListener('drop', handleDrop);

// Define event handlers
function handleDragOver(event) {
  event.preventDefault();
  event.stopPropagation();
  dropZone.classList.add('active');
};

function handleDragLeave(event) {
  event.preventDefault();
  event.stopPropagation();
  dropZone.classList.remove('active');
};

function handleDrop(event) {
    // Prevent default behavior (opening file in browser)
    event.preventDefault();
  
    // Get the file from the event
    const file = event.dataTransfer.files[0];
  
    // Check if the file is a valid XLS(X) or CSV file
    if (/(\.xls|\.xlsx|\.csv)$/i.test(file.name)) {
      // Read the file as a binary string
      const reader = new FileReader();
      reader.onload = function(event) {
        console.log(`file added successfully ${file}`)
        handleReaderLoad(event, file);
      };
      reader.readAsBinaryString(file);
    } else {
      alert('Please drop a valid Excel or CSV file.');
    };
  };
  
  function handleReaderLoad(event, file) {
    // Get the file contents as a binary string
    const data = event.target.result;
  
    // Convert the file contents to JSON format
    const workbook = XLSX.read(data, { type: 'binary' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
  
    // Create a downloadable JSON file
    const jsonBlob = new Blob([JSON.stringify(jsonData, null, 2)], { type: 'application/json' });
    const jsonUrl = URL.createObjectURL(jsonBlob);

    // Update the drop zone message to show the file name and the download link
    const dropZone = document.getElementById('dropZone');
    dropZone.innerHTML = `File '${file.name}' has been converted to JSON. `;
    if (file) {
      const link = document.createElement('a');
      link.style.background = '#3c78d8';
      link.innerText = "Download JSON";
      link.href = jsonUrl;
      link.download = file.name.replace(/\.(xls|xlsx|csv)$/i, '.json');
      link.textContent = 'Download JSON';
      link.className = 'download-link';
      dropZone.appendChild(link);
  };
  };