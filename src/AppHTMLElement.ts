/**
 * アプリケーションにて利用するHTMLElement
 */
abstract class AppHTMLElement {
  eventId: string
  source: HTMLElement
  constructor(source: HTMLElement, eventId: string) {
    this.source = source
    this.eventId = eventId
  }
  dispatchEvent(params: any) {
    this.source.dispatchEvent(params)
  }
}
export {AppHTMLElement}