import { AppHTMLElement } from "@/AppHTMLElement"
import { AppButtonElement } from "@/AppButtonElement"

class CustomButton<T> extends AppButtonElement {
  #eventType = 'click'
  #source: HTMLElement
  #target: AppHTMLElement
  #logic: () => Promise<T>
  constructor(source: HTMLElement, target: AppHTMLElement, logic: () => Promise<T>) {
    super()
    this.#source = source
    this.#target = target
    this.#logic = logic
    this.#source.addEventListener(this.#eventType, this.asyncEvent)
  }
  private asyncEvent() {
    async (e: Event) => {
      if (e.isTrusted) {
        const response = await this.#logic()
        this.dispatch(response)
      }
    }
  }
  private dispatch(response: Awaited<Promise<T>>) {
    const e = new CustomEvent(this.#target.eventId, { detail: response })
    this.#target.dispatchEvent(e)
    this.#source.removeEventListener(this.#eventType, this.asyncEvent)
    this.#source.remove()
  }
}

export {CustomButton}
