export async function fetchData() {
    try {
      const response = await fetch('../../data/employees.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('There was a problem fetching the data:', error);
    }
  }
  
