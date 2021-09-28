function addNewTechSkill() {
  let newNode = document.createElement("input");
  newNode.classList.add("form-control");
  newNode.classList.add("mt-2");
  newNode.classList.add("techSkillsField");
  newNode.setAttribute("placeholder", "C/C++/Java/etc");
  let techSkillButtonOb = document.getElementById("techSkillButton");
  let technicalDivOb = document.getElementById("techSkillsDiv");

  technicalDivOb.insertBefore(newNode, techSkillButtonOb);
}

function addNewStrength() {
  let newNode = document.createElement("input");
  newNode.classList.add("form-control");
  newNode.classList.add("mt-2");
  newNode.classList.add("strengthsField");
  newNode.setAttribute("placeholder", "Hardworking");
  let strengthsButtonOb = document.getElementById("strengthButton");
  let strengthsDivOb = document.getElementById("strengthsDiv");

  strengthsDivOb.insertBefore(newNode, strengthsButtonOb);
}


function generateResume() {

    document.getElementById("nameT").innerHTML = document.getElementById("nameField").value;

    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    document.getElementById("phT").innerHTML = document.getElementById("phnField").value;

    document.getElementById("emailT").innerHTML = document.getElementById("mailField").value;

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    document.getElementById("emailT").innerHTML = document.getElementById("mailField").value;

    document.getElementById("expT").innerHTML = document.getElementById("expField").value;

    document.getElementById("declarationT").innerHTML = document.getElementById("declarationField").value;


    let techSkillsss = document.getElementsByClassName("techSkillsField");

    let str = "";

    for(let e of techSkillsss)
    {
      str = str + `<li> ${e.value} </li>` ;
    }

    document.getElementById("techSkillsT").innerHTML = str;

    let strengthsob = document.getElementsByClassName("strengthsField")

    let str1 = "";

    for(let e of strengthsob)
    {
      str1 = str1 + `<li> ${e.value} </li>` ;
    }

    document.getElementById("strengthsT").innerHTML = str1;
}
