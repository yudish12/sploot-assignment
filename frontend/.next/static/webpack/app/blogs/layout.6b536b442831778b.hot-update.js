"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/blogs/layout",{

/***/ "(app-pages-browser)/./src/api-functions/blogs.ts":
/*!************************************!*\
  !*** ./src/api-functions/blogs.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addBlog: () => (/* binding */ addBlog),\n/* harmony export */   getBlogs: () => (/* binding */ getBlogs),\n/* harmony export */   getCategories: () => (/* binding */ getCategories),\n/* harmony export */   getSingleBlog: () => (/* binding */ getSingleBlog)\n/* harmony export */ });\nconst getCategories = async ()=>{\n    const resp = await fetch(\"http://localhost:5000/api/\" + \"blogs/categories\", {\n        next: {\n            revalidate: 60 * 60\n        }\n    });\n    const response = await resp.json();\n    return response;\n};\nconst getBlogs = async (categoryid)=>{\n    const resp = await fetch(\"http://localhost:5000/api/\" + \"blogs/fetch?categoryid=\".concat(categoryid), {\n        next: {\n            revalidate: 60 * 60\n        }\n    });\n    const response = await resp.json();\n    return response;\n};\nconst getSingleBlog = async (id)=>{\n    const resp = await fetch(\"http://localhost:5000/api/\" + \"blogs/fetch/\".concat(id), {\n        next: {\n            revalidate: 60 * 60\n        }\n    });\n    const response = await resp.json();\n    return response;\n};\nconst addBlog = async (title, description, link, category, image, token)=>{\n    const formdata = new FormData();\n    formdata.append(\"title\", title);\n    formdata.append(\"description\", description);\n    formdata.append(\"link\", link);\n    formdata.append(\"category\", category);\n    formdata.append(\"image\", image !== null && image !== void 0 ? image : \"\");\n    const resp = await fetch(\"http://localhost:5000/api/\" + \"blogs/add\", {\n        method: \"POST\",\n        headers: {\n            Authorization: \"Bearer \".concat(token)\n        },\n        body: formdata\n    });\n    const response = await resp.json();\n    return response;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcGktZnVuY3Rpb25zL2Jsb2dzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFTyxNQUFNQSxnQkFBZ0I7SUFDM0IsTUFBTUMsT0FBTyxNQUFNQyxNQUNqQkMsNEJBQStCLEdBQUcsb0JBQ2xDO1FBQ0VHLE1BQU07WUFBRUMsWUFBWSxLQUFLO1FBQUc7SUFDOUI7SUFFRixNQUFNQyxXQUFXLE1BQU1QLEtBQUtRLElBQUk7SUFDaEMsT0FBT0Q7QUFDVCxFQUFFO0FBRUssTUFBTUUsV0FBVyxPQUFPQztJQUM3QixNQUFNVixPQUFPLE1BQU1DLE1BQ2pCQyw0QkFBK0IsR0FBRywwQkFBcUMsT0FBWFEsYUFDNUQ7UUFDRUwsTUFBTTtZQUFFQyxZQUFZLEtBQUs7UUFBRztJQUM5QjtJQUVGLE1BQU1DLFdBQVcsTUFBTVAsS0FBS1EsSUFBSTtJQUNoQyxPQUFPRDtBQUNULEVBQUU7QUFFSyxNQUFNSSxnQkFBZ0IsT0FBT0M7SUFDbEMsTUFBTVosT0FBTyxNQUFNQyxNQUNqQkMsNEJBQStCLEdBQUcsZUFBa0IsT0FBSFUsS0FDakQ7UUFDRVAsTUFBTTtZQUFFQyxZQUFZLEtBQUs7UUFBRztJQUM5QjtJQUVGLE1BQU1DLFdBQVcsTUFBTVAsS0FBS1EsSUFBSTtJQUVoQyxPQUFPRDtBQUNULEVBQUU7QUFFSyxNQUFNTSxVQUFVLE9BQ3JCQyxPQUNBQyxhQUNBQyxNQUNBQyxVQUNBQyxPQUNBQztJQUVBLE1BQU1DLFdBQVcsSUFBSUM7SUFDckJELFNBQVNFLE1BQU0sQ0FBQyxTQUFTUjtJQUN6Qk0sU0FBU0UsTUFBTSxDQUFDLGVBQWVQO0lBQy9CSyxTQUFTRSxNQUFNLENBQUMsUUFBUU47SUFDeEJJLFNBQVNFLE1BQU0sQ0FBQyxZQUFZTDtJQUM1QkcsU0FBU0UsTUFBTSxDQUFDLFNBQVNKLGtCQUFBQSxtQkFBQUEsUUFBUztJQUVsQyxNQUFNbEIsT0FBTyxNQUFNQyxNQUFNQyw0QkFBK0IsR0FBSSxhQUFZO1FBQ3RFcUIsUUFBUTtRQUNSQyxTQUFTO1lBQ1BDLGVBQWUsVUFBZ0IsT0FBTk47UUFDM0I7UUFDQU8sTUFBTU47SUFDUjtJQUVBLE1BQU1iLFdBQVcsTUFBTVAsS0FBS1EsSUFBSTtJQUNoQyxPQUFPRDtBQUNULEVBQUUiLCJzb3VyY2VzIjpbIi9Vc2Vycy95dWRpc2gvRGVza3RvcC9zcGxvb3QtYXNzaWdubWVudC9mcm9udGVuZC9zcmMvYXBpLWZ1bmN0aW9ucy9ibG9ncy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcGlSZXNwb25zZSB9IGZyb20gXCJAL3R5cGVzL2dsb2JhbHNcIjtcblxuZXhwb3J0IGNvbnN0IGdldENhdGVnb3JpZXMgPSBhc3luYyAoKTogUHJvbWlzZTxBcGlSZXNwb25zZT4gPT4ge1xuICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCArIFwiYmxvZ3MvY2F0ZWdvcmllc1wiLFxuICAgIHtcbiAgICAgIG5leHQ6IHsgcmV2YWxpZGF0ZTogNjAgKiA2MCB9LFxuICAgIH1cbiAgKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXNwLmpzb24oKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEJsb2dzID0gYXN5bmMgKGNhdGVnb3J5aWQ6IHN0cmluZyk6IFByb21pc2U8QXBpUmVzcG9uc2U+ID0+IHtcbiAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKFxuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgKyBgYmxvZ3MvZmV0Y2g/Y2F0ZWdvcnlpZD0ke2NhdGVnb3J5aWR9YCxcbiAgICB7XG4gICAgICBuZXh0OiB7IHJldmFsaWRhdGU6IDYwICogNjAgfSxcbiAgICB9XG4gICk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVzcC5qc29uKCk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTaW5nbGVCbG9nID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPEFwaVJlc3BvbnNlPiA9PiB7XG4gIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChcbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMICsgYGJsb2dzL2ZldGNoLyR7aWR9YCxcbiAgICB7XG4gICAgICBuZXh0OiB7IHJldmFsaWRhdGU6IDYwICogNjAgfSxcbiAgICB9XG4gICk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVzcC5qc29uKCk7XG5cbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZEJsb2cgPSBhc3luYyAoXG4gIHRpdGxlOiBzdHJpbmcsXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gIGxpbms6IHN0cmluZyxcbiAgY2F0ZWdvcnk6IHN0cmluZyxcbiAgaW1hZ2U6IEZpbGUgfCBudWxsLFxuICB0b2tlbj86IHN0cmluZ1xuKTogUHJvbWlzZTxBcGlSZXNwb25zZT4gPT4ge1xuICBjb25zdCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICBmb3JtZGF0YS5hcHBlbmQoXCJ0aXRsZVwiLCB0aXRsZSk7XG4gIGZvcm1kYXRhLmFwcGVuZChcImRlc2NyaXB0aW9uXCIsIGRlc2NyaXB0aW9uKTtcbiAgZm9ybWRhdGEuYXBwZW5kKFwibGlua1wiLCBsaW5rKTtcbiAgZm9ybWRhdGEuYXBwZW5kKFwiY2F0ZWdvcnlcIiwgY2F0ZWdvcnkpO1xuICBmb3JtZGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBpbWFnZSA/PyBcIlwiKTtcblxuICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCArIGBibG9ncy9hZGRgLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICB9LFxuICAgIGJvZHk6IGZvcm1kYXRhLFxuICB9KTtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlc3AuanNvbigpO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuIl0sIm5hbWVzIjpbImdldENhdGVnb3JpZXMiLCJyZXNwIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsIm5leHQiLCJyZXZhbGlkYXRlIiwicmVzcG9uc2UiLCJqc29uIiwiZ2V0QmxvZ3MiLCJjYXRlZ29yeWlkIiwiZ2V0U2luZ2xlQmxvZyIsImlkIiwiYWRkQmxvZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsaW5rIiwiY2F0ZWdvcnkiLCJpbWFnZSIsInRva2VuIiwiZm9ybWRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYm9keSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/api-functions/blogs.ts\n"));

/***/ })

});