import { useEffect, useState } from "react";
import type { ApiState, UploadState } from "../types";

export default function FetchJoke() {


const [state,setState]=useState<ApiState<string>>({status:'loading'})
const [states, setStates] = useState<UploadState>({ step:'uploading',progress:4 })

useEffect(()=>{
    fetch('https://api.chucknorris.io/jokes/random')
    .then(r=>r.json())
    .then(j=>setState({status:'success',data:j.value}))
    .catch(e=>setState({ status: 'error', message: e.message }))
},[]);

// if (state.status === 'loading') return <p>Loading…</p>;
//  if (state.status === 'error')   return <p>Error: {state.message}</p>;
//   return <p>Joke: {state.data}</p>;


  if (states.step === 'idle')       return <button>Start upload</button>
  if (states.step === 'uploading')  return <p>Progress: {states.progress}%</p>
  if (states.step === 'done')       return <a href={states.url}>Download</a>
  return null


}