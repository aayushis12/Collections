"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Header.prototype.render = function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "header",
        null,
        "Pocket"
      )
    );
  };

  return Header;
}(React.Component);

var SideBar = function (_React$Component2) {
  _inherits(SideBar, _React$Component2);

  function SideBar() {
    _classCallCheck(this, SideBar);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  SideBar.prototype.render = function render() {
    return React.createElement(
      "div",
      { className: "profile" },
      React.createElement("img", { src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS4VaElFnHr3b2bfG5OZWZK24fbHOB43-yem7Plh3SELZRCrc64hNsLblI" }),
      React.createElement(
        "div",
        { className: "settings" },
        React.createElement(
          "a",
          { href: "#" },
          "Settings"
        )
      ),
      React.createElement(
        "div",
        { className: "collections" },
        React.createElement(
          "a",
          { href: "#" },
          "Collections"
        )
      ),
      React.createElement(
        "div",
        { className: "resources" },
        React.createElement(
          "a",
          { href: "#" },
          "Resources"
        )
      )
    );
  };

  return SideBar;
}(React.Component);

var MainSection = function (_React$Component3) {
  _inherits(MainSection, _React$Component3);

  function MainSection() {
    _classCallCheck(this, MainSection);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  MainSection.prototype.render = function render() {
    return React.createElement(
      "div",
      { className: "main" },
      React.createElement(
        "div",
        null,
        React.createElement("input", { type: "text", placeholder: "Add Collection here" }),
        React.createElement(
          "button",
          null,
          "Add"
        )
      ),
      React.createElement(
        "div",
        { className: "panel panel-default" },
        React.createElement(
          "div",
          { className: "panel-heading title text-left" },
          "My Collection"
        ),
        React.createElement(
          "div",
          { className: "panel-body img-bar" },
          React.createElement("img", { className: "", src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTMZhSPZQF0ourl_MJJ96ByxvubN7mJfJ2rm2Zbq8-AQHEHTybpfw" }),
          React.createElement("img", { className: "", src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQzqmxTVu1XdbEof7qcOGf_nG2FafnqRKBSlLqMMelVh12rSvx5VA" }),
          React.createElement("img", { className: "", src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSu80ZQePdKBckc1YGadTzQ3LNZrkmxt1Q86yuVRFtSKbsZvrdPZA" }),
          React.createElement("img", { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGMyf7-LaD-mrmau-ojDGe8RostprKmOEMo2Idjlql0URB9M7X" })
        )
      ),
      React.createElement(
        "div",
        { className: "panel panel-default" },
        React.createElement(
          "div",
          { className: "panel-heading title text-left" },
          "Collaborate"
        ),
        React.createElement(
          "div",
          { className: "panel-body" },
          React.createElement("img", { className: "", src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSbZpNz3E0rPZqNx8Ue2ThKcCeqC97-kffW2DNCgXpZIK2MYbUkKw" }),
          React.createElement("img", { className: "", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYOJ4CKXJ4WMwJTKhp5encKKSR3KaGIY0pGsRqiIkkL-Qjboo9" }),
          React.createElement("img", { className: "", src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQInaYgdTxgiqj46UElHOVHTpSAfFq71xn244wa-qMesGDyYU8o2g" })
        )
      )
    );
  };

  return MainSection;
}(React.Component);

var Pocket = function (_React$Component4) {
  _inherits(Pocket, _React$Component4);

  function Pocket() {
    _classCallCheck(this, Pocket);

    return _possibleConstructorReturn(this, _React$Component4.apply(this, arguments));
  }

  Pocket.prototype.render = function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Header, null),
      React.createElement(
        "div",
        { className: "rowC" },
        React.createElement(SideBar, null),
        React.createElement(MainSection, null)
      )
    );
  };

  return Pocket;
}(React.Component);

ReactDOM.render(React.createElement(Pocket, null), document.getElementById('container'));