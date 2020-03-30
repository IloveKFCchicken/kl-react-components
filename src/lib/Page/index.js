import React from 'react';
import './index.less'

class Page extends React.Component{
  constructor(props) {
    super(props)
  }

  render(){
    const {title,children} = this.props;
    return(
      <div className="kl-page">
        {
          title &&
          <div className="kl-page--title">
            {title}
          </div>
        }

        <div className="kl-page--container">
          {children}
        </div>
      </div>
    )
  }
}

export default Page