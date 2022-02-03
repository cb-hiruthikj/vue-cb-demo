import HelloWorld from '../HelloWorld.vue';
import { render } from '@testing-library/vue';

describe('Hello World', () => {
  it('It renders the text "Ecosystem"', () => {
    const { getByText } = render(HelloWorld);
    getByText('Ecosystem');
  })
});