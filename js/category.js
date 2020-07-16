fetch("http://127.0.0.1:5500/assets/out/all.json")
  .then((res) => res.json())
  .then((data) => dealWithAlldata(data));

let dealWithAlldata = (data) => {
  console.log(data[0]);
  console.log(data[0].name);
  console.log(data[0].tag);
  console.log(data[0].catalog);
  console.log(data[0].outdoor ? data[0].outdoor : "None");
  console.log(data[0].set ? data[0].set : "None");
  console.log(data[0].diy ? data[0].diy : "Not DIY");

  for (let i in data[0].variants) {
    console.log(data[0].variants[i]);
  }
};
