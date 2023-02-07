"use client"

export default function Error ({error,reset}){
    return(
        <main className="main">
            Sorry, cannot load the page
            <button onClick={()=>reset()}>Reload</button>
        </main>
    )
}