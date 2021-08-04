import { factory, primaryKey } from '@mswjs/data';

// Enable the following line to suppress MaxListenersExceededWarning when defining many models using mswjs
// However, this method is not recommended as it applies to all Event Emitters.
//
// import { EventEmitter } from 'events';
// EventEmitter.defaultMaxListeners = 0;

export const db = factory({
  model1: {
    id: primaryKey(String),
  },
  model2: {
    id: primaryKey(String),
  },
  model3: {
    id: primaryKey(String),
  },
  model4: {
    id: primaryKey(String),
  },
  model5: {
    id: primaryKey(String),
  },
  model6: {
    id: primaryKey(String),
  },
  model7: {
    id: primaryKey(String),
  },
  model8: {
    id: primaryKey(String),
  },
  model9: {
    id: primaryKey(String),
  },
  model10: {
    id: primaryKey(String),
  },
  // Warning disappears after removing model11
  model11: {
    id: primaryKey(String),
  },
});

// If you do model.create, more warnings will occur.
[...Array(5)].forEach((_, i) => {
  db.model1.create({id: i.toString()})
})

export default db;
