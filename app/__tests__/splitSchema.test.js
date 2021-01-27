import splitSchema from 'schemas/split-schema';

const order = ['requiredProperty', 'unrequiredProperty', 'hasDependency', 'isDependent', 'object'];

const testSchema = {
  title: 'test',
  type: 'object',
  required: ['requiredProperty'],
  dependencies: {
    hasDependency: {
      oneOf: [
        {
          properties: {
            hasDependency: true,
          },
        },
        {
          properties: {
            hasDependency: false,
          },
          required: ['isDependent'],
        },
      ],
    },
  },
  properties: {
    requiredProperty: {
      type: 'boolean',
    },
    unrequiredProperty: {
      type: 'boolean',
    },
    hasDependency: {
      type: 'boolean',
    },
    isDependent: {
      type: 'boolean',
    },
    object: {
      type: 'object',
      properties: {
        one: {
          type: 'boolean',
        },
        two: {
          type: 'boolean',
        },
      },
    },
  },
};

const shared = {
  title: 'test',
  type: 'object',
  dependencies: {},
  required: [],
};

const expectedRequiredProperty = {
  ...shared,
  required: ['requiredProperty'],
  properties: {
    requiredProperty: {
      type: 'boolean',
    },
  },
};

const expectedUnrequiredProperty = {
  ...shared,
  properties: {
    unrequiredProperty: {
      type: 'boolean',
    },
  },
};

const expectedDependentSchema = {
  ...shared,
  dependencies: testSchema.dependencies,
  properties: {
    hasDependency: {
      type: 'boolean',
    },
    isDependent: {
      type: 'boolean',
    },
  },
};

const expectedObjectSchema = {
  properties: {
    object: {
      type: 'object',
      properties: {
        one: {
          type: 'boolean',
        },
        two: {
          type: 'boolean',
        },
      },
    },
  },
};

describe('Helper splits schemas correctly', () => {
  const splitSchemas = splitSchema(testSchema, order);

  it('Splits individual properties into separate schemas', () => {
    const requiredProperty = splitSchemas[0];
    expect(requiredProperty).toEqual(expectedRequiredProperty);
  });

  it('Does not add required to unrequired fields', () => {
    const unrequiredProperty = splitSchemas[1];
    expect(unrequiredProperty).toEqual(expectedUnrequiredProperty);
  });

  // NOTE: Currently only support dependencies with requirements. Should be expanded in future
  it('Keeps dependant fields in the same schema with dependancy relation', () => {
    const dependantProperties = splitSchemas[2];
    expect(dependantProperties).toEqual(expectedDependentSchema);
  });

  // TODO: objects currently only copy over properties. Should expand to keep required, title, etc.
  it('Keeps properties of type object together', () => {
    const dependantProperties = splitSchemas[3];
    expect(dependantProperties).toEqual(expectedObjectSchema);
  });
});
