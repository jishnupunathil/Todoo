import { useState } from "react";
import type { Settings } from "../types";

export default function SettingsPanel() {
    const [cfg, setCfg] = useState<Settings>({ id: 'device-01' ,theme:'dark'})

    function toggleTheme() {
setCfg(prev=>({
    ...prev,
    theme:prev.theme==='dark'?'light':'kappii',
}))

}
return (
    <section>
      <p>ID (readonly): {cfg.id}</p>
      <p>Theme: {cfg.theme ?? '— not set —'}</p>

      <button onClick={toggleTheme}>Toggle theme</button>

      {/* try this line → TS error: id is readonly */}
      {/* cfg.id = 'hack';  */}
    </section>
  )




}