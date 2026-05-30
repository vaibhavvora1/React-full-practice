import React, { useState } from 'react'

function App() {
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [task, setTask] = useState([])

  function submitHandler(e) {
    e.preventDefault()

    setTask([...task, { title, details }])
    setTitle("")
    setDetails("")
  }

  function deleteNote(indexToDelete) {
    setTask(task.filter((_, index) => index !== indexToDelete))
  }

  return (
    <main className='min-h-screen bg-slate-950 px-4 py-10 text-slate-100 sm:px-6 lg:px-8'>
      <section className='mx-auto flex w-full max-w-6xl flex-col gap-10'>
        <div className='text-center'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300'>Notes App</p>
          <h1 className='text-4xl font-bold sm:text-5xl'>Add Your Notes</h1>
        </div>

        <form
          className='mx-auto flex w-full max-w-2xl flex-col gap-4 rounded-lg border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur sm:p-8'
          onSubmit={submitHandler}
        >
          <input
            className='w-full rounded-md border border-white/10 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30'
            type="text"
            placeholder='Enter note heading...'
            value={title}
            required
            onChange={(e) => { setTitle(e.target.value) }}
          />

          <textarea
            className='min-h-32 w-full resize-none rounded-md border border-white/10 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30'
            placeholder='Enter note content...'
            value={details}
            required
            onChange={(e) => { setDetails(e.target.value) }}
          />

          <button
            type='submit'
            className='rounded-md bg-emerald-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 focus:ring-offset-slate-950'
          >
            Add Note
          </button>
        </form>

        <div>
          <div className='mb-6 flex items-end justify-between gap-4'>
            <div>
              <h2 className='text-2xl font-bold sm:text-3xl'>Your Notes</h2>
              <p className='mt-1 text-sm text-slate-400'>
                {task.length} note{task.length === 1 ? "" : "s"} saved
              </p>
            </div>
          </div>

          {task.length === 0 ? (
            <div className='rounded-lg border border-dashed border-slate-700 bg-slate-900/60 p-10 text-center text-slate-400'>
              No notes yet. Add your first note above.
            </div>
          ) : (
            <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
              {task.map(function (elem, idx) {
                return (
                  <article
                    key={idx}
                    className='flex min-h-56 flex-col rounded-lg border border-white/10 bg-white p-5 text-slate-900 shadow-xl shadow-black/20'
                  >
                    <div className='mb-4 flex items-start justify-between gap-3'>
                      <h3 className='text-2xl font-bold leading-tight break-words'>{elem.title}</h3>
                      <button
                        type='button'
                        className='shrink-0 rounded-md bg-red-50 px-3 py-2 text-sm font-bold text-red-600 transition hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-300'
                        onClick={() => { deleteNote(idx) }}
                      >
                        Delete
                      </button>
                    </div>
                    <p className='leading-relaxed text-slate-700 break-words'>{elem.details}</p>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default App
