"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/embla-carousel-react";
exports.ids = ["vendor-chunks/embla-carousel-react"];
exports.modules = {

/***/ "(ssr)/./node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useEmblaCarousel)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var embla_carousel_reactive_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! embla-carousel-reactive-utils */ \"(ssr)/./node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js\");\n/* harmony import */ var embla_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! embla-carousel */ \"(ssr)/./node_modules/embla-carousel/esm/embla-carousel.esm.js\");\n\n\n\n\nfunction useEmblaCarousel(options = {}, plugins = []) {\n  const storedOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(options);\n  const storedPlugins = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(plugins);\n  const [emblaApi, setEmblaApi] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [viewport, setViewport] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const reInit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {\n    if (emblaApi) emblaApi.reInit(storedOptions.current, storedPlugins.current);\n  }, [emblaApi]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if ((0,embla_carousel_reactive_utils__WEBPACK_IMPORTED_MODULE_1__.areOptionsEqual)(storedOptions.current, options)) return;\n    storedOptions.current = options;\n    reInit();\n  }, [options, reInit]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if ((0,embla_carousel_reactive_utils__WEBPACK_IMPORTED_MODULE_1__.arePluginsEqual)(storedPlugins.current, plugins)) return;\n    storedPlugins.current = plugins;\n    reInit();\n  }, [plugins, reInit]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if ((0,embla_carousel_reactive_utils__WEBPACK_IMPORTED_MODULE_1__.canUseDOM)() && viewport) {\n      embla_carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].globalOptions = useEmblaCarousel.globalOptions;\n      const newEmblaApi = (0,embla_carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(viewport, storedOptions.current, storedPlugins.current);\n      setEmblaApi(newEmblaApi);\n      return () => newEmblaApi.destroy();\n    } else {\n      setEmblaApi(undefined);\n    }\n  }, [viewport, setEmblaApi]);\n  return [setViewport, emblaApi];\n}\nuseEmblaCarousel.globalOptions = undefined;\n\n\n//# sourceMappingURL=embla-carousel-react.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1ibGEtY2Fyb3VzZWwtcmVhY3QvZXNtL2VtYmxhLWNhcm91c2VsLXJlYWN0LmVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWlFO0FBQzJCO0FBQ2pEOztBQUUzQyxzQ0FBc0M7QUFDdEMsd0JBQXdCLDZDQUFNO0FBQzlCLHdCQUF3Qiw2Q0FBTTtBQUM5QixrQ0FBa0MsK0NBQVE7QUFDMUMsa0NBQWtDLCtDQUFRO0FBQzFDLGlCQUFpQixrREFBVztBQUM1QjtBQUNBLEdBQUc7QUFDSCxFQUFFLGdEQUFTO0FBQ1gsUUFBUSw4RUFBZTtBQUN2QjtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsZ0RBQVM7QUFDWCxRQUFRLDhFQUFlO0FBQ3ZCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSxnREFBUztBQUNYLFFBQVEsd0VBQVM7QUFDakIsTUFBTSxzREFBYTtBQUNuQiwwQkFBMEIsMERBQWE7QUFDdkM7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFdUM7QUFDdkMiLCJzb3VyY2VzIjpbIi9Vc2Vycy95dWRpc2gvRGVza3RvcC9zcGxvb3QtYXNzaWdubWVudC9mcm9udGVuZC9ub2RlX21vZHVsZXMvZW1ibGEtY2Fyb3VzZWwtcmVhY3QvZXNtL2VtYmxhLWNhcm91c2VsLXJlYWN0LmVzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYXJlT3B0aW9uc0VxdWFsLCBhcmVQbHVnaW5zRXF1YWwsIGNhblVzZURPTSB9IGZyb20gJ2VtYmxhLWNhcm91c2VsLXJlYWN0aXZlLXV0aWxzJztcbmltcG9ydCBFbWJsYUNhcm91c2VsIGZyb20gJ2VtYmxhLWNhcm91c2VsJztcblxuZnVuY3Rpb24gdXNlRW1ibGFDYXJvdXNlbChvcHRpb25zID0ge30sIHBsdWdpbnMgPSBbXSkge1xuICBjb25zdCBzdG9yZWRPcHRpb25zID0gdXNlUmVmKG9wdGlvbnMpO1xuICBjb25zdCBzdG9yZWRQbHVnaW5zID0gdXNlUmVmKHBsdWdpbnMpO1xuICBjb25zdCBbZW1ibGFBcGksIHNldEVtYmxhQXBpXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt2aWV3cG9ydCwgc2V0Vmlld3BvcnRdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgcmVJbml0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChlbWJsYUFwaSkgZW1ibGFBcGkucmVJbml0KHN0b3JlZE9wdGlvbnMuY3VycmVudCwgc3RvcmVkUGx1Z2lucy5jdXJyZW50KTtcbiAgfSwgW2VtYmxhQXBpXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFyZU9wdGlvbnNFcXVhbChzdG9yZWRPcHRpb25zLmN1cnJlbnQsIG9wdGlvbnMpKSByZXR1cm47XG4gICAgc3RvcmVkT3B0aW9ucy5jdXJyZW50ID0gb3B0aW9ucztcbiAgICByZUluaXQoKTtcbiAgfSwgW29wdGlvbnMsIHJlSW5pdF0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhcmVQbHVnaW5zRXF1YWwoc3RvcmVkUGx1Z2lucy5jdXJyZW50LCBwbHVnaW5zKSkgcmV0dXJuO1xuICAgIHN0b3JlZFBsdWdpbnMuY3VycmVudCA9IHBsdWdpbnM7XG4gICAgcmVJbml0KCk7XG4gIH0sIFtwbHVnaW5zLCByZUluaXRdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2FuVXNlRE9NKCkgJiYgdmlld3BvcnQpIHtcbiAgICAgIEVtYmxhQ2Fyb3VzZWwuZ2xvYmFsT3B0aW9ucyA9IHVzZUVtYmxhQ2Fyb3VzZWwuZ2xvYmFsT3B0aW9ucztcbiAgICAgIGNvbnN0IG5ld0VtYmxhQXBpID0gRW1ibGFDYXJvdXNlbCh2aWV3cG9ydCwgc3RvcmVkT3B0aW9ucy5jdXJyZW50LCBzdG9yZWRQbHVnaW5zLmN1cnJlbnQpO1xuICAgICAgc2V0RW1ibGFBcGkobmV3RW1ibGFBcGkpO1xuICAgICAgcmV0dXJuICgpID0+IG5ld0VtYmxhQXBpLmRlc3Ryb3koKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RW1ibGFBcGkodW5kZWZpbmVkKTtcbiAgICB9XG4gIH0sIFt2aWV3cG9ydCwgc2V0RW1ibGFBcGldKTtcbiAgcmV0dXJuIFtzZXRWaWV3cG9ydCwgZW1ibGFBcGldO1xufVxudXNlRW1ibGFDYXJvdXNlbC5nbG9iYWxPcHRpb25zID0gdW5kZWZpbmVkO1xuXG5leHBvcnQgeyB1c2VFbWJsYUNhcm91c2VsIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVtYmxhLWNhcm91c2VsLXJlYWN0LmVzbS5qcy5tYXBcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js\n");

/***/ })

};
;