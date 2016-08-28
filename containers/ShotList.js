import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from '../components/List'
import ShotListItem from './ShotListItem'
import { loadShots } from '../actions/index'

const mapStateToProps = (state, ownProps) => {
  const { shots, pagination, isFetching } = state
  const shotList = pagination.ids.map(id => shots[id])
  return { shots: shotList, isFetching: pagination.isFetching }
}

class ShotList extends Component {
  componentWillMount() {
    const { loadShots } = this.props
    if (this.shouldLoadShots(this.props)) {
      loadShots()
    }
  }

  componentWillReceiveProps(nextProps) {
    const { loadShots } = nextProps
    if (this.shouldLoadShots(nextProps)) {
      loadShots()
    }
  }

  shouldLoadShots(props) {
    const { shots: { length }, isFetching } = props
    return length == 0 && !isFetching
  }

  renderShotItem(shot) {
    return (
      <ShotListItem
        shot={shot}
      />
    )
  }

  render() {
    const { shots } = this.props

    return (
      <List
        renderItem={this.renderShotItem}
        items={shots}
        className={"shot-list"}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  { loadShots }
)(ShotList)
