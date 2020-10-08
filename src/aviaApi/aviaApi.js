class Api {
  baseApi = 'https://aviasales-test-api.java-mentor.com/';

  searchId = '';

  async newSearchId() {
    try {
      const res = await fetch(`${this.baseApi}search`);
      if (!res.ok) throw new Error(res.statusText);
      const search = await res.json();
      this.searchId = search.searchId;
    } catch (e) {
      this.newSearchId();
    }
  }

  async getTickets() {
    if (!this.searchId) {
      await this.newSearchId();
    }
    try {
      const res = await fetch(`${this.baseApi}tickets?searchId=${this.searchId}`);
      if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();
      if (data.stop) this.searchId = '';

      return data;
    } catch (e) {
      if (e.message === 'Internal Server Error') return { stop: false };
      return { error: true, text: e.message };
    }
  }
}

const aviaApi = new Api();
export default aviaApi;
