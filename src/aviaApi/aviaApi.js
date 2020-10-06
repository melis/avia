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
      this.searchId = search.searchId;
    } catch (e) {
      console.log(e);
    }
  }

  async getTickets() {
    if (!this.searchId) this.newSearchId();
    try {
      const res = await fetch(`${this.baseApi}tickets?searchId=${this.searchId}`);
      if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();
      if (data.stop) this.searchId = '';

      return data;
    } catch (e) {
      return { error: e.message };
    }
  }
}

const aviaApi = new Api();
export default aviaApi;
