class AsyncActionQueue {
  constructor () {
    this.actions = []
    this.running = false
  }

  add (action) {
    this.actions.push(action)
    this.run()
  }

  async run () {
    if (this.running) return
    this.running = true

    while (this.actions.length > 0) {
      const action = this.actions.shift()

      await action()
    }

    this.running = false
  }
}
