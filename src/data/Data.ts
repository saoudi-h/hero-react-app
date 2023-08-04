import { Heros } from "../components/carte/Carte";

class Data {
  private cartes: Heros[];
  constructor() {
    this.cartes = [
      {
        id: 1,
        name: "Batman",
        image:
          "https://picture-cdn.wheretoget.it/0j2yz5-l-610x610-t+shirt-jim+parsons-big+bang+theory-sheldon+coooper.jpg",
        civil: "Bruce Wayne",
        age: 35,
        ville: "Gotham City",
      },
      {
        id: 2,
        name: "Superman",
        image:
          "https://scontent.cdnsnapwidget.com/vp/35c487b714a7a165f1934f98cc954eb8/5B98167D/t51.2885-15/s640x640/sh0.08/e35/28751215_589487804724480_1546872049778032640_n.jpg",
        civil: "Clark Kent",
        age: 28,
        ville: "Metropolis",
      },
      {
        id: 3,
        name: "Green Lantern",
        image:
          "https://www.serieously.com/app/uploads/2019/07/Sheldon-Cooper-768x432-c-default.webp",
        civil: "Hal Jordan",
        age: 30,
        ville: "Coast City",
      },
      {
        id: 4,
        name: "The Flash",
        image:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ef60203c-f4af-40d4-8b12-ed8495a433bf/d46xg3r-96f9e5f8-4d80-48cb-b9c0-2ffdd3157a09.jpg/v1/fill/w_305,h_430,q_75,strp/flash_sheldon_by_daviddeb_d46xg3r-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDMwIiwicGF0aCI6IlwvZlwvZWY2MDIwM2MtZjRhZi00MGQ0LThiMTItZWQ4NDk1YTQzM2JmXC9kNDZ4ZzNyLTk2ZjllNWY4LTRkODAtNDhjYi1iOWMwLTJmZmRkMzE1N2EwOS5qcGciLCJ3aWR0aCI6Ijw9MzA1In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.s7BU3Z-P7Tw8V3PczSL7fEC_djk2_AzLiaUbj2Wzj78",
        civil: "Barry Allen",
        age: 27,
        ville: "Central City",
      },
      {
        id: 5,
        name: "Aquaman",
        image:
          "https://uploads.wornontv.net/2013/04/sheldons-brown-aquaman-shirt.jpg",
        civil: "Arthur Curry",
        age: 35,
        ville: "Atlantis",
      },
      {
        id: 6,
        name: "Iron Man",
        image: "https://tv-vcr.com/wp-content/uploads/2017/03/Iron-Man.png",
        civil: "Tony Stark",
        age: 45,
        ville: "Malibu",
      },
    ];
  }

  getCarteById(id: number) {
    return this.cartes.find((carte) => carte.id === id);
  }
  getAll() {
    return this.cartes;
  }
}

export default Data;
