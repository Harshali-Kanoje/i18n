import ReactDom from 'react-dom/client'
import Home from './view/Home/Home'
// import {createBrowserRouter , RouterProvider} from 'react-router-dom';


const root = ReactDom.createRoot(document.getElementById("root"))

// const router = createBrowserRouter([
//     {
//         path : '/',
//         element :<Home/>
//     },
//     {
//         path : '/login',
//         element :<Login/>
//     },
//     {
//         path : '/signup',
//         element :<SignUp/>
//     },
//     {
//         path : '/orders',
//         element :<Order/>
//     },
//     {
//         path : '/buy/:_id',
//         element :<BuyProduct/>
//     }
// ])
root.render(
 <Home/>
)

