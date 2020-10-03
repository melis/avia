class Api {
  baseApi = 'https://aviasales-test-api.java-mentor.com/';
  searchId = '';
  // https://aviasales-test-api.java-mentor.com/search
  // https://aviasales-test-api.java-mentor.com/tickets?searchId={id}

  async newSearchId() {
    try {
      const res = await fetch(`${this.baseApi}search`);
      if (!res.ok) throw new Error(res.statusText);
      const search = await res.json();
      return search.searchId;
    } catch (e) {
      console.log(e);
    }
  }

  async getTickets() {
    let tickets = [];
    try {
      let stop = false;
      const searchId = await this.newSearchId();
      while (!stop) {
        try {
          const res = await fetch(`${this.baseApi}tickets?searchId=${searchId}`);
          if (!res.ok) throw new Error(res.statusText);
          const data = await res.json();
          tickets = [...tickets, ...data.tickets];
          stop = data.stop;
        } catch (e) {
          if (e.message !== 'Internal Server Error') throw e;
          console.log(e.message);
        }
      }
    } catch (e) {
      console.log(e);
    }
    return tickets;
  }
}

const aviaApi = new Api();
export default aviaApi;
