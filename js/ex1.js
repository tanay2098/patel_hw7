
// Character list. Each house has a name and a code
const houses = [
    {
      code: "ST",
      name: "Stark"
    },
    {
      code: "LA",
      name: "Lannister"
    },
    {
      code: "BA",
      name: "Baratheon"
    },
    {
      code: "TA",
      name: "Targaryen"
    }
  ];
  

  
  // Return an array of characters belonging to a house
  const getCharacters = houseCode => {
    switch (houseCode) {
      case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
      case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
      case "BA":
        return ["Robert", "Stannis", "Renly"];
      case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
      default:
        return []; // Empty array
    }
  };

  window.addEventListener("load",e=>{
    //DropDown List creation
      const houseList=document.getElementById("house");
      houseList.focus();
      for(const i of houses){
        var optionElement=document.createElement("option");
        optionElement.value=i.code;
        optionElement.textContent=i.name;
        houseList.appendChild(optionElement);
      };

      //Change event for when user selects the option.
      houseList.addEventListener("change",e=>{
        const show_characters=getCharacters(e.target.value);
        const charElement=document.getElementById("characters");
        charElement.innerHTML="";
       for(const j of show_characters){
        var listElement=document.createElement("li");
          listElement.textContent=j;
          charElement.appendChild(listElement);
       };
          
        });
    });

    

    

    
  
  