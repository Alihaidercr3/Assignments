import { useRouteError } from "react-router-dom";
 export const   ErrorPage = () => {
  const  error  = useRouteError();
  if(error.status === 404){ 
    return <section className="error-section">
    <div style={{textAlign :"center"}}> 
    <figure>
     <img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif" alt="404 page" />   
    </figure>
    <div style={{textAlign :"center"}} >
    <p>. The you were looking could not be found</p>
    <p>... BAck to previous page</p>
    </div>
      
    </div>
    </section>
  } 
  console.log(error);
 return <h1>The page yur looking for is not available</h1> 
}   