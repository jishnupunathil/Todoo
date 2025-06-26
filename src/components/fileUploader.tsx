import { useState } from "react";
import type { UploadState } from "../types";

export default function FileUploader() {

    const [state, setState] = useState<UploadState>({ step: 'idle' })
if (state.step === 'idle')       return <button onClick={startUpload}>Start upload</button>
  if (state.step === 'uploading')  return <p>Progress: {state.progress}%</p>
  if (state.step === 'done')       return <div>
      <a href={state.url}>Download</a> 
      <button onClick={reset}> reset</button>
    </div>
  return null


  function startUpload(){
    setState({ step: 'uploading', progress: 0 })
    simulate()
  }


 function simulate() {
  let p = 0
  const timer = setInterval(() => {
    p += 10
    if (p >= 100) {
      clearInterval(timer)
      // fake finished file url
      setState({ step: 'done', url: 'https://example.com/file.zip' })
    } else {
      setState({ step: 'uploading', progress: p })
    }
  }, 400)          // every 0.4 s
}

function reset(){
 setState(   { step: 'idle' })
}






}