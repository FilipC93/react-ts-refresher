import { type FormEvent } from 'react'

const NewGoal = () => {
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" />
      </p>
      <button type="submit">Add goal</button>
    </form>
  )
}

export default NewGoal
