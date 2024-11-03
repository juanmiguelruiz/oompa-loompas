describe('Test setup', () => {
  it('should work with basic Jest configuration', () => {
    expect(true).toBe(true);
  });

  it('should work with testing-library/jest-dom', () => {
    const element = document.createElement('div');
    element.innerHTML = 'Hello world';
    document.body.appendChild(element);
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Hello world');
  });
});
