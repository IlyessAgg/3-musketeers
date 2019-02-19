const starWars = require('./index');
const starWarsNames = require('./starwars-names.json');

describe('starwars-names', () => {
  describe('all', () => {
    test('should be a fulfilled array', () => {
      expect(starWars.all).toHaveLength(starWarsNames.length);
    });
    test('should be an array of strings', () => {
		for(const name of starWars.all){
			expect(typeof(name)).toBe('string');
		}
    });

    test('should contain `Luke Skywalker`', () => {
      expect(starWars.all).toContain('Luke Skywalker');
    });

    test('should not contain `Ben Quadinaros`', () => {
      expect(starWars.all).not.toContain('Ben Quadinaros');
    });
  });

  describe('random', () => {
    test('should return a random item from the starWars.all', () => {
      expect(starWarsNames).toContain(starWars.random());
    });

    test('should return an array of random items if passed a number', () => {
      for(const name of starWars.random(5)){
			expect(starWarsNames).toContain(name);
		}
	  expect(starWars.random(5)).toHaveLength(5);
    });
  });
});
