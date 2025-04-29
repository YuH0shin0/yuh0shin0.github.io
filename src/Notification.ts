import { AppHTMLElement } from "@/AppHTMLElement"

/**
 * カスタムボタンが押下された結果を表示する
 */
class Notification extends AppHTMLElement {
  constructor(source: HTMLElement, eventId: string) {
    super(source, eventId)
    source.addEventListener(eventId, (e: Event) => {
      const {detail} = e as CustomEvent
      source.textContent = `${detail}`
    })
  }

  async response(logic: Promise<boolean>) {
    try {
      const response: Awaited<boolean> = await logic
      const event = new CustomEvent(this.eventId, { detail: response }) as IAppEvent
      this.dispatchEvent(event)
    } catch (e) {
      const event = new CustomEvent(this.eventId, { detail: (e as Error) }) as IAppEvent
      this.dispatchEvent(event)
    }
  }
}

export {Notification}
