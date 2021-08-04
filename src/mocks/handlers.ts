import { rest } from 'msw'
import db from './data'

export const handlers = [
  rest.get('/sample', (req, res, ctx) => {
    return res(ctx.json(db.model1.getAll()))
  }),
]

