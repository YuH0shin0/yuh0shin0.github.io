class XRWebGLLayer {
  constructor(session: XRSession, context: XRWebGLRenderingContext, layerInit?: XRWebGLLayerInit) {
    return new (window as any).XRWebGLLayer(session, context, layerInit)
  }
}

export {
  XRWebGLLayer
}