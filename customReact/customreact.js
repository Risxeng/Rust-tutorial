function customRender(reactElement, container) {
  // Create the element (like React.createElement simulation)
  const domElement = document.createElement(reactElement.type);

  // Set children (text)
  domElement.innerHTML = reactElement.Children;

  // Set props as attributes
  for (const prop in reactElement.props) {
    if (prop === "Children") continue; // skip Children
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  // Append to container
  container.appendChild(domElement);
}

// Example element
const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  Children: 'Click me to visit Google'
};

// Get root container
const maincontainer = document.querySelector('#root');

// Render
customRender(reactElement, maincontainer);
