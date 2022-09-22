const data = [
    {
      id: 1,
      title: "Placa de Video ASUS GeForce RTX 3090 24GB GDDR6X TUF GAMING OC",
      price: 1060,
      detail: "La mejor placa de video del mercado",
      img:"../placaasus.png",
    },
    {
      id: 2,
      title: "Placa de Video MSI GeForce RTX 3090 24GB GDDR6X GAMING X TRIO",
      price: 975,
      detail: "La mejor placa de video del mercado",
      img:"../placamsi.png" ,
    },
    {
      id: 3,
      title: "Placa de Video Zotac GeForce RTX 3090 24GB GDDR6X Trinity",
      price: 915,
      detail: "La mejor placa de video del mercado",
      img:"../placazotac.jpg"
    },
  ];
  
  export default function getItems(){
      return new Promise ((resolve, reject) =>{
          setTimeout(()=>{
              resolve (data);
          },2000);
      });
  }