'use strict'

import { expect as expectChai } from 'chai';
import deepFreeze from 'deep-freeze'
import todos, { initialState } from './reducer';
import { ADD_TODO, TOGGLE_TODO } from './types';

describe('TODO LIST', () => {
    it('TODO DEVE SER UMA FUNÇÃO', () => {
        expectChai(todos).to.be.a('function')
    });
    
    it('ADICIONAR UM ITEM', () => {
      const before = deepFreeze([]);
      const action = deepFreeze({ type: ADD_TODO, payload: { id: 0, text: 'Teste do Redux' }});
      const after = [{ id: 0, text: 'Teste do Redux', completed: false }];
      expectChai(todos(before, action)).to.be.deep.equal(after);
    });

    it('ADICIONAR SEGUNDO ITEM', () => {
        const before = deepFreeze([{ id: 0, text: 'Teste do Redux', completed: false }]);
        const action = deepFreeze({ type: ADD_TODO, payload: { id: 1, text: 'Segundo Teste' }});
        const after = deepFreeze([
            { id: 0, text: 'Teste do Redux', completed: false },
            { id: 1, text: 'Segundo Teste', completed: false }
        ]);
        expectChai(todos(before, action)).to.be.deep.equal(after); 
    });

    it('TOGGLE ITEMS', () => {
        const before = deepFreeze([
            { id: 0, text: 'Teste do Redux', completed: false },
            { id: 1, text: 'Segundo Teste', completed: false }
        ]);
        const action = deepFreeze({
            type: TOGGLE_TODO,
            payload: { id: 0 }
        });
        const after = deepFreeze([
            { id: 0, text: 'Teste do Redux', completed: true },
            { id: 1, text: 'Segundo Teste', completed: false }
        ]);
        expectChai(todos(before, action)).to.be.deep.equal(after);
    });

    it('TOGGLE ITEMS II', () => {
        const before = deepFreeze([
            { id: 0, text: 'Teste do Redux', completed: false },
            { id: 1, text: 'Segundo Teste', completed: false }
        ]);
        const action = deepFreeze({
            type: TOGGLE_TODO,
            payload: { id: 1 }
        });
        const after = deepFreeze([
            { id: 0, text: 'Teste do Redux', completed: false },
            { id: 1, text: 'Segundo Teste', completed: true }
        ]);
        expectChai(todos(before, action)).to.be.deep.equal(after);
    });

    it('ACTION UNKNOWN MUST RETURN DEFAULT STATE', () => {
        const before = deepFreeze([{ id: 0, text: 'Teste do Redux', completed: false }]);
        const action = deepFreeze({ type: 'QUALQUER COISA' });
        const after = deepFreeze([{ id: 0, text: 'Teste do Redux', completed: false }]);
        expectChai(todos(before, action)).to.be.deep.equal(after);
    });

    it('ACTION UNDEFINED MUST RETURN INITIAL STATE', () => {
        // const initialState = [];
        const before = undefined;
        const action = deepFreeze({ });
        const after = initialState;
        expectChai(todos(before, action)).to.be.deep.equal(after);
    });

    
})
