// Country list
const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
  ];

  const country=document.querySelector("input");
  country.addEventListener("input",e=>{
    const auto_suggestList=document.getElementById("suggestions");
    auto_suggestList.innerHTML="";
    
    for(const i in countryList){
      if (i.startsWith(country.value)){
        const divElement=document.createElement("div");
        divElement.classList.add("suggestions");    
        divElement.addEventListener("click",e=>{
          country.value=e.target.textContent; 
          divElement.appendChild(country.value);
          auto_suggestList.appendChild(divElement);
        });
    
      };
    };
    
  }); 