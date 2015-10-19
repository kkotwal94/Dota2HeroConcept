import React from 'react';
import Helmet from 'react-helmet';

import config from 'helmconfig.js';

class Header extends React.Component {
  render() {
    return (
      <Helmet
        title="Dota 2 Custom Heroes"
        meta={config.meta}
        link={config.link}
      />
    );
  }
}

React.renderToString(<Header />);
let header = Helmet.rewind();

export default header;
