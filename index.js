import defaultSettings from './defaultSettings';
const MyWebsite = (props) => {};

const HEAD = `
  <style>
    html {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100%;
    }
    body {
      flex-direction: row;
      font-family: Helvetica;
      text-align: center;
      animation: zoom-fade-in 1s ease-in;
    }
    h1 {
      font-size: 1.8em;
    }
    p {
      margin-top: 2em;
    }

    @media (prefers-color-scheme: dark) {
      body { background:  #333; color: white; }
    }
    
    @media (prefers-color-scheme: light) {
      body { background: white; color:  #555; }
    }
    @keyframes zoom-fade-in {
      from {
        opacity: 0;
        transform: scale(1.2);
      }
      to {
        opacity: 1;
        transform: scale(1.0);
      }
    }
  </style>
`;

const getContent = (settings) => {
  return `
    <h1>${settings.header}</h1>
    <p>${settings.content}</p>
  `;
}
const makeWebsite = (props) => {
  const settings = Object.assign(defaultSettings, props);
  document.title = settings.title;
  if (settings.animated) {
    document.body.classList.add('animated');
  }
  document.getElementsByTagName('head')[0].innerHTML += HEAD;
  document.getElementsByTagName('body')[0].innerHTML += getContent(settings);
};

MyWebsite.createElement = (_, props) => {
  window.addEventListener('DOMContentLoaded', () => {
    makeWebsite(props);
  })
};

export default MyWebsite;