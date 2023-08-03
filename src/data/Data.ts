import { CarteProps } from "../components/carte/Carte";

class Data {
  private cartes: CarteProps[];
  constructor() {
    this.cartes = [
      {
        id: 1,
        name: "Batman",
        image: "https://www.superherodb.com/gallery2/075/395/39568.webp",
        civil: "Bruce Wayne",
        age: 35,
        ville: "Gotham City",
      },
      {
        id: 2,
        name: "Superman",
        image: "https://www.superherodb.com/gallery2/075/475/47594.webp",
        civil: "Clark Kent",
        age: 28,
        ville: "Metropolis",
      },
      {
        id: 3,
        name: "Green Lantern",
        image: "https://www.superherodb.com/gallery2/075/181/18105.webp",
        civil: "Hal Jordan",
        age: 30,
        ville: "Coast City",
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
