import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';

require('file?name=[name].[ext]!./static/index.html');



const render = (Component) => {
  ReactDOM.render(
    <div>
      <Component/>
    </div>,
    document.getElementById('root')
  );
};

render(App);
