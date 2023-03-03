// Get the candidate name from the session or local storage
let candidateName = 'John Doe'; // Replace with actual candidate name
document.getElementById('candidate-name').textContent = candidateName;

// Get the candidate age from the session or local storage
let candidateAge = 30; // Replace with actual candidate age
document.getElementById('candidate-age').textContent = candidateAge;

// Add event listener to profile picture input field
let profilePicInput = document.getElementById('profile-pic-input');
profilePicInput.addEventListener('change', showProfilePic);

// Function to display the selected profile picture
function showProfilePic(event) {
  let profilePic = event.target.files[0];
  let profilePicUrl = URL.createObjectURL(profilePic);
  document.getElementById('profile-pic').src = profilePicUrl;
}

// Add event listener to resume input field
let resumeInput = document.getElementById('resume-input');
resumeInput.addEventListener('change', uploadResume);

// Function to upload the selected resume
function uploadResume(event) {
  let resume = event.target.files[0];
  // Upload the resume to the server using AJAX or fetch API
  // Display the name of the uploaded resume
  document.getElementById('resume-name').textContent = resume.name;
  // Enable the download button for the uploaded resume
  let downloadButton = document.getElementById('download-button');
  downloadButton.href = URL.createObjectURL(resume);
  downloadButton.download = resume.name;
}

// Add event listener to replace resume button
let replaceResumeButton = document.getElementById('replace-resume-button');
replaceResumeButton.addEventListener('click', replaceResume);

// Function to replace the uploaded resume with a new one
function replaceResume(event) {
  let resume = document.getElementById('resume-input').files[0];
  // Replace the uploaded resume on the server using AJAX or fetch API
  // Display the name of the new resume
  document.getElementById('resume-name').textContent = resume.name;
  // Enable the download button for the new resume
  let downloadButton = document.getElementById('download-button');
  downloadButton.href = URL.createObjectURL(resume);
  downloadButton.download = resume.name;
}

