const requestURL = 'https://reqres.in/api/unknown/23';
async function getData() {
  try {
    const response = await fetch(requestURL);
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error:', error.message);
  }
}
getData();
