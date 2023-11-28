import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probnyjj-город', 'Unit | Serializer | i-i-s-probnyjj-город', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-probnyjj-город',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-probnyjj-год',

    'model:i-i-s-probnyjj-город',
    'model:i-i-s-probnyjj-здание',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
