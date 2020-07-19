// Gets form data on submit
let onClick = () => {
  // Toggle loading
  btnToggle();

  // get category
  let selected = document.getElementById("category");
  let category = selected.options[selected.selectedIndex].value;

  // get obj && lower case it and put _ between words
  let old = document.getElementById("obj").value;

  let obj = old.toLowerCase().split(" ").join("_");

  // get information
  let url = `https://acnhapi.com/v1a/${category}/${obj}`;
  getData(url, old.charAt(0).toUpperCase() + old.slice(1)).then((res) =>
    createData(category, res)
  );
};

// Get data from API
let getData = async (url, item) => {
  let obj = [];

  clean();

  await fetch(url)
    .then((res) => (res.status != 404 ? res.json() : (res = "fail")))
    .then((data) => (data != "fail" ? obj.push(data) : obj.push("fail")));

  obj.push(item);
  return obj;
};

// Toggle loading submit button
let btnToggle = () => {
  // check the id btnDiv classlist for notLoading ? normal button : loading button;
  let btnDiv = document.getElementById("btnDiv");
  if (btnDiv.classList.contains("notLoading")) {
    btnDiv.classList.remove("notLoading");
    let html =
      '<button class="btn btn-light fontColor" type="button" style="background-color: #60bdd5 !important; disabled>';
    html += "<span";
    html += 'class="spinner-border spinner-border-sm" ';
    html += 'role="status" ';
    html += 'aria-hidden="true" ';
    html += "></span> ";
    html += "Loading... ";
    html += "</button>";

    btnDiv.innerHTML = html;
  } else {
    btnDiv.classList.add("notLoading");
    let html =
      '<button type="submit" onclick="onClick()" class="btn btn-light fontColor" style="background-color: #60bdd5 !important;">';
    html += "Submit";
    html += "</button>";

    btnDiv.innerHTML = html;
  }
};

// Create objs with API data and put it on screen
let createData = (category, data) => {
  // create obj on screen edit depending on category
  let determine = typeof data[0] !== "undefined" ? "" : data[0];

  if (data[0] != "fail" && !determine) {
    btnToggle();
    switch (category) {
      case "fish":
        fish(data[0]);
        break;

      case "villagers":
        villagers(data[0]);
        break;

      case "bugs":
        bugs(data[0]);
        break;

      case "fossils":
        fossils(data[0]);
        break;

      case "sea":
        sea(data[0]);
        break;
    }
  } else {
    alert(data[1]);
  }
};

// fish
let fish = (data) => {
  let name =
    data["name"]["name-EUen"].charAt(0).toUpperCase() +
    data["name"]["name-EUen"].slice(1) +
    " ID: " +
    data["id"];
  let catchPhrase = data["catch-phrase"];
  let price = data["price"] ? data["price"] : "None";
  let cjPrice = data["price-cj"] ? data["price-cj"] : "None";
  let icon = data["icon_uri"];
  let isAllDay =
    data["availability"]["isAllDay"] === false
      ? "No, available from " + data["availability"]["time"] + "."
      : data["availability"]["isAllDay"];
  let isAllYear =
    data["availability"]["isAllYear"] === false
      ? "No, available in the North during months " +
        data["availability"]["month-northern"] +
        "\n available in the South during months " +
        data["availability"]["month-southern"] +
        "."
      : data["availability"]["isAllYear"];
  let location = data["availability"]["location"];
  let rarity = data["availability"]["rarity"];

  document.getElementById("name").innerText = name;
  document.getElementById("catchPhrase").innerText = catchPhrase;
  document.getElementById("icon").src = icon;
  document.getElementById("price").innerText = `Price: ${price}`;
  document.getElementById("cjPrice").innerText = `CJ Price: ${cjPrice}`;
  document.getElementById(
    "isAllDay"
  ).innerText = `Is it available all day? - ${isAllDay}`;
  document.getElementById(
    "isAllYear"
  ).innerText = `Is it available all Year? - ${isAllYear}`;
  document.getElementById("location").innerText = `Location: ${location}`;
  document.getElementById("rarity").innerText = `Rarity: ${rarity}`;
};

// villager
let villagers = (data) => {
  let name =
    data["name"]["name-EUen"].charAt(0).toUpperCase() +
    data["name"]["name-EUen"].slice(1) +
    " ID: " +
    data["id"];
  let catchPhrase = data["catch-phrase"];
  let birthday = data["birthday-string"];
  let gender = data["gender"];
  let personality = data["personality"];
  let species = data["species"];
  let icon = data["icon_uri"];

  document.getElementById("name").innerText = name;
  document.getElementById("catchPhrase").innerText = catchPhrase;
  document.getElementById("icon").src = icon;
  document.getElementById("price").innerText = `Birthday: ${birthday}`;
  document.getElementById("cjPrice").innerText = `Gender: ${gender}`;
  document.getElementById("isAllDay").innerText = `Personality: ${personality}`;
  document.getElementById("isAllYear").innerText = `Species: ${species}`;
};

// bugs
let bugs = (data) => {
  let name =
    data["name"]["name-EUen"].charAt(0).toUpperCase() +
    data["name"]["name-EUen"].slice(1) +
    " ID: " +
    data["id"];
  let catchPhrase = data["catch-phrase"];
  let price = data["price"] ? data["price"] : "None";
  let flickPrice = data["price-flick"] ? data["price-flick"] : "None";
  let icon = data["icon_uri"];

  let isAllDay =
    data["availability"]["isAllDay"] === false
      ? "No, available from " + data["availability"]["time"] + "."
      : data["availability"]["isAllDay"];

  let isAllYear =
    data["availability"]["isAllYear"] === false
      ? "No, available in the North during months " +
        data["availability"]["month-northern"] +
        "\n available in the South during months " +
        data["availability"]["month-southern"] +
        "."
      : data["availability"]["isAllYear"];

  let location = data["availability"]["location"];
  let rarity = data["availability"]["rarity"];

  document.getElementById("name").innerText = name;
  document.getElementById("catchPhrase").innerText = catchPhrase;
  document.getElementById("icon").src = icon;
  document.getElementById("price").innerText = `Price: ${price}`;
  document.getElementById("cjPrice").innerText = `Flick Price: ${flickPrice}`;
  document.getElementById(
    "isAllDay"
  ).innerText = `Is it available all day? - ${isAllDay}`;
  document.getElementById(
    "isAllYear"
  ).innerText = `Is it available all Year? - ${isAllYear}`;
  document.getElementById("location").innerText = `Location: ${location}`;
  document.getElementById("rarity").innerText = `Rarity: ${rarity}`;
};

// fossils
let fossils = (data) => {
  let name =
    data["name"]["name-EUen"].charAt(0).toUpperCase() +
    data["name"]["name-EUen"].slice(1);
  let catchPhrase = data["museum-phrase"];
  let price = data["price"] ? data["price"] : "None";
  let image = data["image_uri"];

  document.getElementById("name").innerText = name;
  document.getElementById("catchPhrase").innerText = catchPhrase;
  document.getElementById("icon").src = image;
  document.getElementById("price").innerText = `Price: ${price}`;
};

// sea
let sea = (data) => {
  let name =
    data["name"]["name-EUen"].charAt(0).toUpperCase() +
    data["name"]["name-EUen"].slice(1) +
    " ID: " +
    data["id"];
  let catchPhrase = data["catch-phrase"];
  let price = data["price"] ? data["price"] : "None";
  let icon = data["icon_uri"];
  let isAllDay =
    data["availability"]["isAllDay"] === false
      ? "No, available from " + data["availability"]["time"] + "."
      : data["availability"]["isAllDay"];
  let isAllYear =
    data["availability"]["isAllYear"] === false
      ? "No, available in the North during months " +
        data["availability"]["month-northern"] +
        "\n available in the South during months " +
        data["availability"]["month-southern"] +
        "."
      : data["availability"]["isAllYear"];
  let shadow = data["shadow"];
  let speed = data["speed"];

  document.getElementById("name").innerText = name;
  document.getElementById("catchPhrase").innerText = catchPhrase;
  document.getElementById("icon").src = icon;
  document.getElementById("price").innerText = `Price: ${price}`;
  document.getElementById(
    "isAllDay"
  ).innerText = `Is it available all day? - ${isAllDay}`;
  document.getElementById(
    "isAllYear"
  ).innerText = `Is it available all Year? - ${isAllYear}`;
  document.getElementById("location").innerText = `Shadow: ${shadow}`;
  document.getElementById("rarity").innerText = `Speed: ${speed}`;
};

// Clean values
let clean = () => {
  document.getElementById("name").innerText = "";
  document.getElementById("catchPhrase").innerText = "";
  document.getElementById("price").innerText = "";
  document.getElementById("isAllDay").innerText = "";
  document.getElementById("isAllYear").innerText = "";
  document.getElementById("location").innerText = "";
  document.getElementById("rarity").innerText = "";
  document.getElementById("icon").src = "";
  document.getElementById("cjPrice").innerText = "";
};

//Alert
let alert = (item) => {
  if (item.length > 0) {
    let x = document.getElementById("snackbar");
    x.innerText = `${item} wasn't found :(`;
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
      x.innerText = "";
    }, 3000);
  }

  clean();
  btnToggle();
};
