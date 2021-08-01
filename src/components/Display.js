export default function Display({ calculate }) {
  return (
    <header className="App__Display">
      <div>{ calculate.next ?? (calculate.total ?? 0) }</div>
    </header>
  )
}
