import { expect as expectChai } from 'chai';
import deepFreeze from 'deep-freeze'
import filters, { initialState } from './reducer';
import { 
  SET_VISIBILITY_FILTER, 
  SHOW_COMPLETED, 
  SHOW_ALL, 
  SHOW_ACTIVE 
} from './types'

describe('TODO LIST', () => {
  it('FILTERS DEVE SER UMA FUNÇÃO', () => {
    expectChai(filters).to.be.a('function')
  })

  it('FILTRO MOSTRA TUDO', () => {
    const before = SHOW_COMPLETED
    const action = deepFreeze({
      type: SET_VISIBILITY_FILTER,
      payload: { filter: SHOW_ALL }
    })
    const after = SHOW_ALL
    expectChai(filters(before, action)).to.be.equal(after)
  })

  it('FILTRO FINALIZADOS', () => {
    const before = SHOW_ALL
    const action = deepFreeze({
      type: SET_VISIBILITY_FILTER,
      payload: { filter: SHOW_COMPLETED }
    })
    const after = SHOW_COMPLETED
    expectChai(filters(before, action)).to.be.equal(after)
  })

  it('FILTRO ATIVOS', () => {
    const before = SHOW_ALL
    const action = deepFreeze({
      type: SET_VISIBILITY_FILTER,
      payload: { filter: SHOW_ACTIVE }
    })
    const after = SHOW_ACTIVE
    expectChai(filters(before, action)).to.be.equal(after)
  })

  it('FILTRO DESCONHECIDOS', () => {
    const before = SHOW_COMPLETED
    const action = deepFreeze({
      type: 'AÇÃO_DESCONHECIDA',
      payload: { filter: SHOW_ALL }
    })
    const after = SHOW_COMPLETED
    expectChai(filters(before, action)).to.be.equal(after)
  })

  it('FILTRO UNDEFINED', () => {
    const before = undefined
    const action = deepFreeze({})
    const after = initialState
    expectChai(filters(before, action)).to.be.equal(after)
  })
})