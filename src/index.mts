import { document, navigator, XRWebGLLayer } from '@/Global/index.mjs'

/**
 * iframeがxr-spatial-trackingを許可しているか確認
 * @param iframe
 */
// function isSpatialTrackingAllowed(dom: IHTMLIFrameElement): boolean {
//   // True if a new frame at https://example.com will be allowed to use WebXR.
//   if (dom.featurePolicy.allowsFeature('xr-spatial-tracking', window.origin)) {
//     // Show UI to create frame at https://example.com.
//     return true
//   } else {
//     // Show an alternative UI.
//     return false
//   }
// }

/**
 * XRSessionは初回起動後、配列に保存し、次回以降はインスタンスを再利用する
 */
// const sessions: Map<XRSessionMode, XRSession | null> = new Map()
// sessions.set('inline', null)
// sessions.set('immersive-ar', null)
// sessions.set('immersive-vr', null)

// function isFeatureAllowed(feature: string) {
//   document.featurePolicy.allowsFeature(feature)
// }
// function isAllowedFromOrigin(feature: string) {
//   document.featurePolicy.allowsFeature(feature, window.origin)
// }
/**
 * XRをinlineモードで起動する
 */
// async function launchInlineXR() {
//   // XRのセッションを取得する
//   const session = await navigator.xr.requestSession('inline', { requiredFeatures: [], optionalFeatures: [] })
//   sessions.set('inline', session)
// }

/**
 * XRをimmersiveArモードで起動する
 */
// async function launchImmersiveArXR() {
//   // XRのセッションを取得する
//   const session = await navigator.xr.requestSession('immersive-ar', { requiredFeatures: [], optionalFeatures: [] })
//   sessions.set('immersive-ar', session)
// }

/**
 * XRをimmersiveVrモードで起動する
 */
// async function launchImmersiveVrXR() {
//   // XRのセッションを取得する
//   const session = await navigator.xr.requestSession('immersive-vr', { requiredFeatures: [], optionalFeatures: [] })
//   sessions.set('immersive-vr', session)
// }

// function enableLaunchButton(buttonClassList: string, logic: () => void) {
//   const launchButton = document.getElementsByClassName(buttonClassList)[0] as HTMLButtonElement
//   launchButton.disabled = false
//   launchButton.classList.remove('hidden')
//   launchButton.addEventListener('click', (e: Event) => {
//     if (e.isTrusted) {
//       logic()
//     }
//   })
// }
/**
 * XRを起動する
 */
// async function launchXRDevice() {
//   // 1. navigator.xr.isSessionSupported()を起動
//   const isInlineSupported = await navigator.xr.isSessionSupported('inline')
//   if (isInlineSupported) {
//     enableLaunchButton('button inline', launchInlineXR)
//   } else {

//   }
//   const isImmersiveArSupported = await navigator.xr.isSessionSupported('immersive-ar')
//   if (isImmersiveArSupported) {
//     enableLaunchButton('button immersive-ar', launchImmersiveArXR)
//   } else {

//   }

//   const isImmersiveVrSupported = await navigator.xr.isSessionSupported('immersive-vr')
//   if (isImmersiveVrSupported) {
//     enableLaunchButton('button immersive-vr', launchImmersiveVrXR)
//   } else {

//   }


// }

/**
 * DOMに出力する
 * @param message 
 */
function consoleDom(message: string) {
  const consoleDom = document.getElementsByClassName('console-dom').item(0) as HTMLParagraphElement
  consoleDom.textContent += `${message}.    `
}

const REQUIRED_FEATURES = {
  REFERENCE_SPACE_TYPE: 'unbounded',
  DEPTH_SENSING: 'depth-sensing',
  HAND_TRACKING: 'hand-tracking',
  BODY_TRACKING: 'body-tracking'
}
async function isSupported() {
  if (await navigator.xr.isSessionSupported('immersive-ar')) {
    consoleDom(`immersive-ar is supported`)
  } else {
    consoleDom(`immersive-ar is not supported`)
  }
}

function initializeSessionEventListeners(session: XRSession) {
  session.addEventListener('end', (e: Event) => {
    if (e.isTrusted) {
      consoleDom(`event = ${e.type}(${e.target})`)
    }
  })
  session.addEventListener('frameratechange', (e: Event) => {
    if (e.isTrusted) {
      consoleDom(`event = ${e.type}(${e.target})`)
    }
  })
  session.addEventListener('inputsourceschange', (e: Event) => {
    if (e.isTrusted) {
      consoleDom(`event = ${e.type}(${e.target})`)
    }
  })
  session.addEventListener('select', (e: Event) => {
    if (e.isTrusted) {
      consoleDom(`event = ${e.type}(${e.target})`)
    }
  })
  session.addEventListener('selectend', (e: Event) => {
    if (e.isTrusted) {
      consoleDom(`event = ${e.type}(${e.target})`)
    }
  })
  session.addEventListener('selectstart', (e: Event) => {
    if (e.isTrusted) {
      consoleDom(`event = ${e.type}(${e.target})`)
    }
  })
  session.addEventListener('squeeze', (e: Event) => {
    if (e.isTrusted) {
      consoleDom(`event = ${e.type}(${e.target})`)
    }
  })
  session.addEventListener('squeezeend', (e: Event) => {
    if (e.isTrusted) {
      consoleDom(`event = ${e.type}(${e.target})`)
    }
  })
  session.addEventListener('visibilitychange', (e: Event) => {
    if (e.isTrusted) {
      consoleDom(`event = ${e.type}(${e.target})`)
    }
  })
}

function describeSession(session: XRSession) {
  consoleDom(`[START] - describeSession`)
  consoleDom(`session.enabledFeatures = ${session.enabledFeatures}`)
  consoleDom(`session.supportedFrameRates = ${session.supportedFrameRates}`)
  consoleDom(`session.frameRate = ${session.frameRate}`)
  consoleDom(`session.inputSources = ${JSON.stringify(session.inputSources)}`)
  session.inputSources.forEach((inputSource: XRInputSource) => {
    consoleDom(`inputSource.gripSpace = ${inputSource.gripSpace}`)
    const gripSpace = inputSource.gripSpace
    consoleDom(`${gripSpace?.toString()}`)
    consoleDom(`inputSource.handedness = ${inputSource.handedness}`)
    consoleDom(`inputSource.profiles = ${inputSource.profiles}`)
    consoleDom(`inputSource.skipRendering = ${inputSource.skipRendering}`)
    consoleDom(`inputSource.targetRayMode = ${inputSource.targetRayMode}`)
    consoleDom(`inputSource.targetRaySpace = ${inputSource.targetRaySpace}`)
    consoleDom(`${inputSource?.targetRaySpace.toString()}`)

    // WebXR Hand Input Module
    consoleDom(`[START] - WebXR Hand Input Module`)
    if ((inputSource as any).hand) {
      consoleDom(`hand input module is active`)
    } else {
      consoleDom(`hand input module is not active`)
    }
    consoleDom(`[END] - WebXR Hand Input Module`)
  })
  consoleDom(`session.isSystemKeyboardSupported = ${session.isSystemKeyboardSupported}`)
  consoleDom(`session.renderState = ${JSON.stringify(session.renderState)}`)
  consoleDom(`session.visibilityState = ${session.visibilityState}`)
  const renderState = session.renderState
  consoleDom(`renderState.baseLayer = ${renderState.baseLayer}`)
  consoleDom(`renderState.depthFar = ${renderState.depthFar}`)
  consoleDom(`renderState.depthNear = ${renderState.depthNear}`)
  consoleDom(`renderState.inlineVerticalFieldOfView = ${renderState.inlineVerticalFieldOfView}`)
  consoleDom(`renderState.passthroughFullyObscured = ${renderState.passthroughFullyObscured}`)

  // WebXR AR Module
  consoleDom(`[START] - WebXR AR Module`)
  consoleDom(`session.environmentBlendMode = ${(session as any).environmentBlendMode}`)
  consoleDom(`session.interactionMode = ${(session as any).interactionMode}`)
  consoleDom(`[END] - WebXR AR Module`)

  // WebXR Depth Sensing Module
  consoleDom(`[START] - WebXR Depth Sensing Module`)
  consoleDom(`session.depthUsage = ${(session as any).depthUsage}`)
  consoleDom(`session.depthDataFormat = ${(session as any).depthDataFormat}`)
  consoleDom(`session.depthType = ${(session as any).depthType}`)
  consoleDom(`session.depthActive = ${(session as any).depthActive}`)
  // consoleDom(`WebXR Depth Sensing module = session.resumeDepthSensing() = ${(session as any).resumeDepthSensing()}`);
  consoleDom(`[END] - WebXR Depth Sensing Module`)

  consoleDom(`[END] - describeSession`)
}
let referenceSpace: null | XRReferenceSpace = null
function requestAnimationFrameCallback(time: DOMHighResTimeStamp, frame: XRFrame): undefined {
  consoleDom(`frameCallback of requestAnimationFrame(${time}, ${frame})`)
  consoleDom(`session = ${frame.session}`)
  consoleDom(`predictedDisplayTime = ${frame.predictedDisplayTime}`)

  // Hand Input Module
  // partial interface XRFrame {
  //     XRJointPose? getJointPose(XRJointSpace joint, XRSpace baseSpace);
  //     boolean fillJointRadii(sequence<XRJointSpace> jointSpaces, Float32Array radii);
  
  //     boolean fillPoses(sequence<XRSpace> spaces, XRSpace baseSpace, Float32Array transforms);
  // };

  // Body Tracking
  // partial interface XRFrame {
  //   [SameObject] readonly attribute XRBody? body;
  // };

  consoleDom(`[START] - WebXR Body Tracking Module`)
  consoleDom(`bodyTracking = ${(frame as any).body.toString()}`)
  consoleDom(`[END] - WebXR Body Tracking Module`)

  const xrViewerPose = frame.getViewerPose(referenceSpace!)
  if (xrViewerPose) {
    consoleDom(`emulatedPosition = ${xrViewerPose.emulatedPosition}`)
    consoleDom(`angularVelocity = ${xrViewerPose.angularVelocity}`)
    consoleDom(`linearVelocity = ${xrViewerPose.linearVelocity}`)
    for (const view of xrViewerPose.views) {
      consoleDom(`view.eye = ${view.eye}`)
      consoleDom(`view.recommendedViewportScale = ${view.recommendedViewportScale}`)
      consoleDom(`view.requestViewportScale = ${view.requestViewportScale}`)
    }
    consoleDom(`views = ${xrViewerPose?.views}`)
  } else {
    consoleDom(`xrViewerPose = ${JSON.stringify(xrViewerPose)}`)
  }
}
async function requestSession(referenceSpaceTypes: XRReferenceSpaceType[], modules: string[]): Promise<XRSession> {
  try {
    if (modules.includes('depth-sensing')) {
      return await navigator.xr.requestSession('immersive-ar', {
        requiredFeatures: [
          ...referenceSpaceTypes,
          ...modules
        ],
        optionalFeatures: [
          "secondary-views",
          "layers"
        ],
        depthSensing: {
          usagePreference: ["cpu-optimized", "gpu-optimized"],
          dataFormatPreference: ["luminance-alpha", "float32"],
        },
      })
    } else {
      return await navigator.xr.requestSession('immersive-ar', {
        requiredFeatures: [
          ...referenceSpaceTypes,
          ...modules
        ],
        optionalFeatures: [
          "secondary-views",
          "layers"
        ],
      })
    }
  } catch (e: any) {
    consoleDom(`requestSession error = ${e.toString()}`)
    throw new Error(e.toString())
  }
}
async function runActiveSession(session: XRSession) {
  // initializeSessionEventListeners(session)
  // const glCanvas = document.createElement("canvas");
  // const gl = glCanvas.getContext("webgl2", { xrCompatible: true });

  // const newRenderState: XRRenderStateInit = {
  //   depthFar: 1000.0,
  //   depthNear: 0.1,
  //   passthroughFullyObscured: true,
  //   inlineVerticalFieldOfView: null as any,
  //   baseLayer: (new XRWebGLLayer(session, gl as any)) as any
  // }
  // session.updateRenderState(newRenderState)
  // describeSession(session)
  // referenceSpace = await session.requestReferenceSpace('unbounded')
  // describeSession(session)
  // session.requestAnimationFrame(requestAnimationFrameCallback)
  // describeSession(session)
}
async function initializeImmersiveAr() {
  const arModuleButton = document.querySelector('.enter > button') as HTMLButtonElement
  arModuleButton.textContent = arModuleButton.classList.toString()
  arModuleButton.addEventListener('click', async (e: Event) => {
    if (!e.isTrusted) {
      return
    }
    // const session = await requestSession()
    // initializeSessionEventListeners(session)
    // await session.updateTargetFrameRate(120)
    // const layerInit: XRWebGLLayerInit = {
    //   antialias: true,
    //   depth: true,
    //   stencil: true,
    //   alpha: true,
    //   ignoreDepthValues: false,
    //   framebufferScaleFactor: 1.0
    // }
    // const xrWebGlLayer = new XRWebGLLayer(session, new WebGL2RenderingContext(), layerInit)
    // const newRenderState: XRRenderStateInit = {
    //   depthFar: 1000.0,
    //   depthNear: 0.1,
    //   passthroughFullyObscured: false,
    //   inlineVerticalFieldOfView: Math.PI * 0.5,
    // }
    // session.updateRenderState(newRenderState)
    // referenceSpace = await session.requestReferenceSpace('viewer')
    // session.requestAnimationFrame(requestAnimationFrameCallback)
    // describeSession(session)
  })
}

function togglePermissions() {
  let referenceSpaceTypeSet = new Set<XRReferenceSpaceType>()
  let moduleSet = new Set<string>()

  const inputs = document.querySelectorAll('.label') as NodeListOf<HTMLLabelElement>
  inputs.forEach((input: HTMLLabelElement) => {
    input.addEventListener('click', (e) => {
      if (e.isTrusted) {
        const dom = ((e.target as HTMLLabelElement).previousElementSibling! as HTMLInputElement)
        dom.click()
      }
    })
  })

  document.addEventListener('dispatchReferenceType', async (e: Event) => {
    const session = await requestSession(Array.from(referenceSpaceTypeSet), Array.from(moduleSet))
    await runActiveSession(session)
  })

  document.addEventListener('dispatchModule', async (e: Event) => {
    const session = await requestSession(Array.from(referenceSpaceTypeSet), Array.from(moduleSet))
    await runActiveSession(session)
  })

  const values = document.querySelectorAll('.referenceSpaceType') as NodeListOf<HTMLInputElement>
  values.forEach((value: HTMLInputElement) => {
    value.addEventListener('click', (e: Event) => {
      const elem = (e.target as HTMLInputElement)
      if (elem.checked) {
        referenceSpaceTypeSet.add(elem.value as XRReferenceSpaceType)
      } else {
        referenceSpaceTypeSet.delete(elem.value as XRReferenceSpaceType)
      }
      document.dispatchEvent(new CustomEvent('dispatchReferenceType', { detail: referenceSpaceTypeSet }))
    })
  })

  const modules = document.querySelectorAll('.module') as NodeListOf<HTMLInputElement>
  modules.forEach((value: HTMLInputElement) => {
    value.addEventListener('click', (e: Event) => {
      const elem = (e.target as HTMLInputElement)
      if (elem.checked) {
        moduleSet.add(elem.value as string)
      } else {
        moduleSet.delete(elem.value as string)
      }
      document.dispatchEvent(new CustomEvent('dispatchModule', { detail: moduleSet }))
    })
  })
}
/**
 * 初期化
 */
async function run() {
  if(document.featurePolicy.allowsFeature('xr-spatial-tracking')) {
    consoleDom(`xr-spatial-tracking is supported`)
  } else {
    consoleDom(`xr-spatial-tracking is not supported`)
  }
  document.addEventListener('devicechange', (e: Event) => {
    consoleDom(`document > devicechange = ${e.target}`)
  })
  window.addEventListener('devicechange', (e: Event) => {
    consoleDom(`window > devicechange = ${e.target}`)
  });
  (window.navigator as any).addEventListener('devicechange', (e: Event) => {
    consoleDom(`window.navigator > devicechange = ${e.target}`)
  })
  (window.navigator as any).xr.addEventListener('devicechange', (e: Event) => {
    consoleDom(`window.navigator.xr > devicechange = ${e.target}`)
  })
  consoleDom(`機能確認`)
  togglePermissions()
  await isSupported()
  // await initializeImmersiveAr()
}
run()
