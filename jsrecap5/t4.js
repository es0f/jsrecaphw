async function fetchData(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Request failed');
  }
  return response.json();
}
try {
  const user = {
    name: 'John Doe',
    job: 'Developer',
  };
  const url = 'https://reqres.in/api/users';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'free_user_3Js8V6Bd7ez1Y4LLaEy7uMGNHZw',
    },
    body: JSON.stringify(user),
  };
  const userData = await fetchData(url, options);
  console.log(userData);
} catch (error) {
  console.error('An error occurred:', error);
}
