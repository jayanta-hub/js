const React = (function () {
  let _val;
  function useState(initval) {
    const state = _val || initval;
    const setState = (newVal) => {
      _val = newVal;
    };
    return [state, setState];
  }
  function render(Component) {
    const C = Component();
    C.render();
    return C;
  }
  return { useState, render };
})();
function Home() {
  const [count, setCount] = React.useState(1);
  return {
    render: () => console.log("Count", count),
    click: () => setCount(count + 1),
  };
}
let App = React.render(Home);
App.click();
App = React.render(Home);
App.click();
App = React.render(Home);
App.click();
App = React.render(Home);
