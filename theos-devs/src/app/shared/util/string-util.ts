export class StringUtil {
  public static alphabeticalOrder(array: Array<any>): Array<any> {
    return array.sort((a, b) => {
      return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
    });
  }
}
