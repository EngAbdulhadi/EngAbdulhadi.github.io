function downloadCV() {
    const link = document.createElement('a');
    link.href = '../assets/resume.pdf'; 
    link.download = 'AbdulhadiCV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}