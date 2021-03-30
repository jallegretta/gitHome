
const jobs = [
    { name: "Amazon", jobTitle: "IT Support Engineer", responsibilities: "Customer support, Network Engineer, Systems Engineer, Project Management" },
    { name: "Webb Institute", jobTitle: "Assistant Director of IT", responsibilities: "Network Engineer, Systems Engineer" },
    { name: "Baldwin Schools", jobTitle: "IT Consultant", responsibilities: "Customer support, Security systems, Hardware installation" },
  ];

let containerWork = document.getElementsByClassName('container-work')[0];

function createCardFromJob(job){
    card = document.createElement('div')
    card.innerHtml = 
`   <h3>${job.name}</h3>
    <h4>${job.jobTitle}</h4>
    <h5>Responsibilities</h5>
    <ul></ul>
`
ul = card.getElementsByTagName('ul')[0];
for (i = 0; i < job.responsibilities.length; i++) {
    li = document.createElement('li')
    li.innerText = job.responsibilities[i]
    ul.appendChild(li);
    }
    return card
}

for (let i = 0; i < jobs.length; i++){
    card = createCardFromJob(jobs[i]);
    containerWork.appendChild(card);
}