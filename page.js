// Send form data to backend server
const formData = {
    recruiter: recruiter,
    username: username,
    email: email,
    password: password
  };
  
  // Assuming the server response includes a "userType" property that indicates whether the user is a candidate or a recruiter
  // In this example, we're redirecting to "page.html" for candidates and "index.html" for recruiters
  const serverResponse = {
    userType: "candidate"
  };
  
  if (serverResponse.userType === "candidate") {
    window.location.href = "candidate.html";
  } else if (serverResponse.userType === "recruiter") {
    window.location.href = "recruiter.html";
  }
