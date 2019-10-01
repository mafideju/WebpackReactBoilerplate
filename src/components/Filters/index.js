import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from './actions'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from './types'

const Filters = ({ activeFilter, handleFilter }) => {
  return (
    <div>
      {filterItems.map(item => {
        if (item.action === activeFilter) {
          return (
            <span href='' key={item.action} style={{ marginRight: '8px' }}>{item.label}</span>
          )
        }
        return (
          <a
            href=''
            key={item.action}
            style={{ marginRight: '8px' }}
            onClick={handleFilter(item.action)}
          >
            {item.label}
          </a>
        )
      })}
    </div>
  )
}

const filterItems = [
  { label: 'Todas', action: SHOW_ALL },
  { label: 'Finalizadas', action: SHOW_COMPLETED },
  { label: 'Para Fazer', action: SHOW_ACTIVE }
]

const mapStateToProps = (state) => ({
  activeFilter: state.filters
})

const mapDispatchToProps = (dispatch) => ({
  handleFilter: (filter) => (e) => {
    e.preventDefault()
    dispatch(setFilter(filter))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
