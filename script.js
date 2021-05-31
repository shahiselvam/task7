fetch("https://restcountries.eu/rest/v2/all")

  .then(function (data) {
   
    return data.json();
  })
  .then(function (result) {
    populate(result);
  })
  .catch(function (error) {
    console.log(error);
  });

  function populate(values){
   debugger
   let container = document.createElement("div");
   container.setAttribute('class' ,'container'); 
   
   let row = document.createElement("div");
   row.setAttribute("class" , "row");


   values.forEach((data) => {
    let column = createcommenelement("div", "col-sm-12 col-md-6 col-lg-3 col-xl-4");
    let card = createcommenelement("div", "card");
    
    let image = createcommenelement("img", "card-img-top");
    image.src = data.flag;

    let cardbody = createcommenelement("div", "card-body");
    cardbody.innerText = data.name;

    let h5tag = createcommenelement("h5", "card-title");
    h5tag.innerText = data.region;
 
     let ptag = createcommenelement("h5", "card-text");
     ptag.innerText = data.timezones;

    cardbody.append(h5tag,ptag);
    card.append(image, cardbody);
    column.append(card)
    row.append(column);
    container.append(row);
    document.body.append(container);
   });

  }


  function createcommenelement(element, elementclass=" ")
  {
      debugger
   let  createelement = document.createElement(element);
   createelement.setAttribute('class', elementclass)
   return  createelement;

  }