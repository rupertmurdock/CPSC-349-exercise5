const USERNAME = 'robinldunne@gmail.com'
const PASSWORD = 'Foreverclever69!'
import Pocketbase from 'https://cdn.jsdelivr.net/gh/pocketbase/js-sdk@latest/dist/pocketbase.es.mjs'
const pb = new PocketBase('http://127.0.0.1:8090')

const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD)
console.log(authData)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

function App () {
  return (
    <div className='App'>
      <h1>Hello, {authData.admin.email}</h1>
    </div>
  )
}
