webpackHotUpdate("main",{

/***/ "./src/Tabs.js":
/*!*********************!*\
  !*** ./src/Tabs.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");
/* harmony import */ var react_tabs_style_react_tabs_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tabs/style/react-tabs.css */ "./node_modules/react-tabs/style/react-tabs.css");
/* harmony import */ var react_tabs_style_react_tabs_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tabs_style_react_tabs_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/michaeldriscoll/ga-sei/react-stuff/projects/api-ui-pattern/react-ui-api-project/src/Tabs.js";
 // import Tab from './Tab';




class Tabs1 extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.state = {
      songs: []
    }; // this.callSong = this.callSong.bind(this)
  }

  componentDidMount() {
    fetch("http://www.songsterr.com/a/ra/songs.json?pattern=Marley").then(res => res.json()).then(songInfo => {
      // console.log(songInfo)
      this.setState({
        artist: [songInfo[0].artist.name]
      });
      songInfo.forEach(infoPack => {
        this.state.songs.push(infoPack.title);
      });
    });
  } // callSong() {         
  //                 fetch("http://www.songsterr.com/a/ra/songs.json?pattern=Marley")
  //                     .then(res => res.json())
  //                     .then(songInfo => {
  //                         // console.log(songInfo)
  //                         this.setState({ artist: [songInfo[0].artist.name] });
  //                          songInfo.forEach(infoPack => {
  //                             this.state.songs.push(infoPack.title)                    
  //                         })
  //                      })
  //                         // console.log(this.state.artist)
  //                         // console.log(this.state.songs)
  //                      }


  render() {
    console.log(this.props.songs);
    console.log(this.state.songs);
    const items = this.state.songs.map(song => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, song);
    });
    console.log(items);
    const displayPosts = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
      defaultIndex: 0
      /*onSelect={index => console.log(index)}*/
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabList"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, this.state.artist), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "title2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "title3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "title4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "title5"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "title6"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "title7")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, items)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "things2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "things3")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, "things4")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "things5")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "things6")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "things7")));
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "randButton",
      onClick: this.callSong,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "click me"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, "some other stuff"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }), displayPosts);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Tabs1);

/***/ })

})
//# sourceMappingURL=main.8235f78a0a375081bb53.hot-update.js.map