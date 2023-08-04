class HerosRepository {
  private url: string = "http://localhost:3005";

  async getHerosById(id: number) {
    const url: string = `${this.url}/heros/${id}`;
    console.log(url);

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(url, options);
      const jsonData = await response.json();
      console.log(jsonData);
      return jsonData;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  async getAll() {
    const url: string = `${this.url}/heros/`;
    console.log(url);

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(url, options);
      const jsonData = await response.json();
      console.log(jsonData);
      return jsonData;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
}

export default HerosRepository;
