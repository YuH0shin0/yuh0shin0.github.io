/**
 * Appにて利用するCustomEvent
 */

declare interface IAppEvent extends CustomEvent {
  eventId: string
  readonly detail: boolean | Error
}
