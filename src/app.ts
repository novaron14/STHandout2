export function greet(names: string[]): string {
  if (names.length === 0) {
    return 'Hello, my friend';
  }
  const normalNames = names.filter(str => /[a-z]/.test(str));
  let normalGreetings: string = '';
  if(normalNames.length==1){
    normalGreetings = `Hello ${normalNames[0]}!`
  }
  return normalGreetings;
}