
const jobs = [
    { name: "Amazon", jobTitle: "IT Support Engineer", responsibilities: "Customer support, Network Engineer, Systems Engineer, Project Management" },
    { name: "Webb Institute", jobTitle: "Assistant Director of IT", responsibilities: "Network Engineer, Systems Engineer" },
    { name: "Baldwin Schools", jobTitle: "IT Consultant", responsibilities: "Customer support, Security systems, Hardware installation" },
  ];

  for(let i = 0; i < jobs.length; i++) {
      let h3 = jobs[i].getElementsByTagName("h3")[0];
      let h4 = jobs[i].getElementsByTagName("h4")[0];
      let ul = jobs[i].getElementsByTagName("ul")[0];
      h3.innerText = h3.innerText.replace("Name of job", jobs[i].name)
      h4.innerText = h4.innerText.replace("Title or position", jobs[i].jobTitle)
      ul.innerText = ul.innerText.replace("task", jobs[i].responsibilities)
  }