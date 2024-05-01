import { DurableObject } from 'cloudflare:workers'

export class Counter extends DurableObject {
  async getCounterValue() {
    let value = (await this.ctx.storage.get('value')) || 0
    return value
  }

  async increment(amount = 1) {
    let value: number = (await this.ctx.storage.get('value')) || 0
    value += amount
    await this.ctx.storage.put('value', value)
    return value
  }

  async decrement(amount = 1) {
    let value: number = (await this.ctx.storage.get('value')) || 0
    value -= amount
    await this.ctx.storage.put('value', value)
    return value
  }
}
