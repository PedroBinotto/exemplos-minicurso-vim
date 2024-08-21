/* file    ex1/ex2.ts
 * author  Pedro Santi Binotto, André William Régis
 *
 * Exemplo 2.1: SUBSTITUIÇÃO DE TEXTO
 */

function main(): void {
  const params = getParams();
  console.log(params);
}

export function getParams(): { value: number }[] {
  // TODO: refactor to return object values
  return [1, 2, 3];
}

main();
