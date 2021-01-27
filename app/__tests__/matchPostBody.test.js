import { matchPostBody } from 'utils/form-helpers';

const testSchema = {
  properties: {
    true: {
      type: 'boolean',
    },
    false: {
      type: 'boolean',
    },
    array: {
      type: 'array',
      name: 'array',
      items: {
        type: 'string',
        enum: ['1', '2', '3'],
      },
    },
    object: {
      type: 'object',
      properties: {
        Objtrue: {
          type: 'boolean',
        },
        Objfalse: {
          type: 'boolean',
        },
        Objarray: {
          type: 'array',
          name: 'objectArray',
          items: {
            type: 'string',
            enum: ['1', '2'],
          },
        },
      },
    },
  },
};

const nonJsPost = {
  true: 'true',
  false: 'false',
  array: '1',
  notInSchema: 'test',
  Objtrue: 'true',
  Objfalse: 'false',
  Objarray: '1',
  notInObject: 'test',
};

describe('Helper matches non-js and js posts', () => {
  const matchedPost = matchPostBody(nonJsPost, testSchema);

  it('converts non-js booleans correctly', () => {
    expect(matchedPost.true).toBe(true);
    expect(matchedPost.false).toBe(false);
  });

  it('converts single-value arrays correctly without js', () => {
    expect(matchedPost.array).toEqual(['1']);
  });

  it('removes values that are not on the schema', () => {
    expect(matchedPost.notInSchema).toBe(undefined);
  });

  it('parses properties nested in objects correctly', () => {
    const matchedObject = matchedPost.object;
    expect(matchedObject.Objtrue).toBe(true);
    expect(matchedObject.Objfalse).toBe(false);
    expect(matchedObject.Objarray).toEqual(['1']);
    expect(matchedObject.notInObject).toBe(undefined);
  });
});
