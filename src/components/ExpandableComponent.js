import React from 'react';

class ExpandableComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {'expanded': props.initialExpanded}
    this.toggle = this.toggle.bind(this)
    this.remove = this.remove.bind(this)
  }

  toggle(){
    this.setState({'expanded': !this.state.expanded})
  }
  remove() {
    console.log("removing element", this.props.path);
  }
  render(){
    let {expanded} = this.state
    let {children,teaser} = this.props

    return (
      <ul className="collection with-header" >
        <li className="collection-header" onClick={this.toggle}>
          {teaser}
          <div className="secondary-content">
            <i  className="material-icons right">{expanded ? 'expand_less' : 'expand_more' }</i>
          </div>
        </li>
        {expanded ? children : null }
      </ul>
    )
  }
};

ExpandableComponent.propTypes = {
  initialExpanded: React.PropTypes.bool,
  teaser: React.PropTypes.any.isRequired,
  path: React.PropTypes.string.isRequired
};

ExpandableComponent.defaultProps = {
  initialExpanded: false,
  teaser: "something here"
}

export default ExpandableComponent;
