
export const apiActions = () => async (dispatch) => {
       dispatch({
           type:'api/loading',
       });

       try {
           const respone = await fetch('https://api.chucknorris.io/jokes/random');
           const data = await respone.json();
           dispatch({
               type: 'api/success',
               payload: {
                response: data
               }
           })
       } catch(e) {
           dispatch({
               type:'api/error',
               error: 'Failed to load Data!'
           })
       }
}