import './style.css'


// (async function getApi() {
//   try {
//     const gitApi = await fetch('https://api.github.com/users/AllisonFavour');
//     const result = await gitApi.json();
  
//     console.log(result.login)

//   } catch (error) {
//     console.error(error)
//   }
// })()

(async function getApi() {
  try {
    const gitApi = await fetch('https://www.dictionaryapi.com/api/v3/references/sd2/json/school?key=your-api-key');
    const result = await gitApi.json();
  
    console.log(result)

  } catch (error) {
    console.error(error)
  }
})()