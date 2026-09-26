const requestURL = 'https://reqres.in/api/users';
async function createUser() {
  const response = await fetch(requestURL, {
    method: 'POST',
    headers: {
      'x-api-key': 'free_user_3Js8V6Bd7ez1Y4LLaEy7uMGNHZw',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'John',
      job: 'Janitor',
    }),
  });
  const data = await response.json();
  console.log(data);
}
createUser();
