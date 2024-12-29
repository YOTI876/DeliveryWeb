const client = new Typesense.Client({
    nodes: [
      {
        host: 'localhost', 
        port: '8108',
        protocol: 'http',
      },
    ],
    apiKey: 'AIzaSyAzt5l9rq682xL0tLlHZpHrvuvK6M0Vj0c', 
    connectionTimeoutSeconds: 2,
  });
  
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  
  async function search(query) {
    if (!query) {
      searchResults.innerHTML = ''; 
      return;
    }
  
    try {
      const response = await client.collections('books').documents().search({
        q: query,               
        query_by: 'title,author', 
      });
  
      
      if (response.hits.length > 0) {
        searchResults.innerHTML = response.hits
          .map(
            (hit) => `
          <li>
            <strong>${hit.document.title}</strong> - ${hit.document.author} (${hit.document.year})
          </li>
        `
          )
          .join('');
      } else {
        searchResults.innerHTML = '<li>No results found.</li>';
      }
    } catch (error) {
      console.error('Search error:', error);
      searchResults.innerHTML = '<li>Error fetching results.</li>';
    }
  }
  
  
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value; 
    search(query); 
  });