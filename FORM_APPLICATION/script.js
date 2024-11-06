document.getElementById("downloadBtn").addEventListener("click", function() {
    // Replace 'path_to_your_file' with the path to your file
    var filePath = 'path_to_your_file';
    downloadFile(filePath);
});

function downloadFile(path) {
    var link = document.createElement('a');
    link.href = path;
    link.download = path.split('/').pop(); // Extracts filename from URL for the downloaded file
    link.click();
}